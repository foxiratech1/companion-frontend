// import React, { useCallback, useRef, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import escortimg from "./assets/Img.png";

// const CommonImageUpload = () => {
//   const [image, setImage] = useState(null);
//   const fileInputRef = useRef(null);

//   const onDrop = useCallback((acceptedFiles: any) => {
//     const file = acceptedFiles[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImage(imageUrl);
//     }
//   }, []);

//   const { getRootProps, getInputProps, open } = useDropzone({
//     onDrop,
//     accept: "image/*",
//     multiple: false,
//     noClick: true,
//   });
//   return (
//     <>
//       <div className="bg-black 2xl:w-[30%] lg:w-[40%] md:w-[60%] sm:w-[80%] w-full mx-auto p-5 rounded-lg border border-[#E0E2E7] border-dashed text-center h-fit">
//         <div
//           {...getRootProps({
//             className: "cursor-pointer focus:outline-none",
//           })}
//         >
//           <input {...getInputProps()} ref={fileInputRef} />
//           {image ? (
//             <img
//               src={image}
//               alt="Uploaded"
//               className="object-cover w-full  rounded-md"
//             />
//           ) : (
//             <>
//               <img
//                 src={escortimg}
//                 alt="placeholder"
//                 className="object-cover w-full rounded-md"
//               />
//               <p className="text-white my-3">
//                 Drag and drop image here, or click to add image
//               </p>
//             </>
//           )}
//         </div>
//         <button
//           className="text-text_red py-2 px-3 text-base border border-[#ff0000] rounded-lg my-2"
//           onClick={() => {
//             fileInputRef?.current?.click();
//           }}
//         >
//           Change Image
//         </button>
//       </div>
//     </>
//   );
// };

// export default CommonImageUpload;

import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import escortimg from "./assets/Img.png";

const CommonImageUpload: React.FC = () => {
  const [image, setImage] = useState<string | null>(null); // State for the image URL
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference for the input element

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]; // Get the first accepted file
    if (file) {
      // Validate the file type to ensure it's an image
      if (file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file); // Create a URL for the image
        setImage(imageUrl); // Set the image URL in state
      } else {
        alert("Only image files are accepted."); // Show an alert if the file isn't an image
      }
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  // Accept only image files 
    multiple: false, // Allow only one file to be uploaded
    noClick: true, // Don't allow file selection by clicking the area (we trigger it with the button)
  });

  // Function to clear the uploaded image
  const clearImage = () => {
    setImage(null); // Reset the image state to null
  };

  return (
    <div className="bg-black 2xl:w-[30%] lg:w-[40%] md:w-[60%] sm:w-[80%] w-full mx-auto p-5 rounded-lg border border-[#E0E2E7] border-dashed text-center h-fit">
      <div {...getRootProps({ className: "cursor-pointer focus:outline-none" })}>
        <input {...getInputProps()} ref={fileInputRef} />
        {image ? (
          <>
            <img src={image} alt="Uploaded" className="object-cover w-full rounded-md" />
            <button
              className="mt-2 text-red-600 py-2 px-3 border border-[#ff0000] rounded-lg"
              onClick={clearImage}
            >
              Remove Image
            </button>
          </>
        ) : (
          <>
            <img src={escortimg} alt="placeholder" className="object-cover w-full rounded-md" />
            <p className="text-white my-3">
              Drag and drop image here, or click to add image
            </p>
          </>
        )}
      </div>
      <button
        className="text-text_red py-2 px-3 text-base border border-[#ff0000] rounded-lg my-2"
        onClick={() => fileInputRef?.current?.click()} // Trigger the file input dialog
      >
        Change Image
      </button>
    </div>
  );
};

export default CommonImageUpload;
