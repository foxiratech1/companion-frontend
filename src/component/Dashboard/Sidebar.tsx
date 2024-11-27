import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import toggle from "./assets/toggle-button.png";
import logo from "./assets/logo.png";
import P from "../ui/P";
import Button from "../ui/Button";
import logout from "./assets/logout.png";
import { sidebar } from "../../jsons/sidebar";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmenuToggle = (key: string) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  return (
    <div className="relative">
      {isOpen && (
        <div
          className="fixed md:hidden inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`${
          isOpen ? "left-0 2xl:w-80 w-60" : "md:-left-20 -left-5 md:w-20  w-5 "
        } fixed md:static md:left-0 top-0 transition-all duration-300 bg-black text-white h-full md:h-[80vh] z-50 flex flex-col`}
      >
        <button
          onClick={toggleSidebar}
          className={`absolute top-4 lg:right-[-15px] right-[-30px] rounded-full transform transition-transform ${
            isOpen ? "" : "rotate-180"
          }`}
        >
          <img src={toggle} alt="Toggle Arrow" />
        </button>

        <ul className="px-3 mt-4">
          <img src={logo} alt="Logo" className="" />
          <P
            variant={{ size: "base", theme: "white", weight: "normal" }}
            className="px-5 pt-16 font-albert hidden"
          >
            Overview
          </P>
          {sidebar.map((section) => (
            <li key={section.key}>
              <Link to={`/dashboard/${section.path}`}>
                <button
                  onClick={() => handleSubmenuToggle(section.key)}
                  className={`w-full active:bg-gray-900 text-left flex items-center space-x-4 p-4 ${
                    location.pathname.includes(section.path)
                      ? "lg:bg-black "
                      : ""
                  }`}
                >
                  <img
                    src={section.icon}
                    alt={section.label}
                    className="lg:w-6 w-5"
                  />
                  {isOpen && <span className="flex-grow">{section.label}</span>}
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto mb-10 mx-auto hidden">
          <Button
            variant={{ fontSize: "base", fontWeight: "500", theme: "dark" }}
            className="flex items-center font-medium tracking-wider gap-3 uppercase"
          >
            <img src={logout} alt="Logout" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
