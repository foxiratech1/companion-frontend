// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import Header from "../../ui/Header";
// import UploadFile from "../../ui/UploadFile";
// import axios from "axios";
// import { useState } from "react";

// const UploadDoc = () => {
//   const [files, setFiles] = useState<Array[]>([]); // State to hold files

//   // Handler function to update the files in the parent
//   const handleFileChange = (newFiles: any[]) => {
//     setFiles(newFiles); // Update the state with the selected files
//   };

//   // Formik hook for managing the form state
//   const formik = useFormik({
//     initialValues: {
//       owner: '',
//       documentType: '',
//       comment: '',
//     },
//     validationSchema: Yup.object({
//       owner: Yup.string().required("Owner is required"),
//       documentType: Yup.string().required("Document type is required"),
//       comment: Yup.string().required("Comments are required"),
//     }),
//     onSubmit: async (values) => {
//       const formData = new FormData();

//       // Append the files to FormData
//       files.forEach((file) => {
//         formData.append('document', file); // Backend field name 'document'
//       });

//       // Append other form fields
//       formData.append('documentOwner', values.owner); // Document owner
//       formData.append('documentType', values.documentType); // Document type
//       formData.append('comment', values.comment); // Comments

//       try {
//         const documetUploadApi = "http://localhost:3000/api/vendor/upload-document";
//         const response = await axios.post(documetUploadApi, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         console.log('File upload response:', response.data);
//       } catch (error) {
//         console.error('Error uploading files:', error);
//       }
//     },
//   });

//   return (
//     <>
//       <Header
//         variant={{ size: "3xl", theme: "white", weight: "semiBold" }}
//         className="font-cormorant capitalize"
//       >
//         Upload your documents
//       </Header>

//       <div className="flex lg:flex-row flex-col xl:gap-10 gap-8 w-full mt-10">
//         <UploadFile onFileChange={handleFileChange} />
//         <div className="bg-black lg:w-[65%] w-full xl:p-10 p-6 rounded-lg">
//           <form onSubmit={formik.handleSubmit} className="">
//             {[
//               {
//                 label: "Document Owner",
//                 name: "owner",
//                 type: "text",
//                 placeholder: "Jayvion Simon",
//               },
//               {
//                 label: "Document Type",
//                 name: "documentType",
//                 type: "select",
//                 options: ["Document Type", "Type A", "Type B"],
//               },
//               {
//                 label: "Comments",
//                 name: "comment",
//                 type: "textarea",
//                 placeholder: "Enter your comment",
//               },
//             ].map((field, index) => (
//               <div className="mb-4 relative" key={index}>
//                 <label className="absolute text-white bg-black -top-1 left-4 px-2 font-semibold mb-2">
//                   {field.label}
//                 </label>

//                 {field.type === "text" && (
//                   <input
//                     type="text"
//                     placeholder={field.placeholder}
//                     className={`w-full px-4 py-3 my-2 bg-black text-white rounded-md border ${
//                       formik.errors[field.name] && formik.touched[field.name]
//                         ? "border-red-500"
//                         : "border-gray-600"
//                     }`}
//                     {...formik.getFieldProps(field.name)}
//                   />
//                 )}

//                 {field.type === "select" && (
//                   <select
//                     className={`w-full px-4 py-3 my-2 bg-black text-white rounded-md border ${
//                       formik.errors[field.name] && formik.touched[field.name]
//                         ? "border-red-500"
//                         : "border-gray-600"
//                     }`}
//                     {...formik.getFieldProps(field.name)}
//                   >
//                     {field.options.map((option, i) => (
//                       <option key={i} value={i === 0 ? "" : option}>
//                         {option}
//                       </option>
//                     ))}
//                   </select>
//                 )}

//                 {field.type === "textarea" && (
//                   <textarea
//                     placeholder={field.placeholder}
//                     className={`w-full px-4 py-3 my-2 bg-black text-white rounded-md border ${
//                       formik.errors[field.name] && formik.touched[field.name]
//                         ? "border-red-500"
//                         : "border-gray-600"
//                     }`}
//                     rows={4}
//                     {...formik.getFieldProps(field.name)}
//                   ></textarea>
//                 )}

