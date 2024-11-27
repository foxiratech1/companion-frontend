// import login_img from "./assets/signup.png";
// import login_img2 from "./assets/login.png";
// import logo from "./assets/companion.png";
// import Header from "../ui/Header";
// import P from "../ui/P";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import Button from "../ui/Button";
// import google from "./assets/google.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import eyeclose from "./assets/hide.png";
// import eye from "./assets/eye.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../style/styles.css";
// import SlickSlider from "../ui/SlickSlider";
// import axios from "axios";
// import { signUpApi } from "../../utils/api";

// const imageData = [
//   {
//     login: login_img,
//     title: "A wise quote",
//     heading: "Get Everything you want.",
//     para: "You can get everything you want if you work hard, trust the process, and stick to the plan.",
//   },
//   {
//     login: login_img2,
//     title: "A wise quote",
//     heading: "Get Everything you want.",
//     para: "You can get everything you want if you work hard, trust the process, and stick to the plan.",
//   },
//   {
//     login: login_img,
//     title: "A wise quote",
//     heading: "Get Everything you want.",
//     para: "You can get everything you want if you work hard, trust the process, and stick to the plan.",
//   },
// ];

// const SignUp = () => {
//   const [passwordVisibility, setPasswordVisibility] = useState({
//     password: { icon: eyeclose, type: "password" },
//     confirmPassword: { icon: eyeclose, type: "password" },
//   });
//   const navigate = useNavigate();

//   const togglePasswordVisibility = (field: string) => {
//     setPasswordVisibility((prev) => ({
//       ...prev,
//       [field]: {
//         icon: prev[field].type === "password" ? eye : eyeclose,
//         type: prev[field].type === "password" ? "text" : "password",
//       },
//     }));
//   };


//   const initialValues = {
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     dob: "",
//     terms: false, // Changed to boolean for checkbox
//   };

//   const onSubmit = async (values: any) => {
//     try {
//       const response = await axios.post(signUpApi, values);
//       console.log("User registered successfully:", response.data);
//       navigate("/signin");
//     } catch (error) {
//       console.error("Registration error:", error);
 
//     }
//   };

//   const customSettings = {
//     dots: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="container mx-auto sm:px-6 px-3">
//       <div className="flex md:flex-row flex-col xl:gap-10 md:gap-5 gap-16 items-center shadow-xl bg-black p-3 w-full m-auto">
//         <div className="relative md:w-[49%] w-full">
//           <SlickSlider settings={customSettings}>
//             {imageData.map((item, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={item.login}
//                   alt="slider image"
//                   className="w-full h-auto rounded-lg shadow-md"
//                 />
//                 <div className="absolute inset-0 flex flex-col justify-between lg:p-10 p-5 bg-black bg-opacity-50">
//                   <P
//                     variant={{ size: "md", theme: "white", weight: "normal" }}
//                     className="uppercase tracking-normal pb-2"
//                   >
//                     {item.title}
//                     <span>
//                       <hr className="w-28 h-1 -mt-3 ml-28" />
//                     </span>
//                   </P>
//                   <div>
//                     <Header
//                       variant={{
//                         size: "4xl",
//                         theme: "white",
//                         weight: "normal",
//                       }}
//                       className="capitalize font-cormorant leading-tight w-60"
//                     >
//                       {item.heading}
//                     </Header>
//                     <P
//                       variant={{ size: "md", theme: "white", weight: "normal" }}
//                     >
//                       {item.para}
//                     </P>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </SlickSlider>
//         </div>

//         <div className="lg:w-[49%] md:w-[50%] w-full">
//           <div className="flex flex-col items-center xl:w-[90%] w-full mx-auto">
//             <img src={logo} alt="logo" />
//             <Header
//               variant={{ size: "4xl", weight: "semiBold" }}
//               className="text-white text-center mt-5 mb-2 font-cormorant"
//             >
//               Create an Account
//             </Header>
//             <P
//               variant={{ size: "base", theme: "light", weight: "normal" }}
//               className="text-white text-center lg:w-[90%] mx-auto"
//             >
//               Fill the details below and open an account.
//             </P>

//             <Formik
//               initialValues={initialValues}
//               // validationSchema={SignupValidationSchema}
//               onSubmit={onSubmit}
//             >
//               {({ isSubmitting }) => (
//                 <Form className="xl:mt-5 mt-2 w-full">
//                   <label htmlFor="fullName" className="block text-white mb-2">
//                     Full Name
//                   </label>
//                   <Field
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     placeholder="Enter your Name"
//                     className="bg-[#212020] text-white outline-none mt-1 block w-full border-none placeholder-white placeholder:opacity-60 rounded-md shadow-sm p-3 focus:outline-none focus:ring-0"
//                   />
//                   <ErrorMessage
//                     name="fullName"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />

