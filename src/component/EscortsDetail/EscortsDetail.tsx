import EscortSlider from "./EscortSlider";
import Slider from "../ui/Slider";
import blog from "../../jsons/blog.json";
import Description from "./Description";

const EscortsDetail = () => {
  return (
    <>
      <EscortSlider />
      <Description />
      <Slider
        blogs={blog}
        dataShow={false}
        sliderImageUrl={blog.map((blog) => ({
          url: blog.imageUrl,
          name: blog.name,
        }))}
        showBg={true}
        header="Other Recommended"
      />
    </>
  );
};

export default EscortsDetail;
