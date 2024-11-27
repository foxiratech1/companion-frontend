import React from "react";
import Button from "./Button";
import Header from "./Header";

interface LocationProps {
  heading: string;
}

const Location: React.FC<LocationProps> = ({ heading }: any) => {
  const locationData = [
    {
      id: 1,
      location: "Brandie",
    },
    {
      id: 2,
      location: "North East England",
    },
    {
      id: 3,
      location: "greater london",
    },
    {
      id: 4,
      location: "Wales",
    },
    {
      id: 5,
      location: "East of England",
    },
    {
      id: 6,
      location: "east midlands",
    },
    {
      id: 7,
      location: "East of England",
    },
    {
      id: 8,
      location: "Wales",
    },
    {
      id: 9,
      location: "east midlands",
    },
    {
      id: 10,
      location: "North East England",
    },
    {
      id: 11,
      location: "east midlands",
    },
    {
      id: 12,
      location: "East of England",
    },
    {
      id: 13,
      location: "Wales",
    },
    {
      id: 14,
      location: "east midlands",
    },
    {
      id: 15,
      location: "east midlands",
    },
    {
      id: 16,
      location: "East of England",
    },
    {
      id: 17,
      location: "Wales",
    },
    {
      id: 18,
      location: "east midlands",
    },
    {
      id: 19,
      location: "East of England",
    },
    {
      id: 20,
      location: "Wales",
    },
    {
      id: 21,
      location: "east midlands",
    },
  ];
  return (
    <>
      <div className="container mx-auto sm:px-7 px-3 my-10">
        <Header
          variant={{ size: "3xl", theme: "white", weight: "normal" }}
          className="font-cormorant text-white mb-4"
        >
          {heading}
        </Header>

        {locationData.map((item, index) => (
          <Button
            key={index}
            variant={{ theme: "light", rounded: "full" }}
            className="md:mx-2 mx-1 my-1 hover:bg-red-600"
          >
            {item.location}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Location;
