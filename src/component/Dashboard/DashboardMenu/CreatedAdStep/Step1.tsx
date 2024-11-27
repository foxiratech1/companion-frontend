
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import CommonImageUpload from "./CommonImageUpload";

import Stepper from "./components/stepper";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import Step4 from "./components/step4";
import Step5 from "./components/step5";

// const validationSchemas = {
//   step1: Yup.object({
//     name: Yup.string().required("First Name is required"),
//     pickup: Yup.string().required("pickup is required"),
//     // country: Yup.string().required('country is required'),
//   }),
//   step2: Yup.object({
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     phone: Yup.string().required("Phone number is required"),
//   }),
//   step3: Yup.object({
//     street: Yup.string().required("Street is required"),
//     city: Yup.string().required("City is required"),
//   }),
// };
type StepKey = "step1" | "step2" | "step3" | "step4" | "step5"; // Update as needed

const validationSchemas: Record<StepKey, Yup.ObjectSchema<any>> = {
  step1: Yup.object({
    name: Yup.string().required("First Name is required"),
    pickup: Yup.string().required("Pickup is required"),
  }),
  step2: Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  }),
  step3: Yup.object({
    // Define step3 validation schema here if needed
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
  }),
  step4: Yup.object({
    // Define step4 validation schema here if needed
  }),
  step5: Yup.object({
    // Define step5 validation schema here if needed
  }),
};

const CreateAds: React.FC = () => {
  const [step, setStep] = useState(1);

  const initialValues = {
    name: "",
    pickup:  "",
    country: "",
    location: "",
    postcode: "",
    message: "",
  };

  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="flex justify-between">
      <CommonImageUpload />
      <div className="w-[100%]" style={{ padding: "0px 24px" }}>
        <Stepper currentStep={step} />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemas[`step${step}` as StepKey]}
          onSubmit={(values) => {
            if (step === 4) {
              handleSubmit(values);
            } else {
              setStep(step + 1);
            }
          }}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            isValid,
            dirty,
            validateForm,
            errors,
          }) => (
            <>
              {step === 1 && (
                <Step1
                  values={values}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  setStep={setStep}
                  isValid={isValid}
                  dirty={dirty}
                  errors={errors}
                />
              )}
              {step === 2 && (
                <Step2
                  values={values}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  setStep={setStep}
                  isValid={isValid}
                  dirty={dirty}
                  errors={errors}
                />
              )}
              {step === 3 && (
                <Step3
                  values={values}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  setStep={setStep}
                />
              )}
              {step === 4 && (
                <Step4
                  values={values}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  setStep={setStep}
                  isValid={isValid}
                  dirty={dirty}
                  errors={errors}
                />
              )}
              {step === 5 && (
                <Step5
                  values={values}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  setStep={setStep}
                />
              )}

              <div>
                {step < 5 && (
                  <button
                    type="button"
                    onClick={async () => {
                      const errors = await validateForm(values);
                      if (Object.keys(errors).length === 0) {
                        setStep(step + 1);
                      } else {
                        console.log("Validation errors:", errors);
                      }
                    }}
                    className="py-3 px-10 uppercase bg-bg_red text-white"
                  >
                    Next
                  </button>
                )}
              </div>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateAds;

