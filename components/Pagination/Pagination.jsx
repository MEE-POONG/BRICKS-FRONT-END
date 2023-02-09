import React from "react";

export default function Pagination({ page, totalPage, handleSelectPage }) {

  return (
    <div className="flex justify-center space-x-1">
      <button
        title="previous"
        type="button"
        className={`${
          page === 1
            ? "bg-gray-300 border-gray-300"
            : "hover:bg-primary hover:text-white hover:border-primary"
        } inline-flex border items-center justify-center w-10 h-10 py-0 rounded-md shadow-md`}
        disabled={page === 1}
        onClick={() => handleSelectPage(page - 1)}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      {Array(totalPage)
        .fill()
        .map((el, index) => (
          <button
            key={index}
            type="button"
            className={`${
              page === index + 1 ? "bg-primary text-white border-primary" : ""
            } inline-flex border items-center justify-center w-10 h-10 text-lg rounded shadow-md hover:bg-primary hover:text-white hover:border-primary`}
            onClick={() => handleSelectPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      <button
        title="next"
        type="button"
        className={`${
          page === totalPage
            ? "bg-gray-300 border-gray-300"
            : "hover:bg-primary hover:text-white hover:border-primary"
        } inline-flex border items-center justify-center w-10 h-10 py-0 rounded-md shadow-md`}
        disabled={page === totalPage}
        onClick={() => handleSelectPage(page + 1)}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}
