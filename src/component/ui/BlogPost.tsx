import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SliderProps {
  dataShow: boolean;
  blogPost: {
    id: number;
    name: string;
    date: string;
    imageUrl: string;
    detail: string;
  }[];
}

const BlogPost: React.FC<SliderProps> = ({ blogPost }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    small: {
      breakpoint: { max: 639, min: 300 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="relative parent !pb-0 my-2">
      <div className="flex flex-col md:flex-row  absolute top-[2%]">
        <div className="flex items-center mb-2 md:mb-0">
          <h2 className="text-3xl text-white font-normal px-8 font-cormorant">
            Blog Area
          </h2>
          <span className="border border-gray-600 h-[30px] inline-block mr-4"></span>
        </div>

        <Button
          variant={{ size: "sm", theme: "dark", weight: "400", rounded: "lg" }}
          // className="text-white text-sm px-4 py-2 rounded-sm hover:bg-red-600 bg-bg_red">
          className="!px-5 uppercase"
        >
          All Blog
        </Button>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        customLeftArrow={
          <IoIosArrowBack className="absolute top-0 right-[82px] text-2xl text-text_red" />
        }
        customRightArrow={
          <IoIosArrowForward className="absolute top-0 right-[62px] text-2xl text-text_red" />
        }
        dotListClass="custom-dot-list-style"
      >
        {blogPost.map((data, index) => {
          return (
            <div className={`slider mt-8`} key={index}>
              <div className="text-white rounded-lg shadow  ">
                <Link to="/">
                  <img className="rounded-t-lg" src={data.imageUrl} alt="" />
                </Link>
                <div className="p-5">
                  <Link to="/">
                    <h5 className="mb-2 text-2xl font-medium tracking-wide text-white font-cormorant">
                      {data.name}
                    </h5>
                  </Link>
                  <p
                    className="mb-3 font-thin text-xs  tracking-wide "
                    style={{ color: "#FFC9C9" }}
                  >
                    {data.date}
                  </p>
                  <p className="mb-3 font-thin  text-sm tracking-wide text-slate-200 ">
                    {data.detail}
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center uppercase font-semibold text-md text-center text-text_red"
                  >
                    Continue
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BlogPost;
