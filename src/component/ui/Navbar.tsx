import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/images/companion.png";
import SearchModel from "./SearchModel";
import Button from "./Button";
import { useState } from "react";

import "../../style/styles.css";
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const authPages = ["/signin", "/signup", "/forget_pass"];

  const isAuthPage = authPages.includes(location.pathname);
  const redirectHomepage = () => {
    navigate("/");
    window.scroll(0, 0);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("userData");
  };
  return (
    <>
      <nav
        className="bg-black text-white  w-full z-20 top-0 start-0 border-b border-gray-200 "
        style={{ borderBottom: "1px solid red" ,display:isAuthPage?"none":"block"}}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              alt="companion"
              className="mb-2 md:mb-0"
              onClick={redirectHomepage}
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <div className="displaysearch">
              <div className="flex flex-col md:flex-row justify-center items-center ">
                <button
                  className="flex items-center mb-2 md:mb-0 block text-sm px-0 py-2.5 text-center  "
                  data-modal-target="extralarge-modal"
                  data-modal-toggle="extralarge-modal"
                  type="button"
                >
                  <p className="text-sm font-light">Search</p>
                  <CiSearch className="text-md font-light ml-2 mr-4 text-slate-50" />
                  <span className="border border-gray-600 h-[30px] inline-block mr-4"></span>
                </button>
                <SearchModel />
                <div>
                  <Button
                    id="dropdownClickButton"
                    onClick={toggleDropdown}
                    type="button"
                    style={{ background: "#FF0000" }}
                    variant={{
                      size: "sm",
                      theme: "dark",
                      weight: "500",
                      rounded: "md",
                    }}
                    className="!px-10"
                  >
                    Post Ad
                  </Button>

                  {isDropdownOpen && (
                    <div
                      id="dropdownClick"
                      className="absolute right-50 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-b-lg rounded-l-lg shadow w-44 dark:bg-gray-700 mr-4"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200 text-end "
                        aria-labelledby="dropdownDefaultButton"
                      >
                        <li onClick={handleLogout}>
                          <Link
                            to="signin"
                            className="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="signup"
                            className="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Signup
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Become an Escorts
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg 
           md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 sm:bg-white md:bg-transparent lg:bg-transparent dark:bg-gray-800 
           md:dark:bg-gray-900 dark:border-gray-700 bg-navbarlist text-center"
            >
              <li className="text-sm font-light text-slate-50 sm:text-black md:text-slate-50  lg:text-slate-50">
                <Link to="escorts">Escorts</Link>
              </li>
              <li className="text-sm font-light text-slate-50 sm:text-black md:text-slate-50 lg:text-slate-50">
                <Link to="/trans">Trans</Link>
              </li>
              <li className="text-sm font-light text-slate-50 sm:text-black md:text-slate-50 lg:text-slate-50">
                <Link to="/gay">Gay</Link>
              </li>
              <div className="displaybtn">
                <div className="flex flex-row md:flex-row justify-center items-center ">
                  <button
                    className="flex items-center mb-2 md:mb-0 block text-sm px-0 py-2.5 text-center "
                    data-modal-target="extralarge-modal"
                    data-modal-toggle="extralarge-modal"
                    type="button"
                  >
                    <p className="text-sm text-black font-medium">Search</p>
                    <CiSearch className="text-md text-black font-medium ml-2 mr-4 " />
                    <span className="border border-gray-600 h-[30px] inline-block mr-4"></span>
                  </button>
                  <SearchModel />

                  <Button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    type="button"
                    style={{ background: "#FF0000", zIndex: 20 }}
                    variant={{
                      size: "sm",
                      theme: "dark",
                      weight: "500",
                      rounded: "md",
                    }}
                    className="!px-10"
                  >
                    Post Ad
                  </Button>

                  <div
                    id="dropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-md shadow w-44 dark:bg-gray-700 mr-4"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200 text-end mr-4"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <Link
                          to="signin"
                          className="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="signup"
                          className="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Signup
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="block px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Become an Escorts
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
