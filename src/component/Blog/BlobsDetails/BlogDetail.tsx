

// import { startTransition, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import  blobsData  from "../../../jsons/blobPage";// Ensure this is exported properly
// import Header from "../../ui/Header";
// import pastor from "../../../assets/images/blog-details-post.png";
// import P from "../../ui/P";
// import CategorySection from "./CategorySection";
// import SlickSlider from "../../ui/SlickSlider";
// import slide1 from "../../../assets/images/slide1.png";
// import slide2 from "../../../assets/images/slide2.png";
// import { SampleNextArrow, SamplePrevArrow } from "./SlickArrow";
// import ReletedBlogs from "./ReletedBlogs";

// interface Tag {
//   tag: string;
// }

// interface BlogDetail {
//   id: string;
//   basicDetails: {
//     id: string;
//     image: string;
//     profile: string;
//     profileTitle: string;
//     name: string;
//     date: string;
//     title: string;
//     tags: Tag[];
//     mainDescription: string;
//     secondDescription: string;
//     highlights: string;
//     thirdDescription: string;
//     additionalImages: any;
//   };
//   categories: {
//     category: string;
//     number: number;
//   };
//   achievements: {
//     date: Date;
//     number: number;
//   };
//   recentPosts: {
//     title: string;
//     date: Date;
//     image: string;
//     name: string;
//   };
// }

// const BlogDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const [blogDetail, setBlogDetail] = useState<BlogDetail | null>(null);

//   useEffect(() => {
//     startTransition(() => {
//       const detail = blobsData.find((blob:any) => blob.id === id);
//       setBlogDetail(detail || null); // Set it to null if no match is found
//     });
//   }, [id]);

//   if (!blogDetail) {
//     return <div>Blog not found or loading...</div>;
//   }

//   const basic_detail = blogDetail.basicDetails;
//   const { tags } = basic_detail;
//   const category = blogDetail.categories;
//   const achieve = blogDetail.achievements;
//   const recent = blogDetail.recentPosts;

//   const slide_data = [
//     {
//       slide: slide1,
//       title:
//         "previous post has roots in a piece of classical Latin literature from 45 BC, making it",
//     },
//     {
//       slide: slide2,
//       title: "has roots in a piece of classical Latin literature from ",
//     },
//     {
//       slide: slide2,
//       title:
//         "previous post has roots in a piece of classical Latin literature from 45 BC, making it",
//     },
//     {
//       slide: slide1,
//       title: "has roots in a piece of classical Latin literature from",
//     },
//   ];

//   const customSettings = {
//     slidesToShow: 2,
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     arrow: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };

//   return (
//     <div>
//       <div className="relative overflow-x-hidden">
//         <img src={pastor} alt="blob image" className="w-[100%] object-cover" />
//         <div className="absolute 2xl:top-[30%] xl:top-[20%] top-[15%] bottom-[50%] items-start flex flex-col justify-start 2xl:w-[40%] xl:w-[50%] lg:w-[70%] w-full md:text-left text-center">
//           <div className="container mx-auto sm:px-6 px-3">
//             <button className="text-white sm:py-3 py-2 px-5 sm:px-7 2xl:mb-4 mb-2 border border-white font-cormorant text-3xl">
//               Fashion
//             </button>
//             <Header
//               variant={{ theme: "white", weight: "semiBold" }}
//               className="font-cormorant leading-tight lg:text-6xl sm:text-5xl text-2xl"
//             >
//               {basic_detail.title || "No Title"}
//             </Header>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto sm:px-6 px-3 flex lg:flex-row flex-col lg:gap-10 gap-5 2xl:my-16 my-10">
//         <div className="lg:w-[70%] w-full">
//           <P variant={{ size: "md", theme: "white", weight: "normal" }}>
//             {basic_detail.mainDescription}
//           </P>

//           <div className="flex xl:gap-10 gap-5 space-y-4 my-8">
//             <img
//               src={basic_detail.additionalImages[0].addimg1}
//               alt="image1"
//               className="object-cover w-[60%]"
//             />
//             <div className="flex flex-col xl:gap-10 gap-5">
//               <img
//                 src={basic_detail.additionalImages[1].addimg1}
//                 alt="image2"
//                 className="object-cover"
//               />
//               <img
//                 src={basic_detail.additionalImages[2].addimg1}
//                 alt="image3"
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           <P variant={{ size: "md", theme: "white", weight: "normal" }}>
//             {basic_detail.secondDescription}
//           </P>
//           <Header
//             variant={{ size: "3xl", weight: "semiBold", theme: "red" }}
//             className="font-garamond my-7 "
//           >
//             {basic_detail.highlights}
//           </Header>
//           <P variant={{ size: "md", theme: "white", weight: "normal" }}>
//             {basic_detail.thirdDescription}
//           </P>
//         </div>
//         <div className="lg:w-[30%] w-full">
//           <CategorySection category={category} achieve={achieve} recent={recent} tags={undefined} />
//         </div>
//       </div>

//       <SlickSlider slides={slide_data} customSettings={customSettings} />
//       <ReletedBlogs />
//     </div>
//   );
// };

// export default BlogDetail;