//                   <label htmlFor="email" className="block text-white mb-2">
//                     Email
//                   </label>
//                   <Field
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     className="bg-[#212020] text-white outline-none mt-1 block w-full border-none placeholder-white placeholder:opacity-60 rounded-md shadow-sm p-3 focus:outline-none focus:ring-0"
//                   />
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />

//                   <label
//                     htmlFor="dob"
//                     className="block text-white mb-2"
//                   >
//                     Date of Birth
//                   </label>
//                   <Field
//                     type="date"
//                     id="dob"
//                     name="dob"
//                     className="bg-[#212020] text-white outline-none mt-1 block w-full border-none placeholder-white placeholder:opacity-60 rounded-md shadow-sm p-3 focus:outline-none focus:ring-0"
//                   />
//                   <ErrorMessage
//                     name="dob"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />

//                   <label htmlFor="password" className="block text-white mb-2">
//                     Password
//                   </label>
//                   <div className="flex items-center">
//                     <Field
//                       type={passwordVisibility.password.type}
//                       id="password"
//                       name="password"
//                       placeholder="Enter your password"
//                       className="bg-[#212020] text-white outline-none mt-1 block w-full border-none placeholder-white placeholder:opacity-60 rounded-md shadow-sm p-3 focus:outline-none focus:ring-0"
//                     />
//                     <img
//                       src={passwordVisibility.password.icon}
//                       alt="eye"
//                       className="mt-1 -ml-10 cursor-pointer"
//                       onClick={() => togglePasswordVisibility("password")}
//                     />
//                   </div>
//                   <ErrorMessage
//                     name="password"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />

//                   <label
//                     htmlFor="confirmPassword"
//                     className="block text-white mb-2"
//                   >
//                     Confirm Password
//                   </label>
//                   <div className="flex items-center">
//                     <Field
//                       type={passwordVisibility.confirmPassword.type}
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       placeholder="Enter your Confirm password"
//                       className="bg-[#212020] text-white outline-none mt-1 block w-full border-none placeholder-white placeholder:opacity-60 rounded-md shadow-sm p-3 focus:outline-none focus:ring-0"
//                     />
//                     <img
//                       src={passwordVisibility.confirmPassword.icon}
//                       alt="eye"
//                       className="mt-1 -ml-10 cursor-pointer"
//                       onClick={() =>
//                         togglePasswordVisibility("confirmPassword")
//                       }
//                     />
//                   </div>
//                   <ErrorMessage
//                     name="confirmPassword"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />

//                   <div className="flex justify-between">
//                     <div className="flex gap-2 items-center mb-6 mt-2">
//                       <Field type="checkbox" id="terms" name="terms" />
//                       <P
//                         variant={{
//                           size: "base",
//                           theme: "white",
//                           weight: "light",
//                         }}
//                       >
//                         I accept
//                         <span className="text-text_red ml-2 border-b border-red-600">
//                           Terms & Conditions.
//                         </span>
//                       </P>
//                     </div>
//                   </div>

//                   <Button
//                     variant={{ size: "base", theme: "dark", weight: "500" }}
//                     type="submit" // Explicitly set to submit
//                     disabled={isSubmitting}
//                     className="w-full uppercase text-white py-2 px-4 rounded-md mb-5"
//                   >
//                     {isSubmitting ? "Signing up..." : "Sign up"}
//                   </Button>

//                   <Button
//                     variant={{ size: "base", theme: "light", weight: "400" }}
//                     type="button" // Explicitly set to button
//                     className="w-full uppercase text-white py-2 border-white px-4 rounded-md flex items-center gap-2 justify-center"
//                   >
//                     <img src={google} alt="google icon" />
//                     Sign In with Google
//                   </Button>
//                 </Form>
//               )}
//             </Formik>
//             <div className="flex gap-1 mt-4">
//               <P variant={{ size: "base", theme: "white", weight: "normal" }}>
//                 Already have an Account?
//               </P>
//               <Link
//                 to="/signin"
//                 className="text-text_red border-b border-red-600 font-semibold"
//               >
//                 Sign In
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




import login_img from "./assets/signup.png";
import login_img2 from "./assets/login.png";
import logo from "./assets/companion.png";
import Header from "../ui/Header";
import P from "../ui/P";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import Button from "../ui/Button";
import google from "./assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import eyeclose from "./assets/hide.png";
import eye from "./assets/eye.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/styles.css";
import SlickSlider from "../ui/SlickSlider";
import axios from "axios";
import { signUpApi } from "../../utils/api";

// Define types for the form values
interface FormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: string;
  terms: boolean;
}

// Define the type for password visibility state
interface PasswordVisibility {
  password: { icon: string; type: string };
  confirmPassword: { icon: string; type: string };
}

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

