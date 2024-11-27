



import React, { useRef, useState } from 'react';

import '../../../../../style/styles.css'
import Header from '../../../../ui/Header';

// Typing for the image and video states
interface Image {
  file: File;
  preview: string;
}

interface Video {
  file: File;
  preview: string;
}

interface Step3Props {
  values: any;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  setStep: (step: number) => void;
}

const Step3: React.FC<Step3Props> = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [video, setVideo] = useState<Video | null>(null);

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const newImages = selectedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      // Check if total images will exceed 3
      if (images.length + newImages.length > 3) {
        alert("You can only upload a maximum of 3 images.");
      } else {
        setImages((prevImages) => [...prevImages, ...newImages]);
      }
    }
  };

  // Handle video selection
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setVideo({
        file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  // Handle removing an image
  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Handle removing the video
  const removeVideo = () => {
    setVideo(null);
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleAddButtonClick = () => {
    fileInputRef?.current?.click();
  };
  return (
    <div>
      <h2>Step 3: Address Information</h2>
      <Header
        variant={{ size: "2xl", theme: "white", weight: "normal" }}
        className="font-cormorant uppercase mb-6"
      >
        Media
      </Header>

      {/* Image Section */}
      <div className="mb-6">
        <h2 className="text-white font-bold mb-3 font-albert text-xl">Photo</h2>
        <div className="border-2 border-dashed border-gray-500 p-10 rounded-md">
          {images.length > 0 && (
            <div className="mt-4 flex gap-5">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image.preview}
                    alt="uploaded"
                    className="w-28 h-28 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Image Input Section */}
          <label className="block cursor-pointer">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
              disabled={images.length >= 3}
              ref={fileInputRef} // Attach the ref to the file input
            />
            <p className="p-4 rounded-lg text-center text-gray-400">
              Drag and drop image here, or click add image (upload multiple images up to 10)
            </p>
            <div className="flex flex-col items-center">
              <button
                className="text-[#E30077] border border-[#ff0000] px-3 py-2 rounded-md"
                onClick={handleAddButtonClick} // Trigger input click on button click
              >
                Add Image
              </button>
            </div>
          </label>
        </div>
      </div>

      {/* Video Section */}
      <div>
        <h2 className="text-white font-albert font-bold text-xl mb-3">Video</h2>
        <label className="block cursor-pointer border-2 border-dashed border-gray-500 rounded-md p-10">
          {video && (
            <div className="relative mt-4 w-40">
              <video
                src={video.preview}
                controls
                className="w-40 h-40 object-cover rounded-lg"
              />
              <button
                onClick={removeVideo}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
              >
                X
              </button>
            </div>
          )}

          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="hidden"
          />
          <div className="rounded-lg text-center text-gray-400">
            Drag and drop a video here, or click to add a video (max 40MB, 1 minute)
          </div>
        </label>
      </div>
    </div>
  );
};

export default Step3;
