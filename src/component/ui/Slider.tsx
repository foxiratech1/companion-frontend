// import React, { useEffect, useState } from "react";
// // import { AiFillHeart } from "react-icons/ai";
// // import { CiHeart } from "react-icons/ci";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { capatilizeFirestLetter } from "../utils/helper";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts } from "../../redux/reducers/slices";
// interface SliderProps {
//   sliderImageUrl: { url: string; name: string }[];
//   dataShow: boolean;
//   header: string;
//   blogs: {
//     id: number;
//     name: string;
//     age: number;
//     location: string;
//     rating: number;
//     imageUrl: string;
//     verificationIcon: string;
//     liked: boolean;
//     newbadge: boolean;
//     isFeatured?: boolean;
//   }[];
//   showBg: boolean;
// }

// const Slider: React.FC<SliderProps> = ({
//   sliderImageUrl,
//   dataShow,
//   blogs,
//   showBg,
//   header,
// }) => {
//   const [currentBlogs, setCurrentBlogs] = useState(blogs);
//   const showSlides = dataShow ? 7 : 4;

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: showSlides,
//       slidesToSlide: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 768 },
//       items: 2,
//       slidesToSlide: 3,
//     },
//     mobile: {
//       breakpoint: { max: 767, min: 464 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//   };

//   const toggleLike = (id: number) => {
//     const updatedBlogs = currentBlogs.map((blog) =>
//       blog.id === id ? { ...blog, liked: !blog.liked } : blog
//     );
//     setCurrentBlogs(updatedBlogs);
//   };
//   const { posts, status, error } = useSelector((state) => state.posts);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(
//         fetchPosts({
//           mostview: true,
//           limit: 10,
//         })
//       );
//     }
//   }, [dispatch, status]);
//   console.log("postsposts", posts);
//   console.log(sliderImageUrl.length);

//   return (
//     <div className={`parent py-5 ${showBg && "bg-slider"}`}>
//       {showBg && (
//         <h2 className="text-white text-3xl my-6 text-center font-cormorant ">
//           {capatilizeFirestLetter(header)}
//         </h2>
//       )}
//       <Carousel
//         responsive={responsive}
//         autoPlay={true}
//         swipeable={true}
//         draggable={true}
//         showDots={true}
//         infinite={true}
//         partialVisible={false}
//         arrows={showBg ? false : true}
//         dotListClass={`${
//           dataShow ? "custom-dot-list-style" : "custom-dot-list-style1"
//         }`}
//       >
//         {sliderImageUrl.map((image, index) => {
//           const blog = currentBlogs[index];
//           return (
//             <div className={`${dataShow ? "slider" : ""}`} key={index}>
//               {dataShow ? (
//                 <>
//                   <img src={image.url} alt={image.name} />
//                   <p className="text-white text-center mt-6">{image.name}</p>
//                 </>
//               ) : (
//                 <div className="lg:gap-4 md:gap-0 sm:gap-3 gap-0 p-6 my-5 mb-6">
//                   <section
//                     className="relative isolate flex flex-col justify-end rounded-2xl h-96"
//                     style={{
//                       backgroundImage: `url(${blog?.adsImg})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                     }}
//                   >
//                     <section
//                       key={blog.id}
//                       className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl h-96"
//                       style={{
//                         backgroundImage: `url(http://localhost:3000/${blog?.adsImg})`,
//                         backgroundSize: "initial",
//                         backgroundPosition: "center",
//                       }}
//                     >
//                       <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
// {/* 
//                       {blog.newbadge ? (
//                         <img
//                           src="/src/assets/images/newbadge.png"
//                           className="absolute top-2 left-2 px-2 py-1 rounded-lg"
//                           alt="New Badge"
//                         />
//                       ) : (
//                         <img
//                           src="/src/assets/images/crown.png"
//                           className="absolute top-2 left-2 px-2 py-1 rounded-lg"
//                           alt="Crown Badge"
//                         />
//                       )} */}
//                    {/* {blog.isFeatured && ( */}
//                         <img
//                           src="/src/assets/images/feautred.png"
//                           className="absolute bottom-20 px-2 py-1 rounded-lg"
//                           alt="Featured Badge"
//                           style={{ left: "-8px" }}
//                         />
//                       {/* )}  */}

//                       {/* <span className="absolute top-2 right-2">
//                         {blog.liked ? (
//                           <AiFillHeart
//                             className="bg-red-400/30 rounded-[12pc] w-8 h-8 p-[6px] opacity-90 text-red-700 cursor-pointer"
//                             style={{ border: "1px solid red" }}
//                             onClick={() => toggleLike(blog.id)}
//                           />
//                         ) : (
//                           <CiHeart
//                             className="bg-red-500/60 rounded-[12pc] w-8 h-8 p-[6px] opacity-100 text-white cursor-pointer"
//                             style={{ border: "1px solid red" }}
//                             onClick={() => toggleLike(blog.id)}
//                           />
//                         )}
//                       </span> */}

