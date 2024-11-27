import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import arrow from "../component/ContactUs/assets/arrow.png";

const CompleteProfileForm = () => {
  const contactData = [
    {
      text: "This website should be accessed only by people who are at least eighteen (18) years of age and the age of majority in their jurisdiction. By accessing this website, you represent to us that you are not a minor. By accessing any portion of this website beyond this pop-up dialog, you agree to our ",
      linkText: "Terms & Conditions",
      linkUrl: "/terms",
      postText:
        ". Any unauthorized use of this website may violate applicable law.",
    },
    {
      text: "While Companion does not create, produce or edit any content listed on the advertisements, all the posted advertisements must comply with our age and content standards.",
      linkText: "",
      linkUrl: "",
      postText: "",
    },
    {
      text: "Eros has a zero-tolerance policy toward human trafficking, prostitution, and any other illegal conduct. We cooperate with law enforcement, pursuant to appropriate process, such as a subpoena, in investigating criminal activity. Activity that violates our zero-tolerance policy may result in a referral to law enforcement. I have no intention to, and will not, use this site in violation of Eros’s policies or any federal, state, or local law, and I agree to ",
      linkText: "report violations",
      linkUrl: "/report-violations",
      postText: " to the appropriate authorities.",
    },
    {
      text: "I also agree to ",
      linkText:
        "report suspected exploitation of minors and/or human trafficking to the appropriate authorities",
      linkUrl: "/report-exploitation",
      postText:
        ". For Germany: In order to contact the YPA, please click on this link or on the Report Abuse link at the bottom of the page.",
    },
    {
      text: "This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies.",
      linkText: "",
      linkUrl: "",
      postText: "",
    },
  ];
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];
  const styles = ["Style 1", "Style 2", "Style 3", "Style 4"];
  const socialMediaOptions = [
    "Instagram",
    "Twitter",
    "Facebook",
    "LinkedIn",
    "YouTube",
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data:any) => {
    console.log("data", data);
  };

  return (
    <>
      <div className="w-[50%] mx-auto my-10">
        <div className="bg-black p-14 rounded-lg">
          <h1 className="text-3xl font-semibold mb-4 text-white text-center">
            Complete your profile
          </h1>
          <p className="text-gray-400 mb-6 mx-auto w-96 text-center">
            Please fill the form below to complete your profile. Feel free to
            add as much detail as needed. Our admin will contact you.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-white">Full name</label>
              <input
                {...register("fullName", { required: "Full Name is required" })}
                placeholder="Enter full name"
                className="w-full p-3 border border-white border-opacity-40 rounded mt-1 bg-black text-white focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {errors.fullName && (
                <p className="text-text_red text-sm">
                  {String(errors.fullName.message)}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white">Email</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Invalid email",
                    },
                  })}
                  placeholder="Enter email"
                  className="w-full p-3 text-white border border-white border-opacity-40 bg-black rounded mt-1 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                {errors.email && (
                  <p className="text-text_red text-sm">
                    {String(errors.email.message)}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white">Phone Number</label>
                <input
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                  placeholder="Enter phone number"
                  className="w-full p-3 text-white border border-white border-opacity-40 bg-black rounded mt-1"
                />
                {errors.phoneNumber && (
                  <p className="text-text_red text-sm">
                    {String(errors.phoneNumber.message)}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-white">Category</label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="w-full p-3 border border-white border-opacity-40 bg-black rounded mt-1 text-white"
                >
                  <option value="">Select category</option>
                  {categories.map((category, index) => (
                    <option
                      key={index}
                      value={category.toLowerCase().replace(/\s+/g, "")}
                    >
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-text_red text-sm">
                    {String(errors.category.message)}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white">Style</label>
                <select
                  {...register("style", { required: "Style is required" })}
                  className="w-full p-3 border border-white border-opacity-40 bg-black rounded mt-1 text-white"
                >
                  <option value="">Select Style</option>
                  {styles.map((style, index) => (
                    <option
                      key={index}
                      value={style.toLowerCase().replace(/\s+/g, "")}
                    >
                      {style}
                    </option>
                  ))}
                </select>
                {errors.style && (
                  <p className="text-text_red text-sm">
                    {String(errors.style.message)}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-white">Zip Code</label>
              <input
                {...register("zipCode", { required: "Zip Code is required" })}
                placeholder="Enter zip code"
                className="w-full p-3 text-white border border-white border-opacity-40 bg-black rounded mt-1 focus:outline-none "
              />
              {errors.zipCode && (
                <p className="text-text_red text-sm">
                  {String(errors.zipCode.message)}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-white">City</label>
                <input
                  {...register("city", { required: "City is required" })}
                  placeholder="Enter city"
                  className="w-full p-3 text-white border border-white border-opacity-40 bg-black rounded mt-1 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                {errors.city && (
                  <p className="text-text_red text-sm">
                    {String(errors.city.message)}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white">Region</label>
                <input
                  {...register("region", { required: "Region is required" })}
                  placeholder="Enter region"
                  className="w-full p-3 text-white border border-white border-opacity-40 !bg-black rounded mt-1 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                {errors.region && (
                  <p className="text-text_red text-sm">
                    {String(errors.region.message)}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white">Country</label>
                <input
                  {...register("country", { required: "Country is required" })}
                  placeholder="Enter country"
                  className="w-full p-3 text-white border border-white border-opacity-40 bg-black rounded mt-1 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                {errors.country && (
                  <p className="text-text_red text-sm">
                    {String(errors.country.message)}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-white">
                  Social Media Reference
                </label>
                <select
                  {...register("socialMedia")}
                  className="w-full p-3 border border-white border-opacity-40 bg-black rounded mt-1 text-white"
                >
                  {socialMediaOptions.map((social, index) => (
                    <option
                      key={index}
                      value={social.toLowerCase()}
                      className="text-white"
                    >
                      {social}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white">Website</label>
                <input
                  {...register("website")}
                  placeholder="www.example.com"
                  className="w-full p-3 text-white border border-white border-opacity-40 bg-black rounded mt-1 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="inline-flex items-center text-white">
                <input
                  type="checkbox"
                  {...register("terms", {
                    required: "You must accept the terms",
                  })}
                  className="form-checkbox"
                />
                <span className="ml-2">
                  I have read and accept the{" "}
                  <Link to="/terms-condition" className="text-text_red">
                    terms and conditions
                  </Link>
                </span>
              </label>
              {errors.terms && (
                <p className="text-text_red text-sm">
                  {String(errors.terms.message)}
                </p>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-10 bg-bg_red text-white py-2 rounded flex items-center"
              >
                Submit
                <img src={arrow} alt="Arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" text-gray-300 p-4 md:p-6 rounded-lg mt-6">
        {contactData.map((item, index) => (
          <p className="mb-4" key={index}>
            {item.text}
            {item.linkText && (
              <Link to={item.linkUrl} className="text-text_red">
                {item.linkText}
              </Link>
            )}
            {item.postText}
          </p>
        ))}
      </div>
    </>
  );
};

export default CompleteProfileForm;
