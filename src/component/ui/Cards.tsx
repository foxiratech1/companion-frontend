// import React, { useEffect, useState } from "react";
// import { AiFillHeart } from "react-icons/ai";
// import { CiHeart } from "react-icons/ci";
// import Pagination from "./Pagination";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts } from "../../redux/reducers/slices";

// interface Blogs {
//   id: number;
//   name: string;
//   age: number;
//   location: string;
//   rating: number;
//   imageUrl: string;
//   verificationIcon: string;
//   liked: boolean;
//   newbadge: boolean;
//   isFeatured?: boolean;
//   isVerified?: boolean;
// }
// interface CardsProps {
//   showPagination: boolean;
//   blogsData: Blogs[];
// }

// const Cards: React.FC<CardsProps> = ({ showPagination, blogsData }) => {
//   const [currentBlog, setCurrentBlog] = useState<Blogs[]>(
//     blogsData.slice(0, 8)
//   );

//   const handleCurrentBlogChange = (newCurrentBlogs: Blogs[]) => {
//     setCurrentBlog(newCurrentBlogs);
//   };

//   const toggleLike = (id: number) => {
//     const updatedBlogs = currentBlog.map((blog) =>
//       blog.id === id ? { ...blog, liked: !blog.liked } : blog
//     );
//     setCurrentBlog(updatedBlogs);
//   };
//   const { posts, status, error } = useSelector((state) => state.posts);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(
//         fetchPosts({
//           persontype: "escorts",
//           limit: 10,
//         })
//       );
//     }
//   }, [dispatch, status]);
//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-10 gap-4 sm:p-6 p-3 my-5 mb-6">
//         {currentBlog.map((blog) => (
//           <section
//             key={blog.id}
//             className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl h-96 bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url(http://localhost:3000/${blog?.adsImg})`,
//             }}
//           >
//             <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
//             {blog.newbadge ? (
//               <img
//                 src="/src/assets/images/newbadge.png"
//                 className="absolute top-2 left-2 px-2 py-1 rounded-lg"
//                 alt="New Badge"
//               />
//             ) : (
//               <img
//                 src="/src/assets/images/crown.png"
//                 className="absolute top-2 left-2 px-2 py-1 rounded-lg"
//                 alt="Crown Badge"
//               />
//             )}
//             {blog.isFeatured && (
//               <img
//                 src="/src/assets/images/feautred.png"
//                 className="absolute bottom-20 px-2 py-1 rounded-lg"
//                 alt="Featured Badge"
//                 style={{ left: "-8px" }}
//               />
//             )}

//             <span className="absolute top-2 right-2">
//               {blog.liked ? (
//                 <AiFillHeart
//                   className="bg-red-400/30 rounded-[12pc] w-8 h-8 p-[6px] opacity-90 text-red-700 cursor-pointer"
//                   style={{ border: "1px solid red" }}
//                   onClick={() => toggleLike(blog.id)}
//                 />
//               ) : (
//                 <CiHeart
//                   className="bg-red-500/60 rounded-[12pc] w-8 h-8 p-[6px] opacity-100 text-white cursor-pointer"
//                   style={{ border: "1px solid red" }}
//                   onClick={() => toggleLike(blog.id)}
//                 />
//               )}
//             </span>

//             <div className="relative z-10 p-4">
//               <h3 className="text-lg font-bold text-white flex items-center">
//                 {blog.name}
//                 <span>
//                   <img
//                     src={blog.verificationIcon}
//                     alt="Verification Icon"
//                     className="ml-2 w-5 h-5"
//                   />
//                 </span>
//               </h3>
//               <div className="flex justify-between items-center mt-2">
//                 <p className="text-sm text-gray-300">
//                   {blog.age} years Old, {blog.location}
//                 </p>
//                 <p className="flex items-center text-white">
//                   <span className="mr-1">⭐</span> {blog.rating}
//                 </p>
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>
//       {showPagination && (
//         <Pagination
//           blogs={blogsData}
//           onCurrentArticlesChange={handleCurrentBlogChange}
//         />
//       )}
//     </div>
//   );
// };

// export default Cards;


import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Pagination from "./Pagination";

interface Blogs {
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
  isVerified?: boolean;
}
interface CardsProps {
  showPagination: boolean;
  blogsData: Blogs[];
}

const Cards: React.FC<CardsProps> = ({ showPagination, blogsData }) => {
  const [currentBlog, setCurrentBlog] = useState<Blogs[]>(
    blogsData.slice(0, 8)
  );

  const handleCurrentBlogChange = (newCurrentBlogs: Blogs[]) => {
    setCurrentBlog(newCurrentBlogs);
  };

  const toggleLike = (id: number) => {
    const updatedBlogs = currentBlog.map((blog) =>
      blog.id === id ? { ...blog, liked: !blog.liked } : blog
    );
    setCurrentBlog(updatedBlogs);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-10 gap-4 sm:p-6 p-3 my-5 mb-6">
        {currentBlog.map((blog) => (
          <section
            key={blog.id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl h-96 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${blog.imageUrl})`,
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
        ))}
      </div>
      {showPagination && (
        <Pagination
          blogs={blogsData}
          onCurrentArticlesChange={handleCurrentBlogChange}
        />
      )}
    </div>
  );
};

export default Cards;
