import Button from "../../ui/Button";
import Header from "../../ui/Header";
import P from "../../ui/P";
import welcom from "../assets/bg-stack.png";
import hand from "../assets/Slice 1.png";
import girl from "../assets/Couple watching New Year's fireworks.png";
import { useState } from "react";
import slide1 from "../assets/slide.png";
import cross from "../assets/close-thick.png";
import cardimg1 from "../assets/img1.png";
import cardimg2 from "../assets/img2.png";
import cardimg3 from "../assets/img3.png";
import cardimg4 from "../assets/img21.png";
import cardimg5 from "../assets/img22.png";
import cardimg6 from "../assets/img23.png";
import cardimg7 from "../assets/img31.png";
import cardimg8 from "../assets/img32.png";
import cardimg9 from "../assets/img33.png";
import location from "../assets/location.png";
import clock from "../assets/clock.png";
import user from "../assets/primary-shape.png";
import dots from "../assets/dots.png";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}
const MyService = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesData: Slide[] = [
    {
      id: 1,
      image: slide1,
      title: "Strike a yogi pose",
      description: "Get fit with Pocket Yoga's customizable routines...",
    },
    {
      id: 2,
      image: slide1,
      title: "Another Slide Title",
      description: "Description for the second slide goes here.",
    },
  ];

  const selectOptions = [
    { label: "All Services", options: ["Option 1", "Option 2"] },
    { label: "Sort By", options: ["Sorting Option 1", "Sorting Option 2"] },
  ];

  const cardData = [
    {
      cardimg1: cardimg1,
      cardimg2: cardimg2,
      cardimg3: cardimg3,
      postedDate: "Posted date:",
      date: "21 Jul 2022 12:00 AM",
      name: "Alisa  martin",
      locationIcon: location,
      userIcon: user,
      yearIcon: clock,
      location: "Maldives",
      year: "21 years",
      user: "blonde, White",
      dot: dots,
    },
    {
      cardimg1: cardimg4,
      cardimg2: cardimg5,
      cardimg3: cardimg6,
      postedDate: "Posted date:",
      date: "21 Jul 2022 12:00 AM",
      name: "Alisa  martin",
      locationIcon: location,
      userIcon: user,
      yearIcon: clock,
      location: "Maldives",
      year: "21 years",
      user: "blonde, White",
      dot: dots,
    },
    {
      cardimg1: cardimg7,
      cardimg2: cardimg8,
      cardimg3: cardimg9,
      postedDate: "Posted date:",
      date: "21 Jul 2022 12:00 AM",
      name: "Alisa  martin",
      locationIcon: location,
      userIcon: user,
      yearIcon: clock,
      location: "Maldives",
      year: "21 years",
      user: "blonde, White",
      dot: dots,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 w-full">
        <div
          className="relative w-full lg:w-[75%] h-[300px] bg-cover bg-no-repeat bg-center rounded-2xl"
          style={{ backgroundImage: `url(${welcom})` }}
        >
          <div className="absolute flex flex-row justify-between left-1 md:left-10 top-5 md:top-10 2xl:top-5 w-full">
            <div className="w-full md:w-[50%] mt-5 md:mt-10 p-1 md:p-0">
              <Header
                variant={{ size: "3xl", theme: "white", weight: "medium" }}
                className="flex items-center gap-2 font-garamond text-lg md:text-3xl"
              >
                Welcome back
                <img src={hand} alt="hands" className="w-5 h-5 md:w-8 md:h-8" />
              </Header>

              <Header
                variant={{ size: "3xl", theme: "white", weight: "medium" }}
                className="font-garamond text-lg md:text-3xl"
              >
                Hudson Alvarez
              </Header>

              <P
                variant={{ size: "md", theme: "white", weight: "normal" }}
                className="text-zinc-400 my-3 text-sm md:text-md"
              >
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything.
              </P>

              <Button variant={{ size: "base", theme: "dark", weight: "500" }}>
                Create New Ad
              </Button>
            </div>

            <div className="w-full md:w-[50%] flex justify-end mt-5 md:mt-0">
              <img
                src={girl}
                alt="girl"
                className="w-32 h-auto md:w-48 lg:w-64 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative overflow-hidden rounded-lg w-full lg:w-[25%] ">
          {slidesData.map((slide, index) => (
            <div
              key={slide.id}
              className={`${
                index === currentSlide ? "block" : "hidden"
              } transition-all duration-500 ease-in-out`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full object-cover h-[300px]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 flex items-end p-4">
                <div>
                  <p className="text-red-500 text-sm font-semibold">
                    FEATURED APP
                  </p>
                  <h2 className="text-white text-2xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="text-white text-sm mt-2">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Navigation */}
          <button
            onClick={prevSlide}
            className="absolute top-4 right-16 transform -translate-y-1/2 text-white text-xl"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-4 right-4 transform -translate-y-1/2 text-white text-xl"
          >
            ❯
          </button>
        </div>
      </div>

      {/* caution section */}
      <div className="bg-[#FF000020] border border-[#ff0000] rounded-lg 2xl:p-5 p-3 my-8">
        <div className="flex justify-end">
          <img src={cross} alt="cross icon" className="cursor-pointer" />
        </div>
        <Header
          variant={{ theme: "white", weight: "bold" }}
          className="text-3xl font-garamond uppercase mb-2"
        >
          Caution:
        </Header>
        <P variant={{ size: "base", theme: "white", weight: "normal" }}>
          Due to increasing reports of ACCOUNT HACKING attempts, DO NOT log-in
          to your ErosAds account through links provided in emails or text
          messages. We never threaten account suspension or request login
          details through external links. Eros Representatives will never
          contact you via phone. If you need assistance, please reach out
          through our secure channels—email or chat support.
        </P>
      </div>

      {/* your ads */}
      <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between">
        <Header variant={{ size: "2xl", theme: "white", weight: "medium" }}>
          Your Ads & Services (0)
        </Header>
        <Button className="rounded-xl capitalize font-semibold">
          Create New ad
        </Button>
      </div>

      <div className="my-7 flex flex-col lg:gap-0 gap-5 lg:flex-row justify-between ">
        <div className="relative xl:w-[30%] md:w-[50%] w-full">
          <input
            type="text"
            placeholder="Search Escorts, Categories"
            className="bg-black w-full focus:outline-none text-white placeholder-white border-none rounded-lg py-3 focus:ring-0 focus:border-none"
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

        <div className="flex gap-5 items-center">
          {selectOptions.map((select, index) => (
            <div className="relative" key={index}>
              <select
                className="bg-black text-white text-sm rounded-full px-4 py-3 focus:outline-none appearance-none sortingoption border border-[#ff0000] flex justify-between"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                  background: "transparent",
                }}
              >
                <option>{select.label}</option>
                {select.options.map((option, i) => (
                  <option key={i}>{option}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 xl:gap-10 gap-5">
        {cardData.map((data, index) => (
          <div key={index} className="bg-black p-4 rounded-lg shadow-md">
            <div className="flex gap-3">
              <img
                src={data.cardimg1}
                alt="main-card"
                className="object-cover w-full rounded-lg"
              />
              <div className="flex flex-col gap-3 md:block ">
                <img
                  src={data.cardimg2}
                  alt="side-card1"
                  className="object-cover w-24 xl:h-28 lg:h-24 rounded-lg"
                />
                <img
                  src={data.cardimg3}
                  alt="side-card2"
                  className="object-cover w-24 xl:h-28 lg:h-24 rounded-lg"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-400 text-sm">
                Posted date: {data.postedDate} <span>{data.date}</span>
              </p>

              <h2 className="text-3xl font-semibold text-white font-garamond mt-2">
                {data.name}
              </h2>

              <div className="mt-2 flex flex-col gap-3">
                <p className="text-white flex items-center gap-2">
                  <img
                    src={data.locationIcon}
                    alt="location"
                    className="w-5 h-5"
                  />
                  {data.location}
                </p>
                <p className="text-white flex items-center gap-2">
                  <img src={data.yearIcon} alt="year" className="w-5 h-5" />
                  {data.year} years
                </p>
                <p className="text-white flex items-center gap-2">
                  <img src={data.userIcon} alt="user" className="w-5 h-5" />
                  {data.user}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyService;
