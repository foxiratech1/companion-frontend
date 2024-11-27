import React, {  useState } from "react";
import {
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";
import Slider from "../component/ui/Slider";
import selectedEcortsData from "../jsons/selectedEcortsData.json";
import Cards from "../component/ui/Cards";
import { Link } from "react-router-dom";
import BlogPost from "../component/ui/BlogPost";
import blogPost from "../jsons/blogPost.json";
import country from "../jsons/country.json";
import "../style/styles.css";
// import { getCreateAdsApi } from "../utils/api";

interface Blog {
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
}

const HomePage: React.FC = () => {
  const [blogs] = useState<Blog[]>([
    {
      id: 1,
      name: "Brandie",
      location: "New York",
      age: 23,
      rating: 4.5,
      imageUrl: "/src/assets/images/esportimg.png",
      verificationIcon: "/src/assets/images/verification.png",
      isFeatured: true,
      liked: false,
      newbadge: true,
    },
    {
      id: 2,
      name: "Julie",

      location: "Los Angeles",
      age: 23,
      rating: 4.7,
      imageUrl: "/src/assets/images/card1.png",
      verificationIcon: "/src/assets/images/verification.png",
      liked: true,
      newbadge: false,
    },
    {
      id: 3,
      name: "Priscilla",
      location: "Los Angeles",
      age: 23,
      rating: 4.7,
      imageUrl: "/src/assets/images/Link.png",
      verificationIcon: "/src/assets/images/verification.png",
      isFeatured: true,

      liked: true,
      newbadge: true,
    },
    {
      id: 4,
      name: "Esther",
      location: "Los Angeles",
      age: 23,
      rating: 4.7,
      imageUrl: "/src/assets/images/cardimg3.png",
      verificationIcon: "/src/assets/images/verification.png",
      liked: false,
      newbadge: false,
    },
    {
      id: 5,
      name: "Arlene",
      location: "Los Angeles",
      age: 23,
      rating: 4.7,
      imageUrl: "/src/assets/images/cardimg4.png",
      verificationIcon: "/src/assets/images/verification.png",
      isFeatured: true,
      liked: true,
      newbadge: false,
    },
    {
      id: 6,
      name: "Bessie",
      location: "Los Angeles",
      age: 23,
      rating: 4.7,
      imageUrl: "/src/assets/images/cardimg5.png",
      verificationIcon: "/src/assets/images/verification.png",
      liked: true,
      newbadge: false,
    },
    {
      id: 7,
      name: "Irma",
      location: "Los Angeles",
      age: 23,
      rating: 4.7,
      imageUrl: "/src/assets/images/card1.png",
      verificationIcon: "/src/assets/images/verification.png",
      isFeatured: true,
      liked: true,
      newbadge: false,
    },
    {
      id: 8,
      name: "Alice",
      location: "Kristin",
      age: 23,
      rating: 4.7,
      imageUrl: "/src/assets/images/esportimg.png",
      verificationIcon: "/src/assets/images/verification.png",
      isFeatured: true,
      liked: true,
      newbadge: false,
    },
    {
      id: 9,
      name: "Alice",
      location: "Gladys",
      age: 23,
      rating: 4.7,
      imageUrl: "/src/assets/images/cardimg4.png",
      verificationIcon: "/src/assets/images/verification.png",
      liked: true,
      newbadge: false,
    },
    {
      id: 10,
      name: "Alice",
      location: "Los Angeles",
      age: 23,
      rating: 4.7,
      imageUrl: "/src/assets/images/cardimg5.png",
      isFeatured: true,
      verificationIcon: "/src/assets/images/verification.png",
      liked: true,
      newbadge: false,
    },
  ]);
  const [expandedLocation1, setExpandedLocation1] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleLocation1 = (id: any) => {
    setExpandedLocation1(expandedLocation1 === id ? null : id);
  };

  const toggleDropdown1 = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const getAdsList = async () => {
  //   try {
  //     const response = await axios.get(getCreateAdsApi);
  //     console.log("responseresponse", response);
  //   } catch (error) {
  //     console.error("Registration error:", error);
  //   }
  // };
  // useEffect(() => {
  //   getAdsList();
  // }, []);
  return (
    <>
      <div className="p-6 bg-home bg-cover bg-center py-12  lg:px-28 md:px-8 sm:px-5">
        <h2 className="text-3xl font-thin mb-4 text-white text-center font-cormorant">
          Select a location below to see beautiful Escorts across the Companion
          network!
        </h2>
        <h2
          className="text-2xl font-thin mb-4 font-cormorant text-text_red cursor-pointer inline-flex w-full justify-between"
          style={{
            borderBottom: "1.4px solid white",
          }}
          onClick={toggleDropdown1}
        >
          United States
          {isDropdownOpen ? (
            <IoIosArrowUp className="text-text_red ml-3" />
          ) : (
            <IoIosArrowDown className="text-text_red ml-3" />
          )}
        </h2>
        {isDropdownOpen && (
          <div className="container mx-auto grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 col-2 gap-4">
            {country.countries.map((location) => (
              <div key={location.id} className="mb-4">
                <div
                  className="flex items-center cursor-pointer text-white hover:text-gray-300"
                  onClick={() => toggleLocation1(location.id)}
                >
                  <span>{location.name}</span>
                  {location.locations &&
                    location.locations.length > 0 &&
                    (expandedLocation1 === location.id ? (
                      <IoIosArrowUp className="text-gray-400 ml-3" />
                    ) : (
                      <IoIosArrowForward className="text-gray-400 ml-3" />
                    ))}
                </div>

                {expandedLocation1 === location.id && (
                  <ul className="ml-8 mt-1 list-none list-disc text-gray-300">
                    {location?.locations?.map((item) =>
                      item.sublocations.map((sublocation) => (
                        <li key={sublocation.id}>{sublocation.name}</li>
                      ))
                    )}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 ">
          <div>
            <form className="">
              <div className="mb-4">
                <select
                  id="countries"
                  className="block w-full py-2.5 bg-transparent text-white border-0 border-b text-sm rounded-0  cssselectcountry"
                >
                  <option selected disabled className="text-md">
                    Choose a country
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </form>
          </div>
          <div>
            <form className="">
              <div className="mb-4">
                <select
                  id="countries"
                  className="block w-full p-2.5 bg-transparent text-white border-0 border-b text-sm rounded-0 focus:ring-0 focus:outline-none cssselectcountry"
                >
                  <option selected disabled className="">
                    Choose a country
                  </option>
                  <option value="IT">Italy</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </form>
          </div>
          <div>
            <form className="">
              <div className="mb-4">
                <select
                  id="countries"
                  className="block w-full p-2.5 bg-transparent text-white border-0 border-b text-sm rounded-0 focus:ring-0 focus:outline-none cssselectcountry"
                >
                  <option selected disabled className="">
                    Choose a country
                  </option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Slider
        blogs={blogs}
        dataShow={false}
        sliderImageUrl={blogs.map((blog) => ({
          url: blog.imageUrl,
          name: blog.name,
        }))}
        showBg={true}
        header="Top picks of he month"
      />
      <h2 className="text-white  text-3xl my-9 px-9 text-start font-cormorant">
        Meet our selection of escorts
      </h2>
      <Cards showPagination={false} blogsData={selectedEcortsData} />
      <div className="flex">
        <Link
          to="/escorts"
          className="text-white flex mx-auto uppercase rounded-3xl border-2 border-white-500 py-2 px-8 mb-7 hover:border-red-600 hover:bg-red-600"
        >
          View all ESCORTS
        </Link>
      </div>
      <BlogPost blogPost={blogPost} dataShow={true} />
    </>
  );
};

export default HomePage;


