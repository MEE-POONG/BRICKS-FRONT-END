import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { fromSchema } from "../../schemas";
import AddressForm from "./AddressForm";
import { useFormik } from "formik";
import useAxios from "axios-hooks";
import { useSession } from "next-auth/react";

export default function AddressSelect({ addressSelected, setAddressSelected }) {
  const { data: session } = useSession();
  let [isOpen, setIsOpen] = useState(false);

  //ADDRESS GET DATA
  const [
    { data: addressData, loading: addressLoading, error: addressError },
    getAddress,
  ] = useAxios({
    url: "/api/address",
    params: { userId: session?.user.id },
    method: "GET",
  });

  //ADDRESS POST DATA
  const [{ loading: addressExcLoading, error: addressExcError }, excAddress] =
    useAxios({
      url: "/api/address",
      method: "POST",
    });

  //FORM VALIDATION
  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      tel: "",
      province: "",
      district: "",
      subDistrict: "",
      postalCode: "",
      address: "",
    },
    validationSchema: fromSchema,
    onSubmit: async (values) => {
      try {
        await excAddress({
          data: {
            firstname: values.firstname,
            lastname: values.lastname,
            tel: values.tel,
            province: values.province,
            district: values.district,
            subDistrict: values.subDistrict,
            postalCode: values.postalCode,
            address: values.address,
            userId: session?.user.id,
          },
        }).then(() => {
          setIsOpen(false);
          getAddress();
        });
      } catch (error) {
        console.log(error);
      }
    },
  });
  //END FORM VALIDATION

  return (
    <>
      <div className="flex justify-around mt-10">
        <div className="flex">
          <div className="flex-1 py-5 pl-5 overflow-hidden">
            <svg
              className="inline align-text-top"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g>
                <path
                  d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                  fill="none"
                  id="svg_1"
                  stroke="null"
                ></path>
                <path
                  d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                  id="svg_2"
                ></path>
                <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
              </g>
            </svg>
            <h1 className="inline text-2xl font-semibold leading-none">
              ที่อยู่ของฉัน
            </h1>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-xl bg-primary px-4 py-2 text-xl font-semibold text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          เพิ่มที่อยู่
        </button>
      </div>

      {addressData?.length !== 0 ? (
        <div className="w-2/3 mx-auto">
          {addressData?.map((address, index) => (
            <div
              key={index}
              className={`${
                addressSelected?.id === address.id
                  ? "border-primary"
                  : "border-gray-400"
              } p-10 my-4 rounded-lg border-2 hover:border-primary`}
              onClick={() => {
                setAddressSelected(address);
              }}
            >
              <div className="flex justify-around">
                <span>ชื่อจริง: {address.firstname}</span>
                <span>นามสกุล: {address.lastname}</span>
                <span>เบอร์โทร: {address.tel}</span>
              </div>
              <div className="flex justify-around">
                <span>จังหวัด: {address.province}</span>
                <span>อำเภอ: {address.district}</span>
                <span>ตำบล: {address.subDistrict}</span>
                <span>รหัสไปรษณีย์: {address.postalCode}</span>
              </div>
              <div className="flex justify-around">
                <span>รายละเอียด: {address.address}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center my-20">
          <span className="text-4xl font-bold">
            ไม่มีที่อยู่จัดส่งกรุณาเพิ่มที่อยู่
          </span>
        </div>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full mx-4 transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <AddressForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