const SignUp: React.FC = () => {
  const [passwordVisibility, setPasswordVisibility] = useState<PasswordVisibility>({
    password: { icon: eyeclose, type: "password" },
    confirmPassword: { icon: eyeclose, type: "password" },
  });
  const navigate = useNavigate();

  const togglePasswordVisibility = (field: keyof PasswordVisibility) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: {
        icon: prev[field].type === "password" ? eye : eyeclose,
        type: prev[field].type === "password" ? "text" : "password",
      },
    }));
  };

  const initialValues: FormValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    terms: false, // Changed to boolean for checkbox
  };

  const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    try {
      const response = await axios.post(signUpApi, values);
      console.log("User registered successfully:", response.data);
      navigate("/signin");
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      actions.setSubmitting(false); // Stop the submitting state
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
                      variant={{ size: "4xl", theme: "white", weight: "normal" }}
                      className="capitalize font-cormorant leading-tight w-60"
                    >
                      {item.heading}
                    </Header>
                    <P variant={{ size: "md", theme: "white", weight: "normal" }}>
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
              className="text-white text-center mt-5 mb-2 font-cormorant"
            >
              Create an Account
            </Header>
            <P
              variant={{ size: "base", theme: "light", weight: "normal" }}
              className="text-white text-center lg:w-[90%] mx-auto"
            >
              Fill the details below and open an account.
            </P>

            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="xl:mt-5 mt-2 w-full">
                  <label htmlFor="fullName" className="block text-white mb-2">
                    Full Name
                  </label>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your Name"
                    className="bg-[#212020] text-white outline-none mt-1 block w-full border-none placeholder-white placeholder:opacity-60 rounded-md shadow-sm p-3 focus:outline-none focus:ring-0"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />

                  <label htmlFor="email" className="block text-white mb-2">
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

                  <label htmlFor="dob" className="block text-white mb-2">
                    Date of Birth
                  </label>
                  <Field
                    type="date"
                    id="dob"
                    name="dob"
                    className="bg-[#212020] text-white outline-none mt-1 block w-full border-none placeholder-white placeholder:opacity-60 rounded-md shadow-sm p-3 focus:outline-none focus:ring-0"
                  />
                  <ErrorMessage
                    name="dob"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />

                  <label htmlFor="password" className="block text-white mb-2">
                    Password
                  </label>
                  <div className="flex items-center">
                    <Field
                      type={passwordVisibility.password.type}
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      className="bg-[#212020] text-white outline-none mt-1 block w-full border-none placeholder-white placeholder:opacity-60 rounded-md shadow-sm p-3 focus:outline-none focus:ring-0"
                    />
                    <img
                      src={passwordVisibility.password.icon}
                      alt="eye"
                      className="mt-1 -ml-10 cursor-pointer"
                      onClick={() => togglePasswordVisibility("password")}
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />

                  <label htmlFor="confirmPassword" className="block text-white mb-2">
                    Confirm Password
                  </label>
                  <div className="flex items-center">
                    <Field
                      type={passwordVisibility.confirmPassword.type}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Enter your Confirm password"
                      className="bg-[#212020] text-white outline-none mt-1 block w-full border-none placeholder-white placeholder:opacity-60 rounded-md shadow-sm p-3 focus:outline-none focus:ring-0"
                    />
                    <img
                      src={passwordVisibility.confirmPassword.icon}
                      alt="eye"
                      className="mt-1 -ml-10 cursor-pointer"
                      onClick={() => togglePasswordVisibility("confirmPassword")}
                    />
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />

                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center mb-6 mt-2">
                      <Field type="checkbox" id="terms" name="terms" />
                      <P
                        variant={{
                          size: "base",
                          theme: "white",
                          weight: "light",
                        }}
                      >
                        I accept
                        <span className="text-text_red ml-2 border-b border-red-600">
                          Terms & Conditions.
                        </span>
                      </P>
                    </div>
                  </div>

                  <Button
                    variant={{ size: "base", theme: "dark", weight: "500" }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full uppercase text-white py-2 px-4 rounded-md mb-5"
                  >
                    {isSubmitting ? "Signing up..." : "Sign up"}
                  </Button>

                  <Button
                    variant={{ size: "base", theme: "light", weight: "400" }}
                    type="button"
                    className="w-full uppercase text-white py-2 border-white px-4 rounded-md flex items-center gap-2 justify-center"
                  >
                    <img src={google} alt="google icon" />
                    Sign In with Google
                  </Button>
                </Form>
              )}
            </Formik>

            <div className="flex gap-1 mt-4">
              <P variant={{ size: "base", theme: "white", weight: "normal" }}>
                Already have an Account?
              </P>
              <Link
                to="/signin"
                className="text-text_red border-b border-red-600 font-semibold"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
