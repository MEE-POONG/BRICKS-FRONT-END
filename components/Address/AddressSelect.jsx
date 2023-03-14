import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AddressForm from "./AddressForm";
import useAxios from "axios-hooks";
import { useSession } from "next-auth/react";
import { toast, Toaster } from "react-hot-toast";
import AddressFormEdit from "./AddressFormEdit";
import { addAddress } from "../../store/cart/cartSlice";

export default function AddressSelect({
  addressSelected,
  setAddressSelected,
  dispatch,
}) {
  const { data: session } = useSession();
  let [isOpen, setIsOpen] = useState(false);
  let [addressEdit, setAddressEdit] = useState({ values: null, isOpen: false });

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
    useAxios(
      {
        url: "/api/address",
        method: "POST",
      },
      { manual: true }
    );

  //ADDRESS UPDATE DATA
  const [
    { loading: addressPutLoading, error: addressPutExcError },
    putAddress,
  ] = useAxios(
    {
      url: "/api/address",
      method: "PUT",
    },
    { manual: true }
  );

  //ADDRESS DELETE DATA
  const [
    { loading: addressDeleteLoading, error: addressDeleteError },
    deleteAddress,
  ] = useAxios(
    {
      url: "/api/address",
      method: "DELETE",
    },
    { manual: true }
  );

  //ADDRESS DELETE
  const handleAddressDelete = (addressId) => {
    try {
      deleteAddress({ params: { addressId: addressId } }).then(() =>
        getAddress().then(() => toast.success("ลบที่อยู่เรียบร้อย"))
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toaster
        reverseOrder={true}
        position={"bottom-center"}
        gutter={8}
        toastOptions={{
          success: {
            style: {
              background: "#0a8f2d",
              color: "white",
              fontSize: "2rem",
              borderRadius: "2rem",
            },
          },
          error: {
            style: {
              background: "#e02424",
              color: "white",
              fontSize: "2rem",
              borderRadius: "2rem",
            },
          },
        }}
      />
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
          className="rounded-xl bg-[#a5522a] px-4 py-2 text-xl font-semibold text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
                  ? "border-[#b96800] bg-red-50"
                  : "border-gray-400"
              } p-6 my-4 rounded-lg border-2 hover:border-[#b96800] grid grid-cols-2`}
              onClick={() => {
                setAddressSelected(address);
                dispatch(addAddress(address.id));
              }}
            >
              <div className="">
                <div className="text-4xl">
                  <span className="mr-2 font-semibold">
                    {address.firstname}
                  </span>
                  <span className="mr-2 font-semibold">{address.lastname}</span>
                  <span className="mr-2">| {address.tel}</span>
                </div>
                <div className="text-4xl">
                  <span className="mr-2">{address.address}</span>
                </div>
                <div className="text-4xl">
                  <span className="mr-2">{address.province},</span>
                  <span className="mr-2">{address.district},</span>
                  <span className="mr-2">{address.subDistrict},</span>
                  <span className="mr-2">{address.postalCode}</span>
                </div>
                <div className="border-2 mt-2 w-fit py-1 px-4 text-2xl">
                  <span>ที่อยู่ในการนัดรับสินค้า</span>
                </div>
              </div>
              <div className="flex justify-end gap-4 text-2xl font-semibold cursor-pointer text-blue-500">
                <div
                  onClick={() =>
                    setAddressEdit({ values: address, isOpen: true })
                  }
                >
                  แก้ไข
                </div>
                <div onClick={() => handleAddressDelete(address.id)}>ลบ</div>
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

      {/* MODAL INSERT */}
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
                    excAddress={excAddress}
                    setIsOpen={setIsOpen}
                    getAddress={getAddress}
                    session={session}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* MODAL EDIT */}
      <Transition appear show={addressEdit.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() =>
            setAddressEdit({ values: addressEdit.values, isOpen: false })
          }
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
                  <AddressFormEdit
                    putAddress={putAddress}
                    addressEdit={addressEdit}
                    setAddressEdit={setAddressEdit}
                    getAddress={getAddress}
                    session={session}
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
