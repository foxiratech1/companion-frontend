// import Header from "../../ui/Header";
// import P from "../../ui/P";
// import dot from "../../../assets/images/dot.png";
// import Button from "../../ui/Button";
// import search from "../../../assets/images/Icon_search.png";

// interface CategoryListProps {
//   category: any;
//   achieve: any;
//   recent: any;
//   tags: any;
// }

// const CategorySection: React.FC<CategoryListProps> = ({
//   category,
//   achieve,
//   recent,
//   tags,
// }) => {
//   return (
//     <>
//       <div className="border-b flex justify-between items-center mb-20">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full focus:outline-none focus:ring-none bg-transparent border-none placeholder:text-white placeholder:text-2xl text-albert text-white outline-none"
//         />
//         <img src={search} alt="Search icon" className="cursor-pointer" />
//       </div>

//       <>
//         <Header
//           variant={{ size: "4xl", theme: "white", weight: "bold" }}
//           className="border-b border-dashed pb-3 mb-10 font-garamond"
//         >
//           Categories
//         </Header>

//         <>
//           {category.map((item: any) => (
//             <div className="flex justify-between items-center my-3 font-albert">
//               <P variant={{ size: "md", theme: "white", weight: "normal" }}>
//                 {item.category}
//               </P>

//               <P variant={{ size: "md", theme: "white", weight: "normal" }}>
//                 {item.number}
//               </P>
//             </div>
//           ))}
//         </>
//       </>

//       <>
//         <Header
//           variant={{ size: "4xl", theme: "white", weight: "bold" }}
//           className="border-b border-dashed pb-3 my-10 font-garamond"
//         >
//           Archives
//         </Header>

//         {achieve.map((item: any) => (
//           <div className="flex justify-between items-center my-3 font-albert">
//             <P variant={{ size: "md", theme: "white", weight: "normal" }}>
//               {item.date}
//             </P>

//             <P variant={{ size: "md", theme: "white", weight: "normal" }}>
//               {item.number}
//             </P>
//           </div>
//         ))}
//       </>

//       <>
//         <Header
//           variant={{ size: "4xl", theme: "white", weight: "bold" }}
//           className="border-b border-dashed pb-3 my-10 font-garamond"
//         >
//           Recent Posted
//         </Header>

//         {recent.map((item: any) => (
//           <div className="flex lg:justify-between items-center gap-3 my-3 font-albert">
//             <img src={item.image} alt="image" />
//             <div>
//               <Header
//                 variant={{ size: "2xl", theme: "white", weight: "semiBold" }}
//                 className="font-garamond"
//               >
//                 {item.title}
//               </Header>
//               <div className="flex items-center gap-5">
//                 <P
//                   variant={{ size: "md", theme: "white", weight: "semiBold" }}
//                   className="text-[#3E3E3E]"
//                 >
//                   {item.name}
//                 </P>
//                 <img src={dot} alt="dotsss" />
//                 <P
//                   variant={{ size: "md", theme: "white", weight: "semiBold" }}
//                   className="text-[#3E3E3E]"
//                 >
//                   {item.date}
//                 </P>
//               </div>
//             </div>
//           </div>
//         ))}
//       </>

//       <>
//         <Header
//           variant={{ size: "4xl", theme: "white", weight: "bold" }}
//           className="border-b border-dashed pb-3 my-10 font-garamond"
//         >
//           Tags
//         </Header>
//         {tags.map((tag: any) => (
//           <>
//             <Button
//               variant={{
//                 fontSize: "base",
//                 theme: "white",
//                 fontWeight: "500",
//               }}
//               className="border border-white text-white !px-7 font-albert m-2"
//             >
//               {tag.tag}
//             </Button>
//           </>
//         ))}
//       </>
//     </>
//   );
// };

// export default CategorySection;
