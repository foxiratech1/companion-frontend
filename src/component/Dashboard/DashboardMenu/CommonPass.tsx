import { useState } from "react";
import eye from "../../../assets/images/eye.png";
import eyeclose from "../../../assets/images/hide.png";

const CommonPass = ({
  placeholder,
  register,
  name,
  errors,
  validation,
}: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col w-full mb-5">
      <div className="flex items-center w-full">
        <input
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          {...register(name, validation)}
          className="p-3 w-full border placeholder:text-white bg-black text-white rounded-md focus:outline-none"
        />
        <img
          src={isVisible ? eye : eyeclose}
          alt="eye"
          className="mt-1 -ml-10 cursor-pointer"
          onClick={toggleVisibility}
        />
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {String(errors[name].message)}
        </p>
      )}
    </div>
  );
};

export default CommonPass;
