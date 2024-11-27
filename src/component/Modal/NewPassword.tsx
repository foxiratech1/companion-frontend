import { ErrorMessage, Field, Form, Formik } from "formik";
import Header from "../ui/Header";
import P from "../ui/P";
import Button from "../ui/Button";
import logo from "../../assets/images/companion.png";
import { useState } from "react";
import eye from "../../assets/images/eye.png";
import eyeclose from "../../assets/images/hide.png";
import { SignupValidationSchema } from "../ui/ValidationSchema";

const NewPassword = () => {
  const [newPasswordIcon, setNewPasswordIcon] = useState(eyeclose);
  const [newPasswordType, setNewPasswordType] = useState("password");
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(eyeclose);
  const [cnfrmPasswordType, setCnfrmPasswordType] = useState("password");

  const handleNewPasswordToggle = () => {
    if (newPasswordType === "password") {
      setNewPasswordIcon(eye);
      setNewPasswordType("text");
    } else {
      setNewPasswordIcon(eyeclose);
      setNewPasswordType("password");
    }
  };

  const handleConfirmPasswordToggle = () => {
    if (cnfrmPasswordType === "password") {
      setConfirmPasswordIcon(eye);
      setCnfrmPasswordType("text");
    } else {
      setConfirmPasswordIcon(eyeclose);
      setCnfrmPasswordType("password");
    }
  };
  const validationSchema = SignupValidationSchema;
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    terms: "",
  };

  const onSubmit = ({ values }: any) => {
    console.log("Form data", values);
  };
  return (
    <div className="h-[80vh] flex flex-col justify-center sm:px-6 px-3 ">
      <div className="xl:w-[40%] lg:w-[50%] sm:w-[90%] w-full mx-auto bg-black md:p-10 p-4">
        <img src={logo} alt="Logo" className="mx-auto my-5" />
        <Header
          variant={{ size: "4xl", theme: "white", weight: "semiBold" }}
          className="font-garamond mb-5"
        >
          New Password
        </Header>
        <P variant={{ size: "base", theme: "white", weight: "normal" }}>
          Set the new password for your account so you can login and access all
          featuress.
        </P>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="xl:mt-5 mt-2 w-full">
              <label htmlFor="password" className="block text-white ">
                Enter new password
              </label>
              <div className="flex items-center mb-5">
                <Field
                  type={newPasswordType}
                  id="password"
                  name="password"
                  placeholder="8 symbls at least"
                  className="bg-transparent border border-[#9BADCA] text-white outline-none mt-1 block w-full placeholder-white placeholder:opacity-60 rounded-md shadow-sm p-3 focus:outline-none focus:ring-0"
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

              <label htmlFor="confirmPassword" className="block text-white">
                Confirm password
              </label>
              <div className="flex items-center">
                <Field
                  type={cnfrmPasswordType}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="8 symbls at least"
                  className="bg-transparent border border-[#9BADCA] text-white outline-none mt-1 block w-full  placeholder-white placeholder:opacity-60 rounded-md shadow-sm p-3 focus:outline-none focus:ring-0"
                />
                <img
                  src={confirmPasswordIcon}
                  alt="eye"
                  className="mt-1 -ml-10 cursor-pointer"
                  onClick={handleConfirmPasswordToggle}
                />
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <Button
                variant={{ size: "base", theme: "light", weight: "400" }}
                className="w-full text-white bg-bg_red rounded-md mt-8"
              >
                Update password
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewPassword;
