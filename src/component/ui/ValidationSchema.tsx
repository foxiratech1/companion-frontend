import * as Yup from "yup";

export const SignupValidationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  terms: Yup.bool().oneOf([true], "Accept Terms & Conditions is required"),
});

export const SigninValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});
