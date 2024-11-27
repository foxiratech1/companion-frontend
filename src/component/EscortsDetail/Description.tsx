import { Link } from "react-router-dom";
import profileData from "../../jsons/escortDetailData.json";
import Header from "../ui/Header";
import Location from "../ui/Location";
import P from "../ui/P";
import { capatilizeFirestLetter } from "../utils/helper";

const Description = () => {
  return (
    <div className="container mx-auto shadow-md rounded-lg  sm:px-6 px-3 pt-8 text-white flex md:flex-row flex-col 2xl:gap-20 lg:gap-10 gap-6 justify-between">
      <div className="2xl:w-[65%] lg:w-[60%] md:w-1/2 w-full">
        <Header
          variant={{ size: "3xl", theme: "light", weight: "normal" }}
          className="font-cormorant my-3"
        >
          Stats
        </Header>

        <>
          {Object.entries(profileData.stats).map(([key, value]) => (
            <span key={key} className="w-full flex">
              <P
                variant={{ size: "base", theme: "light", weight: "light" }}
                className="w-[60%] mt-2"
              >
                {capatilizeFirestLetter(key)}
              </P>
              <P
                variant={{ size: "base", theme: "light", weight: "medium" }}
                className="w-[30%]"
              >
                {value}
              </P>
            </span>
          ))}
        </>

        <div className="border-y border-[#6B0000] pb-5 mt-5">
          <Header
            variant={{ size: "3xl", theme: "light", weight: "normal" }}
            className="font-cormorant my-4"
          >
            Description
          </Header>

          {Object.entries(profileData.description).map(([key, value]) => (
            <p
              key={key}
              className="lg:line-clamp-none line-clamp-6"
            >{`${value}`}</p>
          ))}
        </div>

        <Location heading="Service Offered" />

        <div className="border-t border-[#6B0000] pt-5 mt-5 flex justify-between mb-10">
          <P variant={{ size: "base", theme: "white", weight: "medium" }}>
            {profileData.ad_id}
          </P>
          <Link
            to="/"
            className="text-base border-b border-[#FF0000] text-[#FF0000]"
          >
            Report This ad
          </Link>
        </div>
      </div>

      <div className="2xl:w-[35%] lg:w-[40%] md:w-1/2 w-full">
        <div className="border border-[#6B0000] rounded-md p-4">
          <Header
            variant={{ size: "3xl", theme: "light", weight: "normal" }}
            className="font-cormorant "
          >
            Contact Info
          </Header>

          {Object.entries(profileData.contact_info).map(([key, value]) => (
            <span key={key} className="w-full flex mt-4">
              <P
                variant={{ size: "base", theme: "light", weight: "medium" }}
                className="lg:w-1/2 sm:w-[40%] w-[30%]"
              >
                {capatilizeFirestLetter(key)}
              </P>
              <P
                variant={{ size: "base", theme: "light", weight: "light" }}
                className="w-1/2"
              >
                {value}
              </P>
            </span>
          ))}
        </div>

        <div className="border border-[#6B0000] rounded-md p-4 mt-4">
          <Header
            variant={{ size: "3xl", theme: "light", weight: "normal" }}
            className="font-cormorant "
          >
            Rates
          </Header>
          <div className="grid grid-cols-2">
            {Object.entries(profileData.rates.hourly).map(
              ([rateType, currencies]) => (
                <div key={rateType} className="w-full mt-4">
                  <P
                    variant={{ size: "base", theme: "light", weight: "light" }}
                    className="capitalize"
                  >
                    {capatilizeFirestLetter(rateType.replace("_", " "))}
                  </P>
                  <div className="flex">
                    {Object.entries(currencies).map(([currency, amount]) => (
                      <span key={currency} className="w-full mt-2 ">
                        <P
                          variant={{
                            size: "base",
                            theme: "light",
                            weight: "medium",
                          }}
                          className=""
                        >
                          {amount}
                        </P>
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Description;
