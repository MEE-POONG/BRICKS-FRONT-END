import { useField } from "formik";
import React from "react";

export default function CustomInput({ ...props }) {
  const [field, meta, helpers] = useField(props);
  console.log("field", field);
  console.log("meta", meta);
  return (
    <>
      <input
        placeholder={props.placeholder}
        {...field}
        {...meta}
        className={`${
          meta.touched && meta.error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-secondary"
        } flex items-center pl-16 w-full px-4 py-2.5 h-full transition duration-500 rounded-lg bg-gray-50 border focus:bg-gray-100 focus:outline-none focus:shadow-outline ring-offset-current ring-offset-2 ring-secondary`}
      />
      {meta.touched && meta.error && (
        <p className="absolute text-red-500 text-sm">{meta.error}</p>
      )}
    </>
  );
}
