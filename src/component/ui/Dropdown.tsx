import React from "react";
import "../../style/styles.css";

const Dropdown: React.FC = () => {
  return (
    <div className="flex space-x-3 overflow-x-auto scrollbar-hidden selectContainer mt-5 mb-5">
      <div className="relative">
        <select
          className="bg-black text-white text-sm rounded-full px-7 py-2 focus:ring-none focus:outline-none appearance-none sortingoption"
          style={{
            border: "1px solid #FF0000",
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            background: "transparent",
          }}
        >
          <option>Sort by</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>

        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="relative">
        <select
          className="bg-black text-white   text-sm rounded-full px-7 py-2 focus:outline-none appearance-none sortingoption"
          style={{
            border: "1px solid #FF0000",
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            background: "transparent",
          }}
        >
          <option>Ethnicity</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="relative">
        <select
          className="bg-black text-white  text-sm  rounded-full px-7 py-2 focus:outline-none appearance-none sortingoption"
          style={{
            border: "1px solid #FF0000",
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            background: "transparent",
          }}
        >
          <option>Service</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="relative">
        <select
          className="bg-black text-white  text-sm rounded-full px-7 py-2 focus:outline-none appearance-none sortingoption"
          style={{
            border: "1px solid #FF0000",
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            background: "transparent",
          }}
        >
          <option>Hair Color</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="relative">
        <select
          className="bg-black text-white  text-sm rounded-full px-7 py-2 focus:outline-none appearance-none sortingoption"
          style={{
            border: "1px solid #FF0000",
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            background: "transparent",
          }}
        >
          <option>Specialty</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="relative">
        <select
          className="bg-black text-white  text-sm rounded-full px-7 py-2 focus:outline-none appearance-none sortingoption"
          style={{
            border: "1px solid #FF0000",
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            background: "transparent",
          }}
        >
          <option>Catering to</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
