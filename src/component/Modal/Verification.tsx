import { useState } from "react";
import OtpInput from "react-otp-input";
import Header from "../ui/Header";
import P from "../ui/P";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const Verification = () => {
  const [otp, setOtp] = useState("");

  return (
    <div className="h-[80vh] flex flex-col justify-center sm:px-6 px-3">
      <div className="xl:w-[30%] lg:w-[50%] sm:w-[80%] w-full mx-auto bg-black p-10 flex flex-col items-center">
        <Header
          variant={{ size: "5xl", theme: "white", weight: "semiBold" }}
          className="font-garamond"
        >
          Verification
        </Header>
        <P
          variant={{ size: "base", theme: "white", weight: "normal" }}
          className="my-7"
        >
          Enter your 4 digits code that you received on your email.
        </P>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                color: "white",
                backgroundColor: "black",
                width: 50,
                margin: 6,
                borderRadius: 3,
              }}
            />
          )}
          inputStyle="text-white bg-black"
        />
        <Button
          variant={{ size: "base", theme: "light", weight: "400" }}
          className="w-full text-white bg-bg_red rounded-md mt-8 mb-3"
        >
          Continue
        </Button>
        <P variant={{ size: "base", theme: "white", weight: "normal" }}>
          If you didn’t receive a code!{" "}
          <Link to="/" className="text-[#F2451C] cursor-pointer">
            Resend
          </Link>
        </P>
      </div>
    </div>
  );
};

export default Verification;
