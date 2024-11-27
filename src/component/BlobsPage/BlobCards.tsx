import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


interface Blogs {
  id: number;
  image: string;
  mainDescription: string;
  location: string;
  rating: number;
  additionalImages: string;
  date: string;
  name: string;
  secondDescription: string;
  thirdDescription: string;
  title: string;
}

interface CardsProps {
  showPagination: boolean;
  data: Blogs; 
}

const BlobCards: React.FC<CardsProps> = ({ data }) => {
  console.log("data.additionalImages)data.additionalImages)",data.additionalImages);
  
  const [isShowMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  // Navigate to the blog details page when clicked
  const handelDetailsPage = (id: number) => {
    navigate(`/blogs-details/${id}`);
  };

  return (
    <div>
      <div className="mt-2">
        <div className="relative">
          <img
            src={data.image}
            className="w-[100%] object-cover"
            onClick={() => handelDetailsPage(data.id)}  // Navigate to the details page on image click
            alt=""
          />
          <div className="bg-[#FF0000] text-white py-2 px-8 font-cormorant text-[26px] absolute top-4 right-7">
            Nudity
          </div>
        </div>
        <div className="bg-black p-8">
          <div className="flex gap-5 items-center">
            <img
              src={data.additionalImages}
              alt="post image"
              className="w-[3.5rem] h-[3.5rem] rounded-full"
            />
            <p className="text-white text-[18px] font-cormorant">{data.name}</p>
            <p className="text-white text-[18px] font-cormorant">{data.date}</p>
          </div>
          <h2 className="text-white text-[32px] font-cormorant pt-3 pb-3">
            {data.title}
          </h2>
          <hr />
          <p className="text-white text-[20px] font-cormorant">
            {isShowMore
              ? data.mainDescription
              : `${data.mainDescription?.slice(0, 150)}...`}
            <button
              onClick={() => setShowMore(!isShowMore)}
              className="text-white text-[24px] font-cormorant ml-2 flex gap-3 items-center"
            >
              {isShowMore ? `Read less ` : "Read more "}
              <FaArrowRightLong className="text-[#FF0000]" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlobCards;
