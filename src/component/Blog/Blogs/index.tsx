// import React, { useState } from "react";
// // import blobimg from "../../assets/images/blob.png";
// import blobimg from "../../../assets/images/blob.png";
// import  blobsData  from "../../../jsons/blobPage";
// import BlobCards from "../../BlobsPage/BlobCards";
// import Pagination from "../../ui/Pagination";

// const Blogs: React.FC = () => {
//   const [currentBlog, setCurrentBlog] = useState<Blogs[]>(
//     blobsData.slice(0, 6)
//   );

//   const handleCurrentBlogChange = (newCurrentBlogs: Blogs[]) => {
//     setCurrentBlog(newCurrentBlogs);
//   };

//   return (
//     <div className="">
//       <div className="relative overflow-x-hidden">
//         <img
//           src={blobimg}
//           alt="blob image"
//           className="w-[100%] object-cover "
//         />
//         <div className="absolute top-[50%] bottom-[50%] items-center flex flex-col justify-center">
//           <h2 className="text-center text-white text-[30px] md:text-[60px] font-cormorant">
//             Blogs
//           </h2>
//           <p className="text-white text-[16px] md:text-[24px] w-[70%] mx-auto items-center justify-center text-center font-cormorant">
//             ontrary to popular belief, Lorem Ipsum is not simply random text. It
//             has roots in a piece of classical Latin literature from 45 BC,
//             making it over 2000 years old.
//           </p>
//         </div>
//       </div>
//       <div className="grid md:grid-cols-2 md:w-[80%] mx-auto gap-[4rem] gap-y-[4rem]  mt-[4rem]">
//         {currentBlog.map((val, index) => (
//           <div key={index}>
//             <BlobCards
//               showPagination={true}
//               blogsData={val.basicDetails}
//               data={blobsData}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="mt-[3rem] mb-[2rem]">
//         <Pagination
//           blogs={blobsData}
//           onCurrentArticlesChange={handleCurrentBlogChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default Blogs;
