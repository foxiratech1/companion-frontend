import Button from "../ui/Button";
import Header from "../ui/Header";
import P from "../ui/P";
import success from "../../assets/images/upload.png";

const Success = () => {
  return (
    <div>
      <div className="h-[80vh] flex flex-col justify-center sm:px-6 px-3">
        <div className="xl:w-[30%] lg:w-[50%] sm:w-[80%] w-full  mx-auto bg-black p-10 flex flex-col items-center">
          <img src={success} alt="success" className="mx-auto" />
          <Header
            variant={{ size: "4xl", theme: "white", weight: "semiBold" }}
            className="font-garamond mb-5"
          >
            Successfully
          </Header>
          <P variant={{ size: "base", theme: "white", weight: "normal" }}>
            Your password has been reset successfully
          </P>
          <Button
            variant={{ size: "base", theme: "light", weight: "400" }}
            className="w-full text-white bg-bg_red rounded-md mt-8"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
