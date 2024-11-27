import Button from "../ui/Button";
import Header from "../ui/Header";
import P from "../ui/P";
import { contactInfo } from "../../jsons/contact";
import getimg from "./assets/Image.png";
import map from "./assets/map.png";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ data }: any) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg-bg_contact bg-cover bg-center w-full h-[80vh] relative">
        <div className="container mx-auto sm:px-6 px-3">
          <div
            className="absolute top-48 left-1/2 transform -translate-x-1/2 bg-white opacity-80 md:p-8 p-4 rounded-xl 
                    md:top-32 md:left-[20%] md:transform-none
                    top-1/2  -translate-y-1/2 md:w-auto sm:w-[50%] w-[80%]"
          >
            <Button
              variant={{ fontSize: "base", weight: "600" }}
              className="bg-bg_red rounded-2xl text-white !py-2 mb-4"
            >
              Contact us
            </Button>
            <Header
              variant={{ size: "3xl", weight: "semiBold", theme: "dark" }}
              className="font-cormorant capitalize"
            >
              Feel Free To Reach Us
            </Header>
          </div>
        </div>
      </div>

      <div className="container mx-auto sm:px-6 px-3">
        <div className="flex md:flex-row flex-col items-center  lg:gap-10 gap-5 my-10">
          <img src={getimg} alt="image" className="md:w-1/2 w-full" />
          <div className="md:w-1/2 w-full">
            <Button className="bg-bg_red rounded-full !py-2 !px-5">
              Let's talk
            </Button>
            <Header
              variant={{ size: "3xl", theme: "white", weight: "medium" }}
              className="font-cormorant my-2 capitalize"
            >
              Get in touch with us
            </Header>
            <P
              variant={{ size: "small", theme: "white", weight: "normal" }}
              className="mb-5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </P>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                <img src={item.icon} alt="" />
                <div className="mt-3">
                  <P
                    variant={{
                      size: "small",
                      theme: "white",
                      weight: "normal",
                    }}
                  >
                    {item.text}
                  </P>
                  <P
                    variant={{ size: "md", theme: "white", weight: "semiBold" }}
                  >
                    {item.title}
                  </P>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center mb-10 md:p-0 p-4 rounded-lg lg:gap-16 gap-8 bg-black">
          <img
            src={map}
            alt="map"
            className="object-cover md:w-1/2 w-full rounded-lg"
          />
          <div className="md:w-1/2 w-full lg:pr-5 pr-3">
            <button className="bg-bg_red rounded-full py-2 px-5 text-white font-semiBold text">
              Let's Connect
            </button>
            <Header
              variant={{ size: "3xl", theme: "white", weight: "medium" }}
              className="font-cormorant md:mb-8 mb-3 mt-2 capitalize"
            >
              Write a message
            </Header>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex md:flex-row flex-col gap-3 w-full">
                <div className="flex flex-col md:w-1/2 w-full ">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full md:p-4 p-2 border-2 border-gray-500 rounded-md bg-black text-white"
                  />
                  {errors.name?.message && (
                    <p className="text-red-500">
                      {String(errors.name.message)}
                    </p>
                  )}
                </div>
                <div className="flex flex-col md:w-1/2 w-full">
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="w-full md:p-4 p-2 border-2 border-gray-500 rounded-md bg-black text-white"
                  />
                  {errors.email?.message && (
                    <p className="text-red-500">
                      {String(errors.email.message)}
                    </p>
                  )}
                </div>
              </div>

              <textarea
                placeholder="Write a Message"
                {...register("message", { required: "Message is required" })}
                className="w-full md:p-4 p-2 border-2 border-gray-500 rounded-md bg-black text-white h-32"
              />
              {errors.message?.message && (
                <p className="text-red-500">{String(errors.message.message)}</p>
              )}

              <button
                type="submit"
                className="py-4 px-10 bg-bg_red text-white rounded-md"
              >
                Send a Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
