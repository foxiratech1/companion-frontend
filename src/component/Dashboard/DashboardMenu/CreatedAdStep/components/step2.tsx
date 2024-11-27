


import React from "react";
import { Form, Field, ErrorMessage, FormikValues } from "formik";
import Header from "../../../../ui/Header";
import Location from "../../../../ui/Location";
import arrow from "../assets/ArrowLeft.png";

interface Step2Props {
  values: FormikValues;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void;

  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  setStep: (step: number) => void;
  isValid: boolean;
  dirty: boolean;
  errors: FormikValues;
  
}

const Step2: React.FC<Step2Props> = ({
  handleSubmit,
  setStep,
  isValid,
  dirty,
}) => {
  console.log("isValidisValid", isValid, dirty);

  const languages = ["English", "French", "German", "Hindi", "Spanish"];
  const orientations = ["Bisexual", "Straight", "Lesbian"];
  const availability = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const service = ["Male", "Female", "Both"];

  return (
    <div className="step-form">
      <Header
        variant={{ size: "2xl", theme: "white", weight: "normal" }}
        className="uppercase mb-3 font-cormorant"
      >
        Other information
      </Header>
      <Form onSubmit={handleSubmit}>
        {/* Gender */}
        <div className="mb-4 flex gap-4 w-full">
          <div className="w-1/2">
            <label className="font-medium font-albert text-white">
              Gender
              <span className="text-[#E30077]"> *</span>
            </label>
            <Field
              as="select"
              name="gender"
              className="w-full px-2 py-3 mt-1 bg-black text-white"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Field>
            <ErrorMessage name="gender" component="p" className="text-red-500" />
          </div>

          {/* Age */}
          <div className="w-1/2">
            <label className="font-medium font-albert text-white">
              Age
              <span className="text-[#E30077]"> *</span>
            </label>
            <Field
              type="text"
              name="age"
              placeholder="18 to 50+"
              className="w-full px-2 py-3 mt-1 bg-transparent text-white"
            />
            <ErrorMessage name="age" component="p" className="text-red-500" />
          </div>
        </div>

        {/* Language Knows */}
        <div className="mb-8">
          <label className="font-medium font-albert text-white">
            Language Knows
          </label>
          <div className="flex gap-32 mt-1">
            {languages.map((language) => (
              <label key={language} className="text-white flex flex-wrap">
                <Field
                  type="checkbox"
                  name="languages"
                  value={language}
                  className="mr-1 border-2 border-[#ff0000] checked:bg-bg_red checked:border-none w-5 h-5 rounded-md"
                />
                {language}
              </label>
            ))}
          </div>
          <ErrorMessage name="languages" component="p" className="text-red-500" />
        </div>

        {/* Bust & Height */}
        <div className="mb-4 flex gap-4 w-full">
          <div className="w-1/2">
            <label className="font-medium font-albert text-white">
              Bust
              <span className="text-[#E30077]"> *</span>
            </label>
            <Field
              type="text"
              name="bust"
              placeholder="36"
              className="w-full px-2 py-3 mt-1 bg-transparent text-white"
            />
            <ErrorMessage name="bust" component="p" className="text-red-500" />
          </div>

          <div className="w-1/2">
            <label className="font-medium font-albert text-white">
              Height
              <span className="text-[#E30077]"> *</span>
            </label>
            <Field
              type="text"
              name="height"
              placeholder="155cm"
              className="w-full px-2 py-3 mt-1 bg-transparent text-white"
            />
            <ErrorMessage name="height" component="p" className="text-red-500" />
          </div>
        </div>

        {/* Sex Orientation */}
        <div className="mb-8">
          <label className="font-medium font-albert text-white">
            Sex Orientation
          </label>
          <div className="flex gap-32 mt-1">
            {orientations.map((orientation) => (
              <label key={orientation} className="text-white">
                <Field
                  type="checkbox"
                  name="orientation"
                  value={orientation}
                  className="mr-1 border-2 border-[#ff0000] checked:bg-bg_red checked:border-none w-5 h-5 rounded-md"
                />
                {orientation}
              </label>
            ))}
          </div>
          <ErrorMessage name="orientation" component="p" className="text-red-500" />
        </div>

        {/* Availability */}
        <div className="mb-8">
          <label className="font-medium font-albert text-white">
            Available
          </label>
          <div className="flex 2xl:gap-20 xl:gap-16 lg:gap-8 sm:gap-10 gap-5 flex-wrap mt-1">
            {availability.map((day) => (
              <label key={day} className="text-white">
                <Field
                  type="checkbox"
                  name="availability"
                  value={day}
                  className="mr-1 border-2 border-[#ff0000] checked:bg-bg_red checked:border-none w-5 h-5 rounded-md"
                />
                {day}
              </label>
            ))}
          </div>
          <ErrorMessage name="availability" component="p" className="text-red-500" />
        </div>

        {/* My Service For */}
        <div className="mb-8">
          <label className="font-medium font-albert text-white">
            My Service For *
          </label>
          <div className="flex gap-20 mt-1 flex-wrap">
            {service.map((day) => (
              <label key={day} className="text-white">
                <Field
                  type="checkbox"
                  name="service"
                  value={day}
                  className="mr-1 border-2 border-[#ff0000] checked:bg-bg_red checked:border-none w-5 h-5 rounded-md"
                />
                {day}
              </label>
            ))}
          </div>
          <ErrorMessage name="service" component="p" className="text-red-500" />
        </div>

        <Location heading="Services" />

        {/* Back Button */}
        <div className="button-group w-1/2">
          <button
            type="button"
            className="border border-white font-semibold text-white py-3 px-8 flex gap-2 items-center"
            onClick={() => setStep(1)}
          >
            <img src={arrow} alt="arrow" />
            Back
          </button>
        </div>

      
        
      </Form>
    </div>
  );
};

export default Step2;
