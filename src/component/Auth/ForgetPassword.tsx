import { ErrorMessage, Field, Form, Formik } from "formik";
import Header from "../ui/Header";
import P from "../ui/P";
import logo from "./assets/companion1.png";
import Button from "../ui/Button";
import { useEffect } from "react";
import axios from "axios";
import { ForgetPasswordApi } from "../../utils/api";

const ForgetPassword = () => {
  // const validationSchema = Yup.object({
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
  // });
  
  const onSubmit = async (values: unknown) => {
    try {
      const response = await axios.post(ForgetPasswordApi, values);
      console.log("User registered successfully:", response.data);
      localStorage.setItem("userData", JSON.stringify(values));
   
    } catch (error) {
      console.error("Registration error:", error);
     
    }
  
  };
  useEffect(() => {
    localStorage.removeItem("userData");
  }, []);
  return (
    <div className="bg-black bg-bg_forget_pass h-[100vh] bg-no-repeat w-full bg-cover">
      <div className="container mx-auto sm:px-6 px-3">
        <div className="bg-[#212020] shadow-xl 2xl:w-[30%] xl:w-[40%] lg:w-[50%] md:w-[70%] w-[90%]  xl:p-12 md:p-10 p-5 flex flex-col items-center m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={logo} alt="logo" className="" />
          <div className="">
            <Header
              variant={{ size: "4xl", theme: "white", weight: "normal" }}
              className="font-cormorant mt-5"
            >
              Forgot password
            </Header>

            <P
              variant={{ size: "base", theme: "white", weight: "normal" }}
              className="my-6"
            >
              Enter your email for the verification proccess,we will send 4
              digits code to your email.
            </P>

            <Formik
              initialValues={{ email: "" }}
              // validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <Form>
                  <div className="flex flex-col">
                    <label className="text-white">E mail</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="hannah.green@test.com"
                      className="p-3 bg-[#212020] border border-white rounded-md outline-none mt-1 placeholder:text-white text-white"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-text_red text-sm mt-1"
                    />
                  </div>

                  <Button
                    variant={{
                      size: "base",
                      theme: "dark",
                      weight: "500",
                      rounded: "md",
                    }}
                    type="submit"
                    className="mt-3 w-full"
                  >
                    Continue
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
