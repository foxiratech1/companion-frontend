import React from "react";
import { Field, Form } from "formik";
import Header from "../../../../ui/Header";

// Define the types for props
interface Step1Props {
  values: {
    name: string;
    pickup: string;
    country: string;
    location: string;
    postcode: string;
    message: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  setStep: (step: number) => void;
  isValid: boolean;
  dirty: boolean;
  errors: { [key: string]: string }; // Errors object where the key is the field name and the value is the error message
}


const Step1: React.FC<Step1Props> = ({ handleSubmit, errors ,values,isValid,dirty}) => {
  console.log(values,isValid,dirty);
  
  return (
    <div className="step-form">
      <Form onSubmit={handleSubmit} className="bg-black p-5 w-full">
        <Header
          variant={{ size: "2xl", theme: "white", weight: "light" }}
          className="uppercase font-garamond mb-5"
        >
          General information
        </Header>

        <div className="input-group">
          <label className="font-medium font-albert text-white">
            Name
            <span className="text-[#E30077]"> *</span>
          </label>
          <Field
            name="name"
            id="name"
            type="text"
            placeholder="Enter the name here"
            className="w-full mt-1 md:p-4 p-2 border-2 border-gray-500 bg-black text-white"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div className="input-group">
          <label className="font-medium font-albert text-white">
            Pickup line
            <span className="text-[#E30077]"> *</span>
          </label>
          <Field
            name="pickup"
            id="pickup"
            type="text"
            placeholder="Enter the pickup line here"
            className="w-full mt-1 md:p-4 p-2 border-2 border-gray-500 bg-black text-white"
          />
          {errors.pickup && <p className="text-red-500">{errors.pickup}</p>}
        </div>

        <div className="relative mb-5">
          <label className="font-medium font-albert text-white">
            Select Country
            <span className="text-[#E30077]"> *</span>
          </label>
          <Field
            as="select"
            name="country"
            id="country"
            className="mt-1 w-full md:p-4 p-2 border-2 border-gray-500 bg-black text-white"
          >
            <option value="" disabled>
              Sort by
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Field>
          {errors.country && <p className="text-red-500">{errors.country}</p>}
        </div>

        <div className="relative mb-5">
          <label className="font-medium font-albert text-white">
            Select location
            <span className="text-[#E30077]"> *</span>
          </label>
          <Field
            as="select"
            name="location"
            id="location"
            className="mt-1 w-full md:p-4 p-2 border-2 border-gray-500 bg-black text-white"
          >
            <option value="" disabled>
              Select Location
            </option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </Field>
          {errors.location && <p className="text-red-500">{errors.location}</p>}
        </div>

        <div className="input-group">
          <label className="font-medium font-albert text-white">
            Postcode
            <span className="text-[#E30077]"> *</span>
          </label>
          <Field
            name="postcode"
            id="postcode"
            type="text"
            placeholder="Enter your postcode"
            className="w-full mt-1 md:p-4 p-2 border-2 border-gray-500 bg-black text-white"
          />
          {errors.postcode && <p className="text-red-500">{errors.postcode}</p>}
        </div>

        <div className="input-group">
          <label className="font-medium font-albert text-white">
            Description
            <span className="text-[#E30077]"> *</span>
          </label>
          <Field
            name="message"
            id="message"
            type="text"
            placeholder="Enter your message"
            className="w-full mt-1 md:p-4 p-2 border-2 border-gray-500 bg-black text-white"
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
      </Form>
    </div>
  );
};

export default Step1;
