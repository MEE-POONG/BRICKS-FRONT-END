import useAxios from "axios-hooks";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Basket from "../components/Basket/Basket";
import CheckBill from "../components/CheckBill/CheckBill";
import Loading from "../components/Loading";
import Successfully from "../components/Stepper/Successfully";
import Stepper from "../components/Stepper/Stepper";
import StepperControl from "../components/Stepper/StepperControl";
import AddressSelect from "../components/Address/AddressSelect";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCart } from "../store/cart/cartSlice";

export default function Checkout() {
  //SESSION
  const { data: session } = useSession();
  //END SESSION

  // REDUX
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartStore);
  // END REDUX
  console.log("cartData", cartData);

  //STEP BUTTON
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["เลือกสินค้า", "ตระกร้าสินค้า", "ข้อมูลที่อยู่", "ชำระเงิน"];
  //END STEP BUTTON

  // ORDER EXECUTE
  const [{ error: orderError, loading: orderLoading }, executeOrder] = useAxios(
    { url: "/api/orders", method: "POST" },
    { manual: true }
  );
  //END ORDER EXECUTE

  //ADDRESS SELECTED
  const [addressSelected, setAddressSelected] = useState();
  //END ADDRESS SELECTED

  // UPLOAD IMAGE
  const [{ loading: imgLoading, error: imgError }, uploadImage] = useAxios(
    { url: "/api/uploads", method: "POST" },
    { manual: true }
  );
  const [image, setImage] = useState([]);
  const [imageURL, setImageURL] = useState([]);

  useEffect(() => {
    if (image.length < 1) return;
    const newImageUrl = [];
    image.forEach((image) => newImageUrl.push(URL.createObjectURL(image)));
    setImageURL(newImageUrl);
  }, [image]);

  const onImageSlipChange = (file) => {
    setImage([file]);
  };
  //END UPLOAD IMAGE

  //IMAGE UPLOAD CHECK
  const ImageCheck = () => {
    if (image[0] === undefined) {
      return true;
    }
    return false;
  };
  //END IMAGE UPLOAD CHECK

  // SUBMIT ORDERS
  const handleExec = async () => {
    let data = new FormData();
    data.append("file", image[0]);
    const imageData = await uploadImage({ data: data });
    const id = imageData.data.result.id;

    try {
      await executeOrder({
        data: {
          totalPrice: cartData?.totalPrice,
          image: `https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${id}/public`,
          status: "กำลังดำเนินการ",
          userId: session?.user.id,
          addressId: cartData?.addressId,
          cart: cartData?.cart,
        },
      }).then(() => {
        dispatch(deleteAllCart(session?.user.cartId));
      });
    } catch (error) {
      console.log(error);
    }
  };
  //END SUBMIT ORDERS

  //STEP PAGES FUNCTION
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    //check if step are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <Basket />;
      case 2:
        return (
          <AddressSelect
            addressSelected={addressSelected}
            setAddressSelected={setAddressSelected}
            dispatch={dispatch}
          />
        );
      case 3:
        return (
          <CheckBill
            imageURL={imageURL}
            onImageSlipChange={onImageSlipChange}
          />
        );
      case 4:
        if (orderLoading || imgLoading) {
          return <Loading />;
        } else {
          return <Successfully />;
        }
      default:
    }
  };
  //END STEP PAGES FUNCTION

  return (
    <>
      <div className="mx-auto shadow-xl rounded-3xl pb-2 bg-white m-10 lg:w-4/5">
        {/* Stepper */}
        <div className="container horizontal my-8 mx-auto">
          <Stepper steps={steps} currentStep={currentStep} />

          {/* Display Components */}
          {displaySteps(currentStep)}
        </div>
        {/* Navigation controls */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            handleExec={handleExec}
            currentStep={currentStep}
            steps={steps}
            ImageCheck={ImageCheck}
          />
        )}
      </div>
    </>
  );
}
