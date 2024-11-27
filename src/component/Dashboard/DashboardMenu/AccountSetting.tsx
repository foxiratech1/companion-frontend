import { useState } from "react";
import Header from "../../ui/Header";
import P from "../../ui/P";
import upload from "../assets/Upload.png";
import Button from "../../ui/Button";
import GeneralForm from "./GeneralForm";
import ChangePassword from "./ChangePassword";

const AccountSetting = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };
  const handleDelete = () => {
    setUploadedImage(null);
  };

  return (
    <div>
      <Header
        variant={{ size: "3xl", theme: "white", weight: "semiBold" }}
        className="font-cormorant"
      >
        General Settings
      </Header>

      <div className="flex lg:flex-row flex-col mt-8 2xl:gap-10 xl:gap-8 gap-5">
        <div className="shadow-xl xl:p-10 p-8 relative xl:w-[25%] lg:w-[30%] w-full h-fit flex flex-col items-center rounded-xl bg-black ">
          <div className="flex justify-center items-center ">
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="uploaded"
                className="w-[146px] object-contain"
              />
            ) : (
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <img src={upload} alt="default" className="object-contain" />

                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          <span className="text-center text-[#919EAB] font-montserrat mt-7">
            Allowed *.jpeg, *.jpg, *.png, *.gif <br /> Max size of 3.1 MB
          </span>

          <div className="flex justify-center xl:gap-6 gap-2 mt-5">
            <P
              variant={{
                size: "base",
                weight: "light",
              }}
              className="text-white font-montserrat"
            >
              Public profile
            </P>
            <>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#00A76F]"></div>
              </label>
            </>
          </div>

          <div className="text-center">
            <Button
              variant={{ size: "base", theme: "light" }}
              onClick={handleDelete}
              className="rounded font-medium text-text_red mt-8"
            >
              Delete User
            </Button>
          </div>
        </div>

        <GeneralForm />
      </div>
      <div>
        <Header
          variant={{ size: "3xl", theme: "white", weight: "semiBold" }}
          className="font-cormorant mb-5"
        >
          Change Password
        </Header>

        <div className="w-full bg-black p-4 rounded-xl">
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
