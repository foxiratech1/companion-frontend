import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import uploadIcon from "../Dashboard/assets/docUpload.png";

interface FileUploadProps {
  onFileChange: (files: any[]) => void; // Function passed from the parent
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange }) => {
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);

  const onDrop = useCallback((acceptedFiles: any[]) => {
    // Add preview URLs to each file
    const filesWithPreview = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setSelectedFiles(filesWithPreview); // Update local state with selected files
    onFileChange(filesWithPreview); // Notify parent with the new files
  }, [onFileChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`bg-black px-10 py-20 h-fit text-center border border-dashed border-gray-500 rounded-lg ${
        isDragActive ? 'bg-gray-800' : 'bg-black'
      }`}
    >
      <input {...getInputProps()} />

      {selectedFiles.length > 0 && selectedFiles[0].type.startsWith('image/') ? (
        <img
          src={selectedFiles[0].preview}
          alt={selectedFiles[0].name}
          className="mx-auto mt-2 w-40 h-40 object-cover"
        />
      ) : (
        <img src={uploadIcon} alt="upload doc" className="mx-auto mb-4" />
      )}

      <h2 className="text-2xl text-white font-semibold font-albert text-center">
        Drop or select file
      </h2>

      <p className="text-base text-white font-normal">
        {isDragActive ? (
          <span className="text-gray-300">Drop the files here...</span>
        ) : (
          <>
            Drop files here or click to{' '}
            <span className="text-text_red cursor-pointer">browse</span> through
            your machine.
          </>
        )}
      </p>

      {selectedFiles.length > 0 && !selectedFiles[0].type.startsWith('image/') && (
        <div className="mt-6 space-y-4 text-white">
          {selectedFiles.map((file, index) => (
            <p key={index} className="truncate">
              {file.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;


// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import upload from "../Dashboard/assets/docUpload.png"; // Replace with your actual upload icon path

// const FileUpload = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const onDrop = useCallback((acceptedFiles) => {
//     setSelectedFiles(
//       acceptedFiles.map((file) =>
//         Object.assign(file, {
//           preview: URL.createObjectURL(file),
//         })
//       )
//     );
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   return (
//     <div
//       {...getRootProps()}
//       className={`bg-black px-10 py-20 h-fit text-center border border-dashed border-gray-500 rounded-lg ${
//         isDragActive ? "bg-gray-800" : "bg-black"
//       }`}
//     >
//       <input {...getInputProps()} />
//       <img src={upload} alt="upload doc" className="mx-auto mb-4" />

//       {/* Drop or select file Header */}
//       <h2 className="text-2xl text-white font-semibold font-albert text-center">
//         Drop or select file
//       </h2>

//       {/* Description Text */}
//       <p className="text-base text-white font-normal">
//         {isDragActive ? (
//           <span className="text-gray-300">Drop the files here...</span>
//         ) : (
//           <>
//             Drop files here or click to{" "}
//             <span className="text-text_red cursor-pointer">browse</span> through
//             your machine.
//           </>
//         )}
//       </p>

//       {/* Preview or List of Uploaded Files */}
//       {selectedFiles.length > 0 && (
//         <div className="mt-6 space-y-4">
//           {selectedFiles.map((file, index) => (
//             <div key={index} className="text-white text-left">
//               {/* If the file is an image, show the preview */}
//               {file.type.startsWith("image/") ? (
//                 <img
//                   src={file.preview}
//                   alt={file.name}
//                   className="mx-auto mt-2 w-40 h-40 object-cover"
//                 />
//               ) : (
//                 <p className="truncate">{file.name}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUpload;
