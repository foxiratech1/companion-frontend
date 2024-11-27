import { useForm } from "react-hook-form";
import Header from "../../ui/Header";
import Button from "../../ui/Button";
import call from "../assets/call.png";
import mail from "../assets/mail.png";
import location from "../assets/location.png";
import P from "../../ui/P";

const Contact = () => {
  const contactInfo = [
    {
      icon: call,
      text: "+1012 3456 789",
    },
    {
      icon: mail,
      text: "demo@gmail.com",
    },
    {
      icon: location,
      text: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
    },
  ];

  const openhours = [
    {
      day: "Monday - Thursday",
      time: "8AM - 4PM EST",
    },
    {
      day: "Friday",
      time: "8AM - 4PM EST",
    },
    {
      day: "Saturday and Sunday",
      time: "Closed",
    },
  ];

  const formFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
      validation: { required: "Name is required" },
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: "Enter a valid email address",
        },
      },
    },
    {
      name: "subject",
      type: "text",
      placeholder: "Subject",
      validation: { required: "Subject is required" },
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data:any) => {
    console.log("Form Submitted: ", data);
    reset();
  };
  return (
    <>
      <Header variant={{ size: "3xl", theme: "white", weight: "semiBold" }}>
        Contact & Support
      </Header>
      <div className="flex lg:flex-row flex-col xl:gap-16 gap-10 md:mt-16 mt-8">
        <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 w-full">
          {formFields.map(({ name, type, placeholder, validation }) => (
            <div key={name} className="flex flex-col relative mb-3">
              <input
                type={type}
                placeholder={placeholder}
                {...register(name, validation)}
                className="w-full xl:p-4 p-3 border-2 border-gray-500 rounded-md bg-transparent text-white placeholder:text-[#ffffff90]"
              />
              {errors[name]?.message && (
                <p className="text-red-500">{String(errors[name].message)}</p>
              )}
            </div>
          ))}

          <div className="relative">
            <textarea
              placeholder="Enter your message here"
              {...register("message", { required: "Message is required" })}
              className="w-full xl:p-4 p-3 border-2 border-gray-500 rounded-md bg-transparent text-white placeholder:text-[#ffffff90] h-32"
            />
            {errors.message?.message && (
              <p className="text-red-500">{String(errors.message.message)}</p>
            )}
          </div>

          <Button
            variant={{ size: "base", theme: "dark", weight: "500" }}
            className="mt-5"
          >
            Submit Now
          </Button>
        </form>

        <div className="2xl:w-[30%] xl:w-[35%] lg:w-1/2 w-full">
          <>
            <Header
              variant={{ size: "2xl", theme: "white", weight: "semiBold" }}
              className="font-cormorant mb-3"
            >
              Contact Info
            </Header>

            <>
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 mb-3">
                  <img src={item.icon} alt="icon" />
                  <P
                    variant={{ size: "base", theme: "white", weight: "normal" }}
                  >
                    {item.text}
                  </P>
                </div>
              ))}
            </>
          </>
          <div className="mt-10">
            <Header
              variant={{ size: "2xl", theme: "white", weight: "semiBold" }}
              className="font-cormorant mb-3"
            >
              Opening Hours
            </Header>

            {openhours.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-3"
              >
                <P
                  variant={{ size: "base", theme: "white", weight: "normal" }}
                  className=""
                >
                  {item.day}
                </P>
                <P variant={{ size: "base", theme: "white", weight: "normal" }}>
                  {item.time}
                </P>
              </div>
            ))}
          </div>

          <Header variant={{ size: "lg", theme: "white", weight: "semiBold" }}>
            Holiday closures: Public National Holidays
          </Header>
        </div>
      </div>

      <div className="my-5">
        <Header
          variant={{ size: "2xl", theme: "white", weight: "semiBold" }}
          className="font-cormorant"
        >
          Between 24 and 48 hours for all kind of submitted content.
        </Header>
        <P variant={{ size: "md", theme: "white", weight: "normal" }}>
          <span className="font-semibold"> Please Note :</span>  Turnaround
          times are for requests submitted before 4PM EST. Processing times for
          requests received after 4PM EST and for Fast Ad requests made 1.5
          hours prior to closing begin on the business day following your
          submission.
        </P>
      </div>
    </>
  );
};

export default Contact;
