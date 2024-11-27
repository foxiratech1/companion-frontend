import React from "react";
import "../../style/styles.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/companion.png";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const redirectHomepage = () => {
    navigate("/");
    window.scroll(0, 0);
  };

  const quickLinks = [
    { path: "/trans", label: "Trans", component: "TransPage" },
    { path: "/gay", label: "Gay", component: "GayPage" },
    { path: "/escorts", label: "Escorts", component: "EscortsPage" },
  ];

  const additional = [
    {
      path: "/terms-condition",
      label: "Terms & Conditions",
      component: "Terms & Conditions",
    },
    { path: "/", label: "Privacy", component: "Privacy" },
    { path: "/", label: "DMCA", component: "DMCA" },
    {
      path: "/",
      label: "Advertiser Agreement",
      component: "Advertiser Agreement",
    },
  ];

  const otherInfo = [
    { path: "/aboutUs", label: "About Us", component: "About Us" },
    { path: "/contact-us", label: "Contact Us", component: "Contact Us" },
    { path: "/", label: "Report Traffic", component: "Report Traffic" },
  ];

  return (
    <footer className="relative bg-footer text-white">
      <div className="relative container mx-auto w-[90%] sm:w-[83%] lg:w-[63%] pt-16 sm:pt-32 pb-4 px-6 sm:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-16 lg:gap-32">
          <div>
            <h3 className="text-2xl font-semibold mb-4 font-cormorant text-text_red">
              Quick Links
            </h3>

            <ul>
              {quickLinks.map((item, index) => (
                <li className="mb-3" key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 font-cormorant text-text_red">
              Additional
            </h3>

            <ul>
              {additional.map((item, index) => (
                <li className="mb-3" key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 font-cormorant text-text_red">
              Other Info
            </h3>

            <ul>
              {otherInfo.map((item, index) => (
                <li className="mb-3" key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-16 sm:pt-32 text-center text-sm">
          <img
            src={logo}
            alt="companion"
            className="mx-auto mt-4 mb-4"
            onClick={redirectHomepage}
          />
          <span className="opacity-40 text-white">
            {" "}
            @ 2022 All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
