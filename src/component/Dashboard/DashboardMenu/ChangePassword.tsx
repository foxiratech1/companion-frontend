// import { useForm } from "react-hook-form";
// import CommonPass from "./CommonPass";



// const ChangePassword = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//     reset,
//   } = useForm();

//   const newPassword = watch("newPassword");

//   const onSubmit = (data:any) => {
//     console.log("Form Submitted: ", data);
//     reset();
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)} className="">
//         <CommonPass
//           placeholder="Old password"
//           register={register}
//           name="currentPassword"
//           errors={errors}
//           validation={{ required: "Current password is required" }}
//         />

//         <CommonPass
//           placeholder="New password"
//           register={register}
//           name="newPassword"
//           errors={errors}
//           validation={{
//             required: "New password is required",
//             minLength: {
//               value: 6,
//               message: "Password must be at least 6 characters long",
//             },
//           }}
//         />

//         <CommonPass
//           placeholder="Confirm new password"
//           register={register}
//           name="confirmNewPassword"
//           errors={errors}
//           validation={{
//             required: "Please confirm your new password",
//             validate: (value: any) =>
//               value === newPassword || "Passwords do not match",
//           }}
//         />

//         <div className="flex justify-end items-center">
//           <button
//             type="submit"
//             className="mt-3 px-4 py-2 font-semibold bg-white text-[#1C252E] rounded-md"
//           >
//             Save changes
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ChangePassword;



import { useForm, SubmitHandler } from "react-hook-form";
import CommonPass from "./CommonPass";

// Interface for the form fields
interface FormFields {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormFields>();

  const newPassword = watch("newPassword");

  // On form submission
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log("Form Submitted: ", data);
    reset(); // Reset the form after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* CommonPass component for Old password */}
        <CommonPass
          placeholder="Old password"
          register={register}
          name="currentPassword"
          errors={errors}
          validation={{ required: "Current password is required" }}
        />

        {/* CommonPass component for New password */}
        <CommonPass
          placeholder="New password"
          register={register}
          name="newPassword"
          errors={errors}
          validation={{
            required: "New password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          }}
        />

        {/* CommonPass component for Confirm new password */}
        <CommonPass
          placeholder="Confirm new password"
          register={register}
          name="confirmNewPassword"
          errors={errors}
          validation={{
            required: "Please confirm your new password",
            validate: (value: string) =>
              value === newPassword || "Passwords do not match",
          }}
        />

        {/* Submit button */}
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="mt-3 px-4 py-2 font-semibold bg-white text-[#1C252E] rounded-md"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
