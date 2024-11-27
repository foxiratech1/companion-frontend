// import  { useState, useEffect, startTransition } from "react";
// import { useParams } from "react-router-dom";
// import blobsData  from "../../../jsons/blobPage";
// import pastor from "../../../assets/images/blog-details-post.png";
// import Header from "../../ui/Header";
// import P from "../../ui/P";

// interface BlogDetail {
//   id: string;
//   basicDetails: {
//     profile: string | undefined;
//     id: string;
//     image: string;
//     name: string;
//     date: string;
//     title: string;
//     mainDescription: string;
//     secondDescription: string;
//     highlights: string;
//     thirdDescription: string;
//     additionalImages: string[];
//   };
// }

// const BlobsDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const [blogDetail, setBlogDetail] = useState<BlogDetail | null>(null);

//   useEffect(() => {
//     startTransition(() => {
//       // Find the blob with the matching id
//       const detail = blobsData.find((blob) => blob.id === id);
//       setBlogDetail(detail || null); // Set to null if not found
//     });
//   }, [id]);

//   if (!blogDetail) {
//     return <div>Loading...</div>;
//   }

//   const basicDetails = blogDetail.basicDetails;

//   return (
//     <div className="relative overflow-x-hidden">
//       <img src={pastor} alt="blob image" className="w-[100%] object-cover" />
//       <div className="absolute top-[30%] bottom-[70%] items-start flex flex-col justify-start md:w-[50%]">
//         <div className="container mx-auto sm:px-6 px-3">
//           <button className="text-white py-3 px-7 mb-4 border border-white font-cormorant text-3xl">
//             Fashion
//           </button>
//           <Header
//             variant={{ theme: "white", weight: "semiBold" }}
//             className="font-cormorant leading-tight 2xl:text-6xl"
//           >
//             {basicDetails.title || "No Title"}
//           </Header>
//           <div className="flex items-center gap-4">
//             <img src={basicDetails.profile} alt="profile image" />
//             <P
//               variant={{ theme: "white", weight: "light" }}
//               className="text-xl"
//             >
//               {basicDetails.name}
//             </P>
//             <P
//               variant={{ theme: "white", weight: "light" }}
//               className="text-xl"
//             >
//               {basicDetails.date}
//             </P>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto sm:px-6 px-3">
//         <P variant={{ size: "base", theme: "white", weight: "normal" }}>
//           {basicDetails.mainDescription}
//         </P>
//       </div>
//     </div>
//   );
// };

// export default BlobsDetails;
