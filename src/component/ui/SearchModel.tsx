import React from "react";
import "../../style/styles.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import service from "../../jsons/serviceData.json";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsChevronExpand } from "react-icons/bs";
import Button from "./Button";
const SearchModel: React.FC = () => {
  return (
    <>
      <div
        id="extralarge-modal"
        className=" fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full animate-slideDown bg-searchmodel"
      >
        <div className="container mx-auto sm:px-16 py-16 px-10 absolute w-full max-w-7xl max-h-full top-0">
          <div className="relative rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5  rounded-t dark:border-gray-600">
              <h3 className="text-3xl font-medium text-gray-900 text-white dark:text-white text-center mx-auto font-cormorant">
                Type your search and press enter
              </h3>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <div className="grid grid-cols-8 gap-4 border-b  pb-5 ">
                <form className="col-span-3">
                  <label
                    htmlFor="search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <FaLocationDot className="text-red-500" />
                    </div>
                    <input
                      type="search"
                      id="search"
                      className="block custom-shadow shadow-cyan-500/50 w-full p-2 py-3 ps-10 px-24 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="A city or postcode"
                      required
                    />
                    <span className="absolute text-black inset-y-0 end-0 flex items-center pe-3 font-medium dark:text-gray-400">
                      within 30 ml <BsChevronExpand />
                    </span>
                  </div>
                </form>

                <Button
                  variant={{
                    size: "sm",
                    weight: "500",
                    rounded: "large",
                    thickness: "thick",
                  }}
                  className="bg-white !px-2 w-32 text-black custom-shadow col-span-1"
                >
                  Female
                </Button>

                <Button
                  variant={{
                    size: "sm",
                    weight: "500",
                    rounded: "large",
                    thickness: "thick",
                  }}
                  className="bg-white !px-2 w-32 text-black custom-shadow"
                >
                  Male
                </Button>

                <Button
                  variant={{
                    size: "sm",
                    weight: "500",
                    rounded: "large",
                    thickness: "thick",
                  }}
                  className="bg-white !px-2 w-32 text-black custom-shadow"
                >
                  Gay Only
                </Button>

                <Button
                  variant={{
                    size: "sm",
                    weight: "500",
                    rounded: "large",
                    thickness: "thick",
                  }}
                  className="bg-white !px-2 w-32 text-black custom-shadow"
                >
                  Trans Only
                </Button>
                <Button
                  variant={{
                    size: "sm",
                    weight: "500",
                    rounded: "large",
                    theme: "dark",
                  }}
                  className=" px-10 inline-flex justify-center items-center"
                >
                  <FaSearch className="text-xl font-medium  text-white mr-2" />
                  Search
                </Button>
              </div>
              <ul className="space-y-2">
                <div className="grid grid-cols-3 gap-2">
                  {service.servicedata.map((data,index) => (
                    <div key={index}>
                      <li className="relative group text-white py-1 px-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                        <div className="flex flex-row justify-between items-center" >
                          <div>
                            <span className="text-white group-hover:text-blue-600 group-hover:hidden transition-colors duration-300 ease-in-out">
                              {data.name}
                            </span>
                            <span className="hidden group-hover:block text-red-600 inline-flex items-center transition-opacity duration-300 ease-in-out">
                              Service Type
                              <IoIosArrowDown style={{ display: "inline" }} />
                            </span>
                          </div>
                          <span className="text-slate-500 group-hover:text-red-600 transition-colors duration-300 ease-in-out text-sm font-medium">
                            ANY
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-2  flex flex-row ">
                          {data.service.map((item, index) => (
                            <div
                              className="flex hidden group-hover:block "
                              key={index}
                            >
                              <Button
                                key={item.id}
                                variant={{
                                  size: "sm",
                                  weight: "500",
                                  rounded: "full",
                                  thickness: "thick",
                                }}
                                className="bg-white px-12 !py-2 text-black"
                              >
                                {item.serviceone}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </li>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
            <button
              type="button"
              className="text-white-400 text-center w-full bg-transparent  hover:text-white-900 rounded-lg text-md w-8 h-8 ms-auto inline-flex justify-center items-center "
              data-modal-hide="extralarge-modal"
            >
              <IoMdClose className="mr-1" />
              Close
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModel;
