import { useForm } from "react-hook-form";

const GeneralForm = () => {
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
    <div className="xl:w-[73%] lg:w-[70%] w-full bg-black rounded-xl md:p-8 p-3">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="flex md:flex-row flex-col gap-5 w-full mb-5">
          <div className="flex flex-col relative md:w-1/2 w-full mb-3">
            <label className="text-[#919EAB] absolute -top-3 left-5 bg-black px-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Jayvion Simon"
              {...register("name", { required: "Name is required" })}
              className="w-full  xl:p-4 p-3 border-2 border-gray-500 rounded-md bg-black text-white placeholder:text-white"
            />
            {errors.name?.message && (
              <p className="text-red-500">{String(errors.name.message)}</p>
            )}
          </div>

          <div className="flex flex-col relative md:w-1/2 w-full mb-3">
            <label className="text-[#919EAB] absolute -top-3 left-5 bg-black px-2">
              Email
            </label>
            <input
              type="email"
              placeholder="nannie.abernathy70@yahoo.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full xl:p-4 p-3 border-2 border-gray-500 rounded-md bg-black text-white placeholder:text-white"
            />
            {errors.email?.message && (
              <p className="text-red-500">{String(errors.email.message)}</p>
            )}
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-5 w-full mb-5">
          <div className="flex flex-col relative md:w-1/2 w-full  mb-3">
            <label className="text-[#919EAB] absolute -top-3 left-5 bg-black px-2">
              Phone number
            </label>
            <input
              type="number"
              placeholder="365-374-4961"
              {...register("number", { required: "Phone number is required" })}
              className="w-full xl:p-4 p-3 border-2 border-gray-500 rounded-md bg-black text-white placeholder:text-white"
            />
            {errors.number?.message && (
              <p className="text-red-500">{String(errors.number.message)}</p>
            )}
          </div>

          <div className="flex flex-col relative md:w-1/2 w-full mb-3">
            <label className="text-[#919EAB] absolute -top-3 left-5 bg-black px-2">
              Address
            </label>
            <input
              type="address"
              placeholder="19034 Verna Unions Apt. 164 - Honolulu, RI / 87535"
              {...register("address", {
                required: "Address is required",
              })}
              className="w-full xl:p-4 p-3 border-2 border-gray-500 rounded-md bg-black text-white placeholder:text-white"
            />
            {errors.address?.message && (
              <p className="text-red-500">{String(errors.address.message)}</p>
            )}
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-5 w-full mb-5">
          <div className="flex flex-col relative md:w-1/2 w-full mb-3 ">
            <label className="text-[#919EAB] absolute -top-3 left-5 bg-black px-2">
              Country
            </label>
            <select className="w-full xl:p-4 p-3 border-2 border-gray-500 rounded-md bg-black text-white placeholder:text-white">
              <option>Country1</option>
              <option>Country2</option>
              <option>Country3</option>
              <option>Country4</option>
              <option>Country5</option>
              <option>Country6</option>
            </select>
          </div>

          <div className="flex flex-col relative md:w-1/2 w-full mb-3">
            <label className="text-[#919EAB] absolute -top-3 left-5 bg-black px-2">
              State/region
            </label>
            <input
              type="state"
              placeholder="Chalandri"
              {...register("state", {
                required: "State is required",
              })}
              className="w-full xl:p-4 p-3 border-2 border-gray-500 rounded-md bg-black text-white placeholder:text-white"
            />
            {errors.state?.message && (
              <p className="text-red-500">{String(errors.state.message)}</p>
            )}
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-5 w-full mb-5">
          <div className="flex flex-col relative md:w-1/2 w-full  mb-3">
            <label className="text-[#919EAB] absolute -top-3 left-5 bg-black px-2">
              City
            </label>
            <input
              type="city"
              placeholder="Chalandri"
              {...register("city", { required: "City is required" })}
              className="w-full xl:p-4 p-3 border-2 border-gray-500 rounded-md bg-black text-white placeholder:text-white"
            />
            {errors.city?.message && (
              <p className="text-red-500">{String(errors.city.message)}</p>
            )}
          </div>

          <div className="flex flex-col relative md:w-1/2 w-full mb-3">
            <label className="text-[#919EAB] absolute -top-3 left-5 bg-black px-2">
              Zip code
            </label>
            <input
              type="zipcode"
              placeholder="22000"
              {...register("zipcode", {
                required: "Zipcode is required",
              })}
              className="w-full xl:p-4 p-3 border-2 border-gray-500 rounded-md bg-black text-white placeholder:text-white"
            />
            {errors.zipcode?.message && (
              <p className="text-red-500">{String(errors.zipcode.message)}</p>
            )}
          </div>
        </div>

        <div className="relative">
          <label className="text-[#919EAB] absolute -top-3 left-5 bg-black px-2">
            About
          </label>
          <textarea
            placeholder="Write a Message"
            {...register("message", { required: "Message is required" })}
            className="w-full xl:p-4 p-3 border-2 border-gray-500 rounded-md bg-black text-white h-32"
          />
          {errors.about?.message && (
            <p className="text-red-500">{String(errors.about.message)}</p>
          )}
        </div>

        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="mt-5 px-4 py-2 font-semibold bg-white text-[#1C252E] rounded-md"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralForm;
