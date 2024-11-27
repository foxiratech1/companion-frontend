import Button from "../ui/Button";
import Header from "../ui/Header";
import P from "../ui/P";
import arrow from "./assets/arrow-red.png";
import circle from "./assets/Image-modified.png";
import star from "./assets/Star 12.png";
import smile from "./assets/smile.png";
import escort from "./assets/escort.png";
import vision from "./assets/vision.png";
import right from "./assets/right.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "./assets/slide1.png";
import client2 from "./assets/slide2.png";
import line from "./assets/line.png";
import { useRef, useState } from "react";
import play_btn from "./assets/play.png";

const Aboutus = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const service = [
    {
      icon: star,
      text: "400+",
      title: "Escorts Services",
    },
    {
      icon: smile,
      text: "100+",
      title: "Happy Customer",
    },
  ];

  const stats = [
    {
      id: 1,
      value: "200+",
      title: "Active Escorts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit– et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.",
    },
    {
      id: 2,
      value: "99%",
      title: "Booking Completes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit– et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.",
    },
    {
      id: 3,
      value: "1.5M+",
      title: "User Visits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit– et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.",
    },
  ];

  const visionPoints = [
    {
      id: 1,
      text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.",
      sign: right,
    },
    {
      id: 2,
      text: "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test override the digital.",
      sign: right,
    },
  ];

  const testimonials = [
    {
      image: client1,
      text: "There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or randomized.",
      name: "Bonnie Tolbet",
      role: "Customer",
    },
    {
      image: client2,
      text: "There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or randomized.",
      name: "Sarah Albert",
      role: "Customer",
    },
    {
      image: client1,
      text: "There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or randomized.",
      name: "Bonnie Tolbet",
      role: "Customer",
    },
  ];


  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();  // TypeScript now knows that 'video' is an HTMLVideoElement
      } else {
        video.play();   // Same here, it's an HTMLVideoElement
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div className="bg-bg_about py-10 bg-no-repeat bg-cover ">
        <div className="flex sm:flex-row flex-col items-center justify-between container mx-auto sm:px-6 px-3">
          <div className="xl:w-[45%] sm:w-[65%] w-full">
            <Header
              variant={{ size: "4xl", theme: "white", weight: "semiBold" }}
              className="font-cormorant lg:w-[50%] w-full"
            >
              Get Te Best{" "}
              <span className="text-text_red"> Escort Service </span> in your
              town.
            </Header>
            <P
              variant={{ size: "md", theme: "white", weight: "normal" }}
              className="my-4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
              massa libero egestas malesuada viverra gravida libero cursus nulla
              leo pulvinar.
            </P>
            <Button className="flex gap-1 items-center bg-white text-black rounded-full border-none !py-3 !px-4">
              <img src={arrow} alt="arrow" />
              Start your Service
            </Button>
          </div>
          <div>
            <img src={circle} alt="circle image" />
          </div>
        </div>
      </div>

      <div className=" text-white container mx-auto sm:px-6 px-3 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <button className="bg-bg_red text-white rounded-full px-6 py-3 text-sm">
              About Us
            </button>
            <div className="xl:w-[60%] lg:w-[79%] w-full">
              <h2 className="text-4xl font-bold mb-3">
                About our Escorts Service Agency
              </h2>
              <p className="text-xl font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
              massa libero egestas malesuada viverra gravida libero cursus.
            </p>

            <div className="grid grid-cols-2 gap-4 border-y border-y-[#D8D8D8] py-4">
              {service.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-black lg:p-6 p-3 rounded-lg"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <img src={item.icon} alt={item.title} className="w-5 h-5" />
                    <p className="text-2xl font-bold text-white">{item.text}</p>
                  </div>
                  <p className="text-sm text-white">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img src={escort} alt="About us" className="rounded-lg" />
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-10 my-10 container mx-auto sm:px-6 px-3 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 xl:gap-8 lg:gap-4 md:gap-0 gap-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center md:border-r-2 md:border-[#FF8D8D] last:border-none xl:px-5 px-3"
            >
              <h2 className="text-4xl font-cormorant mb-2">{stat.value}</h2>
              <h3 className="text-3xl font-semibold mb-4">{stat.title}</h3>
              <p className="text-white font-normal">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto sm:px-6 px-3  grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <img src={vision} alt="Our Vision" className="rounded-lg" />
          <div className="absolute top-4 left-4">
            <div className="bg-red-500 w-16 h-16 rounded-tl-lg rounded-br-lg"></div>
          </div>
        </div>

        <div className="space-y-4">
          <button className="bg-bg_red text-white rounded-full px-8 uppercase py-2 text-base">
            Our Vision
          </button>
          <h2 className="text-4xl font-bold text-white">
            Turn your ideas into reality.
          </h2>
          <p className="text-md font-light text-white">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity beta test. Override the digital divide with additional from
            DevOps.
          </p>

          <div className="space-y-4 ">
            {visionPoints.map((point) => (
              <div key={point.id} className="flex items-center space-x-2">
                <img src={right} alt="right sign" />
                <p className="text-white text-sm">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black my-10">
        <div className="container mx-auto sm:px-6 px-3 relative w-full rounded-3xl py-10">
          <video
            ref={videoRef}
            className="w-full rounded-3xl"
            onClick={togglePlayPause}
            onPause={() => setIsPlaying(false)}
            onEnded={handleVideoEnd}
          >
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
          </video>

          {!isPlaying && (
            <img
              src={play_btn}
              alt="Play Button"
              className="absolute inset-0 m-auto cursor-pointer"
              onClick={togglePlayPause}
            />
          )}
        </div>
      </div>

      <div className="container mx-auto sm:px-6 px-3 py-12">
        <div className="text-center mb-8">
          <button className="bg-bg_red px-4 py-2 rounded-full uppercase tracking-wider text-white">
            Our testimonials
          </button>
          <h2 className="text-4xl font-bold mt-4 text-white">What They Say</h2>
        </div>
        <Slider {...settings} className="">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-2 w-full">
              <div className="bg-black p-6 rounded-lg xl:w-[80%] sm:w-[90%] w-full mx-auto">
                <div className="flex sm:flex-row flex-col relative items-center gap-10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="flex items-center gap-10 xl:-ml-24 sm:-ml-12"
                  />

                  <div>
                    <p className="text-md text-gray-300 mb-4">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center justify-between">
                      <img src={line} alt="LINE" />
                      <div>
                        <p className="sm:text-2xl text-md font-normal font-cormorant text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-base text-white text-right">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Aboutus;