//                 {formik.errors[field.name] && formik.touched[field.name] && (
//                   <span className="text-red-500 text-sm">{formik.errors[field.name]}</span>
//                 )}
//               </div>
//             ))}

//             <div className="text-right">
//               <button
//                 type="submit"
//                 className="bg-bg_red hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg"
//               >
//                 Save changes
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UploadDoc;
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from "../../ui/Header";
import UploadFile from "../../ui/UploadFile";
import axios from "axios";
import { useState } from "react";

type FieldType = {
  label: string;
  name: string;
  type: 'text' | 'select' | 'textarea';
  placeholder?: string;
  options?: string[]; // Only applicable for 'select' type
};

const UploadDoc = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (newFiles: File[]) => {
    setFiles(newFiles);
  };

  const formik = useFormik({
    initialValues: {
      owner: '',
      documentType: '',
      comment: '',
    },
    validationSchema: Yup.object({
      owner: Yup.string().required("Owner is required"),
      documentType: Yup.string().required("Document type is required"),
      comment: Yup.string().required("Comments are required"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('document', file);
      });

      formData.append('documentOwner', values.owner);
      formData.append('documentType', values.documentType);
      formData.append('comment', values.comment);

      try {
        const documentUploadApi = "http://localhost:3000/api/vendor/upload-document";
        const response = await axios.post(documentUploadApi, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log('File upload response:', response.data);
      } catch (error) {
        console.error('Error uploading files:', error);
      }
    },
  });

  const fields: FieldType[] = [
    {
      label: "Document Owner",
      name: "owner",
      type: "text",
      placeholder: "Jayvion Simon",
    },
    {
      label: "Document Type",
      name: "documentType",
      type: "select",
      options: ["Select Document Type", "Type A", "Type B"], // For select type
    },
    {
      label: "Comments",
      name: "comment",
      type: "textarea",
      placeholder: "Enter your comment",
    },
  ];

  return (
    <>
      <Header
        variant={{ size: "3xl", theme: "white", weight: "semiBold" }}
        className="font-cormorant capitalize"
      >
        Upload your documents
      </Header>

      <div className="flex lg:flex-row flex-col xl:gap-10 gap-8 w-full mt-10">
        <UploadFile onFileChange={handleFileChange} />
        <div className="bg-black lg:w-[65%] w-full xl:p-10 p-6 rounded-lg">
          <form onSubmit={formik.handleSubmit}>
            {fields.map((field, index) => (
              <div className="mb-4 relative" key={index}>
                <label className="absolute text-white bg-black -top-1 left-4 px-2 font-semibold mb-2">
                  {field.label}
                </label>

                {field.type === "text" && (
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-3 my-2 bg-black text-white rounded-md border ${
                      formik.errors[field.name as keyof typeof formik.errors] && formik.touched[field.name as keyof typeof formik.errors]
                        ? "border-red-500"
                        : "border-gray-600"
                    }`}
                    {...formik.getFieldProps(field.name)}
                  />
                )}

                {field.type === "select" && field.options && (
                  <select
                    className={`w-full px-4 py-3 my-2 bg-black text-white rounded-md border ${
                      formik.errors[field.name as keyof typeof formik.errors] && formik.touched[field.name as keyof typeof formik.errors]
                        ? "border-red-500"
                        : "border-gray-600"
                    }`}
                    {...formik.getFieldProps(field.name)}
                  >
                    {field.options.map((option, i) => (
                      <option key={i} value={i === 0 ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}

                {field.type === "textarea" && (
                  <textarea
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-3 my-2 bg-black text-white rounded-md border ${
                      formik.errors[field.name as keyof typeof formik.errors] && formik.touched[field.name as keyof typeof formik.errors]
                        ? "border-red-500"
                        : "border-gray-600"
                    }`}
                    rows={4}
                    {...formik.getFieldProps(field.name)}
                  ></textarea>
                )}

                {formik.errors[field.name as keyof typeof formik.errors] && formik.touched[field.name as keyof typeof formik.errors] && (
                  <span className="text-red-500 text-sm">{formik.errors[field.name as keyof typeof formik.errors]}</span>
                )}
              </div>
            ))}

            <div className="text-right">
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="bg-bg_red hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg"
              >
                {formik.isSubmitting ? "Uploading..." : "Save changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadDoc;

