import { Form, Formik } from "formik";
import React from "react";
import { toast } from "react-hot-toast";
import { fromSchemaEdit } from "../../schemas";
import CustomInput from "./CustomInput";

export default function AddressFormEdit({
  putAddress,
  addressEdit,
  setAddressEdit,
  getAddress,
  session,
}) {
  const handleSubmit = async (values, actions) => {
    try {
      await putAddress({
        params: { addressId: addressEdit.values.id },
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
      }).then(async () => {
        await setAddressEdit({ values: values, isOpen: false });
        await getAddress().then(() => toast.success("แก้ไขที่อยู่เรียบร้อย"));
        await actions.resetForm();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          addressId: addressEdit.values.addressId,
          firstname: addressEdit.values.firstname,
          lastname: addressEdit.values.lastname,
          tel: addressEdit.values.tel,
          province: addressEdit.values.province,
          district: addressEdit.values.district,
          subDistrict: addressEdit.values.subDistrict,
          postalCode: addressEdit.values.postalCode,
          address: addressEdit.values.address,
        }}
        validationSchema={fromSchemaEdit}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mx-auto bg-white rounded-lg lg:w-3/4">
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
                    <circle
                      cx="7.04807"
                      cy="6.97256"
                      r="2.5"
                      id="svg_3"
                    ></circle>
                  </g>
                </svg>
                <h1 className="inline text-2xl font-semibold leading-none">
                  ที่อยู่จัดส่ง
                </h1>
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="lg:flex">
                <div className="relative flex-grow px-2 my-6">
                  <div className="absolute text-gray-600 flex items-center px-2 border-r h-full">
                    {/* <Person /> */}
                  </div>
                  <CustomInput
                    name={"firstname"}
                    type={"text"}
                    placeholder={"ชื่อจริง"}
                  />
                </div>
                <div className="relative flex-grow px-2 my-6">
                  <div className="absolute text-gray-600 flex items-center px-2 border-r h-full">
                    {/* <Person /> */}
                  </div>
                  <CustomInput
                    name={"lastname"}
                    type={"text"}
                    placeholder={"นามสกุล"}
                  />
                </div>
              </div>
              <div className="lg:flex">
                <div className="relative flex-grow px-2 my-4">
                  <div className="absolute text-gray-600 flex items-center px-2 border-r h-full">
                    {/* <Smartphone /> */}
                  </div>
                  <CustomInput
                    name={"tel"}
                    type={"tel"}
                    placeholder={"เบอร์โทรศัพท์"}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="flex-grow px-2 my-4">
                  <CustomInput
                    name={"province"}
                    type={"text"}
                    placeholder={"จังหวัด"}
                  />
                </div>
                <div className="flex-grow px-2 my-4">
                  <CustomInput
                    name={"district"}
                    type={"text"}
                    placeholder={"อำเภอ"}
                  />
                </div>
                <div className="flex-grow px-2 my-4">
                  <CustomInput
                    name={"subDistrict"}
                    type={"text"}
                    placeholder={"ตำบล"}
                  />
                </div>
              </div>
              <div className="relative flex-grow px-2 my-4">
                <div className="absolute text-gray-600 flex items-center px-2 border-r h-full">
                  {/* <MarkunreadMailbox /> */}
                </div>
                <CustomInput
                  name={"postalCode"}
                  type={"text"}
                  placeholder={"รหัสไปรษณีย์"}
                />
              </div>
              <div className="relative flex-grow px-2 mt-8">
                <div className="absolute text-gray-600 flex items-center px-2 border-r h-full">
                  {/* <Home /> */}
                </div>
                <CustomInput
                  name={"address"}
                  type={"text"}
                  placeholder={"ที่อยู่"}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <button
              type="submit"
              className="rounded-xl bg-[#a5522a] px-4 py-2 text-xl font-semibold text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              บันทึก
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