//                       <div className="relative z-10 p-4">
//                         <h3 className="text-lg font-bold text-white flex items-center">
//                           {blog.name}
//                           <span>
//                             <img
//                               src={blog.verificationIcon}
//                               alt="Verification Icon"
//                               className="ml-2 w-5 h-5"
//                             />
//                           </span>
//                         </h3>
//                         <div className="flex justify-between items-center mt-2">
//                           <p className="text-sm text-gray-300">
//                             {blog.age} years Old, {blog.location}
//                           </p>
//                           <p className="flex items-center text-white">
//                             <span className="mr-1">⭐</span> {blog.rating}
//                           </p>
//                         </div>
//                       </div>
//                     </section>
//                   </section>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </Carousel>
//     </div>
//   );
// };

// export default Slider;





import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { capatilizeFirestLetter } from "../utils/helper";

interface SliderProps {
  sliderImageUrl: { url: string; name: string }[];
  dataShow: boolean;
  header: string;
  blogs: {
    id: number;
    name: string;
    age: number;
    location: string;
    rating: number;
    imageUrl: string;
    verificationIcon: string;
    liked: boolean;
    newbadge: boolean;
    isFeatured?: boolean;
  }[];
  showBg: boolean;
}

const Slider: React.FC<SliderProps> = ({
  sliderImageUrl,
  dataShow,
  blogs,
  showBg,
  header,
}) => {
  const [currentBlogs, setCurrentBlogs] = useState(blogs);
  const showSlides = dataShow ? 7 : 4;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: showSlides,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const toggleLike = (id: number) => {
    const updatedBlogs = currentBlogs.map((blog) =>
      blog.id === id ? { ...blog, liked: !blog.liked } : blog
    );
    setCurrentBlogs(updatedBlogs);
  };

  return (
    <div className={`parent py-5 ${showBg && "bg-slider"}`}>
      {showBg && (
        <h2 className="text-white text-3xl my-6 text-center font-cormorant ">
          {capatilizeFirestLetter(header)}
        </h2>
      )}
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        arrows={showBg ? false : true}
        dotListClass={`${
          dataShow ? "custom-dot-list-style" : "custom-dot-list-style1"
        }`}
      >
        {sliderImageUrl.map((image, index) => {
          const blog = currentBlogs[index];
          return (
            <div className={`${dataShow ? "slider" : ""}`} key={index}>
              {dataShow ? (
                <>
                  <img src={image.url} alt={image.name} />
                  <p className="text-white text-center mt-6">{image.name}</p>
                </>
              ) : (
                <div className="lg:gap-4 md:gap-0 sm:gap-3 p-6 my-5 mb-6">
                  <section
                    className="relative isolate flex flex-col justify-end rounded-2xl h-96"
                    style={{
                      backgroundImage: `url(${blog.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <section
                      key={blog.id}
                      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl h-96"
                      style={{
                        backgroundImage: `url(${blog.imageUrl})`,
                        backgroundSize: "initial",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                      {blog.newbadge ? (
                        <img
                          src="/src/assets/images/newbadge.png"
                          className="absolute top-2 left-2 px-2 py-1 rounded-lg"
                          alt="New Badge"
                        />
                      ) : (
                        <img
                          src="/src/assets/images/crown.png"
                          className="absolute top-2 left-2 px-2 py-1 rounded-lg"
                          alt="Crown Badge"
                        />
                      )}
                      {blog.isFeatured && (
                        <img
                          src="/src/assets/images/feautred.png"
                          className="absolute bottom-20 px-2 py-1 rounded-lg"
                          alt="Featured Badge"
                          style={{ left: "-8px" }}
                        />
                      )}

                      <span className="absolute top-2 right-2">
                        {blog.liked ? (
                          <AiFillHeart
                            className="bg-red-400/30 rounded-[12pc] w-8 h-8 p-[6px] opacity-90 text-red-700 cursor-pointer"
                            style={{ border: "1px solid red" }}
                            onClick={() => toggleLike(blog.id)}
                          />
                        ) : (
                          <CiHeart
                            className="bg-red-500/60 rounded-[12pc] w-8 h-8 p-[6px] opacity-100 text-white cursor-pointer"
                            style={{ border: "1px solid red" }}
                            onClick={() => toggleLike(blog.id)}
                          />
                        )}
                      </span>

                      <div className="relative z-10 p-4">
                        <h3 className="text-lg font-bold text-white flex items-center">
                          {blog.name}
                          <span>
                            <img
                              src={blog.verificationIcon}
                              alt="Verification Icon"
                              className="ml-2 w-5 h-5"
                            />
                          </span>
                        </h3>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-sm text-gray-300">
                            {blog.age} years Old, {blog.location}
                          </p>
                          <p className="flex items-center text-white">
                            <span className="mr-1">⭐</span> {blog.rating}
                          </p>
                        </div>
                      </div>
                    </section>
                  </section>
                </div>
              )}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;

