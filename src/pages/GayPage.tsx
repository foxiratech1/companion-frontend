import React from "react";
import Cards from "../component/ui/Cards";
import Dropdown from "../component/ui/Dropdown";
import "../style/styles.css";
import Slider from "../component/ui/Slider";
import Location from "../component/ui/Location";
import blogsData from "../jsons/gayData.json";
interface SliderImg {
  url: string;
  name: string;
}

const GayPage: React.FC = () => {
  const sliderImageUrl: SliderImg[] = [
    { url: "/src/assets/images/sliderimg1.png", name: "Julie" },
    { url: "/src/assets/images/sliderimg2.png", name: "Dianne" },
    { url: "/src/assets/images/sliderimg3.png", name: "Bessie" },
    { url: "/src/assets/images/sliderimg4.png", name: "Connie" },
    { url: "/src/assets/images/sliderimg5.png", name: "Jane" },
    { url: "/src/assets/images/sliderimg1.png", name: "Darlene" },
    { url: "/src/assets/images/sliderimg2.png", name: "Arlene" },
    { url: "/src/assets/images/sliderimg3.png", name: "Bessie" },
  ];

  return (
    <>
      <section className="bg-black relative h-[300px]">
        <h1 className="text-white text-center z-4 text-5xl font-cormorant pt-16 ">
          Top Trans In Gay
        </h1>
        <button className="md:w-auto w-44 mx-auto mt-10 flex justify-center items-center absolute md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500 p-3 rounded-lg border border-red-600">
          CHANGE LOCATION
        </button>
      </section>

      <div className="container px-7 my-7 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Escorts, Categories"
            className="bg-black text-white placeholder-gray-500 rounded-lg pl-4 pr-10 py-2 focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.35z"
              />
            </svg>
          </button>
        </div>
        <Dropdown />
      </div>
      <Cards showPagination={true} blogsData={blogsData} />
      <div className="bg-black py-9 my-9" style={{ marginTop: "6rem" }}>
        <h2 className="text-center text-white text-3xl font-cormorant">
          We have new entertainers
        </h2>
        <Slider
          sliderImageUrl={sliderImageUrl}
          dataShow={true}
          blogs={[]}
          showBg={false}
          header={""}
        />
      </div>

      <Location heading="Other Nearby Locations" />
    </>
  );
};

export default GayPage;
