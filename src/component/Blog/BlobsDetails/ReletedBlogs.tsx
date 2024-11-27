import Header from "../../ui/Header";
import profile from "../../../assets/images/profile.png";
import read_icon from "../../../assets/images/read_more.png";
import image from "../../../assets/images/FeatureImage.png";
import image2 from "../../../assets/images/FeatureImage2.png";
const ReletedBlogs = () => {
  const related_post = [
    {
      big_img: image,
      profile: profile,
      name: "Julie Christie",
      date: "October 17, 2021",
      title: "text of the printing and typesetting industry.",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      read_btn: "Read More ",
      read_icon: read_icon,
    },
    {
      big_img: image2,
      profile: profile,
      name: "Julie Christie",
      date: "October 17, 2021",
      title: "text of the printing and typesetting industry.",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      read_btn: "Read More ",
      read_icon: read_icon,
    },
    {
      big_img: image,
      profile: profile,
      name: "Julie Christie",
      date: "October 17, 2021",
      title: "text of the printing and typesetting industry.",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      read_btn: "Read More ",
      read_icon: read_icon,
    },
  ];

  return (
    <div className="container mx-auto sm:px-6 px-3 my-10">
      <Header variant={{ size: "3xl", theme: "white", weight: "semiBold" }}>
        Related Blogs
      </Header>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-5">
        {related_post.map((post, index) => (
          <div key={index} className="relative rounded-lg">
            <img src={post.big_img} alt="Blog Image" className="w-full" />

            <button className="absolute text-lg top-10 right-5 font-rufina bg-[#FF0000] text-white font-bold px-8 py-2">
              Nudity
            </button>

            <div className="p-4 bg-black">
              <div className="flex gap-2 items-center mb-2">
                <img
                  src={post.profile}
                  alt="Profile"
                  className="w-20 rounded-full lg:mr-2"
                />

                <p className="font-semibold text-white text-base">
                  {post.name}
                </p>
                <p className=" text-base text-white">{post.date}</p>
              </div>

              <h3 className="text-white lg:text-3xl md:text-2xl text-xl font-semibold mb-2 font-garamond">
                {post.title}
              </h3>

              <p className="text-gray-400 mb-4">{post.para}</p>

              <button className="text-white font-bold text-xl flex gap-3 items-center">
                {post.read_btn}
                <img
                  src={post.read_icon}
                  alt="Read More Icon"
                  className="mt-2"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReletedBlogs;
