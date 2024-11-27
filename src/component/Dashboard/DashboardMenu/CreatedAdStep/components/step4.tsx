





import React from 'react';
import '../../../../../style/styles.css';
import Header from '../../../../ui/Header';
import { Form, Field, FormikValues } from 'formik';
import arrow from "../assets/ArrowLeft.png";

interface Step4Props {
  values: any;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  setStep: (step: number) => void;
  isValid: boolean;
  dirty: boolean;
  errors: FormikValues;
}

const Step4: React.FC<Step4Props> = ({  setStep, handleSubmit,isValid ,dirty}) => {
  console.log("isValidisValid", isValid, dirty);
  return (
    <>
      <div className="bg-black text-white p-8 rounded-lg shadow-md w-full max-w-3xl mx-auto">
        <Header
          variant={{ size: "2xl", theme: "white", weight: "normal" }}
          className="font-cormorant uppercase mb-6"
        >
          Verification
        </Header>

        <Form onSubmit={handleSubmit} className="bg-black p-5 w-full">
          {/* Phone Number */}
          <div className="mb-4">
            <label className="font-semibold text-lg mb-1 font-albert">
              Phone Number (Without Country Code or 0)
              <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center border border-gray-600">
              <Field
                as="select"
                name="phoneCode"
                className="bg-black text-white w-20 p-2"
              >
                <option value="+44">+44</option>
                <option value="+1">+1</option>
                <option value="+91">+91</option>
                <option value="+61">+61</option>
                {/* Add more country codes as needed */}
              </Field>
              <Field
                type="text"
                name="phoneNumber"
                placeholder="(555) 000-0000"
                className="bg-black text-white w-full p-2"
              />
            </div>
          </div>

          {/* WhatsApp Number */}
          <div className="mb-4">
            <label className="font-semibold mb-1 text-lg font-albert">
              WhatsApp Number (Without country code or 0)
              <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center border border-gray-600">
              <Field
                as="select"
                name="whatsappCode"
                className="bg-black text-white w-20 p-2"
              >
                <option value="+44">+44</option>
                <option value="+1">+1</option>
                <option value="+91">+91</option>
                <option value="+61">+61</option>
              </Field>

              <Field
                type="text"
                name="whatsappNumber"
                placeholder="(555) 000-0000"
                className="bg-black text-white w-full p-2"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold my-6">RATES</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-white border border-gray-700">
              <thead>
                <tr className="bg-bg_red font-albert text-white">
                  <th className="p-2 border-r font-medium text-md">Rates</th>
                  <th className="p-2 border-r font-medium text-md">Incall</th>
                  <th className="p-2 text-md font-medium">Outcall</th>
                </tr>
              </thead>
              <tbody>
                {["1 Hour", "Additional Hour", "Overnight", "Dinner Table"].map(
                  (rate, index) => (
                    <tr key={index} className="border-t text-center border-gray-700 w-96">
                      <td className="p-2 border-r border-[#FDB7DC] font-albert">
                        {rate}
                      </td>
                      <td className="p-2 border-r border-[#FDB7DC]">
                        <span>$</span>
                        <Field
                          type="text"
                          name={`rates[${rate}].incall`}
                          className="p-1 w-24 ml-2 bg-white border border-gray-600 text-black"
                        />
                      </td>
                      <td className="p-2">
                        <span>$</span>
                        <Field
                          type="text"
                          name={`rates[${rate}].outcall`}
                          className="ml-2 p-1 w-24 bg-white border border-gray-600 text-black"
                        />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="border border-white font-semibold text-white py-3 px-8 flex gap-2 items-center"
              onClick={() => setStep(3)}
            >
              <img src={arrow} alt="arrow" />
              Back
            </button>
           
          </div>
        </Form>
      </div>
    </>
  );
};

export default Step4;
