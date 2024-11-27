import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/images/slide.png";
import features from "../../assets/images/featured.png";
import P from "../ui/P";
import SlickSlider from "../ui/SlickSlider";
import { useState } from "react";
import video1 from "../../assets/images/production_id 4182916 (720p)(1).mp4";
import heart from "../../assets/images/heart.png";
import vip from "../../assets/images/vip.png";
import Header from "../ui/Header";
import verified from "../../assets/images/verified.png";
import call from "../../assets/images/call.png";
import msg from "../../assets/images/msg.png";
import Button from "../ui/Button";

const EscortSlider = () => {
  const [liked, setLiked] = useState(false);
  const settings = {
    dots: false,
  };

  const slide_data = [
    {
      video: slide1,
      picture: slide1,
    },
    {
      video: slide1,
      picture: slide1,
    },
  ];

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-[#1E1E1E] text-white py-8">
      <div className="w-full container mx-auto sm:px-6 px-3">
        <div className="flex md:flex-row flex-col md:gap-0 gap-5 items-center justify-between mb-4">
          <div>
            <>
              <P
                variant={{ size: "base", theme: "secoundry", weight: "normal" }}
                className="bg-gold-gradient bg-clip-text text-transparent flex items-center gap-2"
              >
                <img src={vip} alt="vip_img" />
                VIP isabelle Brazilian
              </P>
            </>

            <>
              <Header
                variant={{ size: "4xl", theme: "light", weight: "medium" }}
                className="font-cormorant flex items-center gap-3 my-2"
              >
                Fiona
                <img src={verified} alt="verified" />
              </Header>
            </>
            <P variant={{ size: "base", theme: "light", weight: "light" }}>
              21 years Old , New York
            </P>
          </div>
          <div className="flex gap-5">
            <Button
              variant={{
                size: "base",
                theme: "light",
                weight: "500",
                rounded: "full",
              }}
              className="flex items-center gap-2"
            >
              <img src={call} alt="phone" />
              Phone
            </Button>

            <Button
              variant={{
                size: "base",
                theme: "dark",
                weight: "500",
                rounded: "full",
              }}
              className="flex items-center gap-2"
            >
              <img src={msg} alt="phone" />
              Messege
            </Button>
          </div>
        </div>

        <SlickSlider {...settings}>
          {slide_data.map((slide, index) => (
            <div className="!flex md:flex-row flex-col justify-between lg:gap-0 gap-5">
              <div className="relative lg:w-[45%] md:w-1/2 w-full" key={index}>
                <img
                  src={slide.picture}
                  alt="Profile"
                  className="w-full object-cover rounded-lg"
                />

                <Button className="absolute flex items-center top-4 left-4 border-none text-white text-sm rounded-md cursor-pointer ">
                  <P
                    variant={{ size: "base", weight: "semiBold" }}
                    className="px-2 bg-[#34C434] py-2 rounded-l-md"
                  >
                    18+
                  </P>
                  <P
                    variant={{ size: "base", weight: "semiBold" }}
                    className="bg-white text-[#34C434] py-2 px-2 uppercase rounded-r-md"
                  >
                    ID VERIFIED
                  </P>
                </Button>

                <img
                  src={features}
                  alt="features"
                  className="absolute bottom-4"
                />
              </div>

              <div className="relative  md:w-1/2 w-full  mx-auto rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <video
                    className="w-full h-full"
                    src={video1}
                    controls={false}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-[#FFABAB] text-black p-4 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-4.486-2.597A1 1 0 009 9.487v5.026a1 1 0 001.266.965l4.486-2.597a1 1 0 000-1.74z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <button
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                    liked
                      ? "bg-red-700 text-white border border-transparent"
                      : "bg-[#5c2a2a]  text-gray-500 border rounded-full"
                  }`}
                  onClick={toggleLike}
                >
                  <img src={heart} alt="heart" />
                </button>
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default EscortSlider;
