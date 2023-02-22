import React from "react";

export default function AddressFormEdit({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
}) {
  return (
    <>
      <form onSubmit={handleSubmit} id="formSubmit">
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
                  <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
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
                <input
                  className="hidden"
                  type="text"
                  id="addressId"
                  value={values.id}
                  disabled
                />
                <input
                  id="firstname"
                  type="text"
                  placeholder="ชื่อจริง"
                  className={`${
                    errors.firstname && touched.firstname
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-secondary"
                  } flex items-center pl-16 w-full px-4 py-2.5 h-full transition duration-500 rounded-lg bg-gray-50 border focus:bg-gray-100 focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 ring-secondary`}
                  value={values.firstname}
                  onChange={(event) => {
                    event.preventDefault();
                    handleChange(event);
                  }}
                  onBlur={handleBlur}
                />
                {errors.firstname && touched.firstname && (
                  <p className="absolute text-red-500 text-sm">
                    {errors.firstname}
                  </p>
                )}
              </div>
              <div className="relative flex-grow px-2 my-6">
                <div className="absolute text-gray-600 flex items-center px-2 border-r h-full">
                  {/* <Person /> */}
                </div>
                <input
                  id="lastname"
                  type="text"
                  placeholder="นามสกุล"
                  className={`${
                    errors.lastname && touched.lastname
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-secondary"
                  } flex items-center pl-16 w-full px-4 py-2.5 h-full transition duration-500 rounded-lg bg-gray-50 border focus:bg-gray-100 focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 ring-secondary`}
                  value={values.lastname}
                  onChange={(event) => {
                    event.preventDefault();
                    handleChange(event);
                  }}
                  onBlur={handleBlur}
                />
                {errors.lastname && touched.lastname && (
                  <p className="absolute text-red-500 text-sm">
                    {errors.lastname}
                  </p>
                )}
              </div>
            </div>
            <div className="lg:flex">
              <div className="relative flex-grow px-2 my-4">
                <div className="absolute text-gray-600 flex items-center px-2 border-r h-full">
                  {/* <Smartphone /> */}
                </div>
                <input
                  id="tel"
                  type="tel"
                  placeholder="เบอร์โทร"
                  className={`${
                    errors.tel && touched.tel
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-secondary"
                  } flex items-center pl-16 w-full px-4 py-2.5 h-full transition duration-500 rounded-lg bg-gray-50 border focus:bg-gray-100 focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 ring-secondary`}
                  value={values.tel}
                  onChange={(event) => {
                    event.preventDefault();
                    handleChange(event);
                  }}
                  onBlur={handleBlur}
                />
                {errors.tel && touched.tel && (
                  <p className="absolute text-red-500 text-sm">{errors.tel}</p>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="flex-grow px-2 my-4">
                <input
                  id="province"
                  type="text"
                  placeholder="จังหวัด"
                  className={`${
                    errors.province && touched.province
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-secondary"
                  } flex items-center w-full px-4 py-2.5 h-full transition duration-500 rounded-lg bg-gray-50 border focus:bg-gray-100 focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 ring-secondary`}
                  value={values.province}
                  onChange={(event) => {
                    event.preventDefault();
                    handleChange(event);
                  }}
                  onBlur={handleBlur}
                />
                {errors.province && touched.province && (
                  <p className="absolute text-red-500 text-sm">
                    {errors.province}
                  </p>
                )}
              </div>
              <div className="flex-grow px-2 my-4">
                <input
                  id="district"
                  type="text"
                  placeholder="อำเภอ"
                  className={`${
                    errors.district && touched.district
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-secondary"
                  } flex items-center w-full px-4 py-2.5 h-full transition duration-500 rounded-lg bg-gray-50 border focus:bg-gray-100 focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 ring-secondary`}
                  value={values.district}
                  onChange={(event) => {
                    event.preventDefault();
                    handleChange(event);
                  }}
                  onBlur={handleBlur}
                />
                {errors.district && touched.district && (
                  <p className="absolute text-red-500 text-sm">
                    {errors.district}
                  </p>
                )}
              </div>
              <div className="flex-grow px-2 my-4">
                <input
                  id="subDistrict"
                  type="text"
                  placeholder="ตำบล"
                  className={`${
                    errors.subDistrict && touched.subDistrict
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-secondary"
                  } flex items-center w-full px-4 py-2.5 h-full transition duration-500 rounded-lg bg-gray-50 border focus:bg-gray-100 focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 ring-secondary`}
                  value={values.subDistrict}
                  onChange={(event) => {
                    event.preventDefault();
                    handleChange(event);
                  }}
                  onBlur={handleBlur}
                />
                {errors.subDistrict && touched.subDistrict && (
                  <p className="absolute text-red-500 text-sm">
                    {errors.subDistrict}
                  </p>
                )}
              </div>
            </div>
            <div className="relative flex-grow px-2 my-4">
              <div className="absolute text-gray-600 flex items-center px-2 border-r h-full">
                {/* <MarkunreadMailbox /> */}
              </div>
              <input
                id="postalCode"
                type="text"
                placeholder="รหัสไปรษณีย์"
                className={`${
                  errors.postalCode && touched.postalCode
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-secondary"
                } flex items-center pl-16 w-full px-4 py-2.5 h-full transition duration-500 rounded-lg bg-gray-50 border focus:bg-gray-100 focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 ring-secondary`}
                value={values.postalCode}
                onChange={(event) => {
                  event.preventDefault();
                  handleChange(event);
                }}
                onBlur={handleBlur}
              />
              {errors.postalCode && touched.postalCode && (
                <p className="absolute text-red-500 text-sm">
                  {errors.postalCode}
                </p>
              )}
            </div>
            <div className="relative flex-grow px-2 mt-8">
              <div className="absolute text-gray-600 flex items-center px-2 border-r h-full">
                {/* <Home /> */}
              </div>
              <input
                id="address"
                type="text"
                placeholder="ที่อยู่"
                className={`${
                  errors.address && touched.address
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-secondary"
                } flex items-center pl-16 w-full px-4 py-2.5 h-full transition duration-500 rounded-lg bg-gray-50 border focus:bg-gray-100 focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 ring-secondary`}
                value={values.address}
                onChange={(event) => {
                  event.preventDefault();
                  handleChange(event);
                }}
                onBlur={handleBlur}
              />
              {errors.address && touched.address && (
                <p className="absolute text-red-500 text-sm">
                  {errors.address}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button
            type="submit"
            className="rounded-xl bg-primary px-4 py-2 text-xl font-semibold text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            แก้ไข
          </button>
        </div>
      </form>
    </>
  );
}
