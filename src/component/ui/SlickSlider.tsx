import React, { ReactNode } from "react";
import Slider, { Settings } from "react-slick";

interface SlickSliderProps {
  settings?: Settings;
  children: ReactNode;
}

const SlickSlider: React.FC<SlickSliderProps> = ({ settings={}, children }) => {
  const defaultSettings: Settings = {
    dots: true,
    autoplay: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
        },
      },
    ],
  };

  const mergedSettings = { ...defaultSettings, ...settings };

  return (
    <div>
      <Slider {...mergedSettings}>{children}</Slider>
    </div>
  );
};

export default SlickSlider;
