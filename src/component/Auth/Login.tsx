import login_img from "./assets/login.png";
import logo from "./assets/companion.png";
import Header from "../ui/Header";
import P from "../ui/P";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../ui/Button";
import google from "./assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import eyeclose from "./assets/hide.png";
import eye from "./assets/eye.png";
import login_img2 from "./assets/signup.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/styles.css";
import SlickSlider from "../ui/SlickSlider";
import axios from "axios";
import { signInApi } from "../../utils/api";
const imageData = [
  {
    login: login_img,
    title: "A wise quote",
    heading: "Get Everything you want.",
    para: "You can get everything you want if you work hard, trust the process, and stick to the plan.",
  },
  {
    login: login_img2,
    title: "A wise quote",
    heading: "Get Everything you want.",
    para: "You can get everything you want if you work hard, trust the process, and stick to the plan.",
  },
  {
    login: login_img,
    title: "A wise quote",
    heading: "Get Everything you want.",
    para: "You can get everything you want if you work hard, trust the process, and stick to the plan.",
  },
];

const Login = () => {
  const [newPasswordIcon, setNewPasswordIcon] = useState(eyeclose);
  const [newPasswordType, setNewPasswordType] = useState("password");
  // const validationSchema = SigninValidationSchema;
  const navigate = useNavigate();

  const redirectToForget = () => {
    navigate("/forget_pass");
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values: unknown) => {
    try {
      const response = await axios.post(signInApi, values);
      console.log("User registered successfully1111:", response.data.token);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/");
    } catch (error:unknown) {
      console.error("Registration error:", error);

    }
    // localStorage.setItem("userData", JSON.stringify(values));
    // navigate("/");
    // console.log("Form data", values);
  };

  const handleNewPasswordToggle = () => {
    if (newPasswordType === "password") {
      setNewPasswordIcon(eye);
      setNewPasswordType("text");
    } else {
      setNewPasswordIcon(eyeclose);
      setNewPasswordType("password");
    }
  };

  const customSettings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto sm:px-6 px-3">
      <div className="flex md:flex-row flex-col xl:gap-10 md:gap-5 gap-16 items-center shadow-xl bg-black p-3 w-full m-auto">
        <div className="relative md:w-[49%] w-full">
          <SlickSlider settings={customSettings}>
            {imageData.map((item, index) => (
              <div key={index} className="relative">
                <img
                  key={index}
                  src={item.login}
                  alt="slider image"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="absolute inset-0 flex flex-col justify-between lg:p-10 p-5 bg-black bg-opacity-50">
                  <P
                    variant={{ size: "md", theme: "white", weight: "normal" }}
                    className="uppercase tracking-normal pb-2"
                  >
                    {item.title}
                    <span>
                      <hr className="w-28 h-1 -mt-3 ml-28" />
                    </span>
                  </P>

                  <div>
                    <Header
                      variant={{
                        size: "4xl",
                        theme: "white",
                        weight: "normal",
                      }}
                      className="capitalize font-cormorant leading-tight w-60 "
                    >
                      {item.heading}
                    </Header>
                    <P
                      variant={{
                        size: "md",
                        theme: "white",
                        weight: "normal",
                      }}
                    >
                      {item.para}
                    </P>
                  </div>
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>

        <div className="lg:w-[49%] md:w-[50%] w-full">
          <div className="flex flex-col items-center xl:w-[90%] w-full mx-auto">
            <img src={logo} alt="logo" />
            <Header
              variant={{ size: "4xl", weight: "semiBold" }}
              className="text-white text-center lg:mt-8 mt-3 mb-3 font-cormorant"
            >
              Welcome Back
            </Header>
            <P
              variant={{ size: "base", theme: "light", weight: "normal" }}
              className="text-white text-center lg:w-[90%] mx-auto"
            >
              Enter your email and password to access your account
            </P>

            <Formik
              initialValues={initialValues}
              // validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="xl:mt-5 mt-2 w-full">
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-white">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="bg-[#212020] text-white outline-none mt-1 block w-full border-none placeholder-white placeholder:opacity-60 rounded-md shadow-sm p-3 focus:outline-none focus:ring-0"
                    />

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="block text-white">
                      Password
                    </label>

                    <div className="flex items-center">
                      <Field
                        type={newPasswordType}
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className="mt-1 bg-[#212020] text-white outline-none block w-full border-none placeholder-white placeholder:opacity-60 rounded-md shadow-sm p-3 focus:outline-none focus:ring-0"
                      />
                      <img
                        src={newPasswordIcon}
                        alt="eye"
                        className=" mt-1 -ml-10 cursor-pointer"
                        onClick={handleNewPasswordToggle}
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="flex justify-between mb-6">
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="border-[#FF7BBC] bg-transparent rounded-sm focus:outline-none focus:ring-0 outline-none"
                      />
                      <P
                        variant={{
                          size: "base",
                          theme: "white",
                          weight: "light",
                        }}
                        className=""
                      >
                        Remember me
                      </P>
                    </div>
                    <div>
                      <P
                        variant={{
                          size: "base",
                          theme: "red",
                          weight: "light",
                        }}
                        className="cursor-pointer"
                        onClick={redirectToForget}
                      >
                        Forgot Password?
                      </P>
                    </div>
                  </div>

                  <Button
                    variant={{
                      size: "base",
                      theme: "dark",
                      weight: "500",
                    }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full uppercase text-white py-2 px-4 rounded-md mb-5"
                  >
                    {isSubmitting ? "Logging in..." : "Sign in"}
                  </Button>

                  <Button
                    variant={{ size: "base", theme: "light", weight: "400" }}
                    className="w-full uppercase text-white border-white py-2 px-4 rounded-md flex items-center gap-2 justify-center"
                  >
                    <img src={google} alt="google icon" />
                    Sign In with Google
                  </Button>
                </Form>
              )}
            </Formik>
            <div className="flex gap-1 mt-4">
              <P variant={{ size: "base", theme: "white", weight: "normal" }}>
                Don’t have an account ?
              </P>
              <Link
                to="/signup"
                className="text-text_red border-b border-red-600 font-semibold"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
