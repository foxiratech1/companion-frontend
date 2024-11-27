import React from "react";
import Button from "./Button";

const ServiceOffered: React.FC = () => {
  const serviceData = [
    {
      id: 1,
      location: "Escorts & Massage",
    },
    {
      id: 2,
      location: "Couples",
    },
    {
      id: 3,
      location: "Domination",
    },
    {
      id: 4,
      location: "Duo with girl",
    },
    {
      id: 5,
      location: "Erotic massage",
    },
    {
      id: 7,
      location: "Foot Fetish",
    },
    {
      id: 7,
      location: "Foot Fetish",
    },
    {
      id: 7,
      location: "Foot Fetish",
    },
    {
      id: 7,
      location: "Foot Fetish",
    },
    {
      id: 7,
      location: "Foot Fetish",
    },
    {
      id: 7,
      location: "Foot Fetish",
    },
    {
      id: 7,
      location: "Foot Fetish",
    },
    {
      id: 13,
      location: "Uniform",
    },
    {
      id: 7,
      location: "Foot Fetish",
    },
    {
      id: 7,
      location: "Foot Fetish",
    },
  ];
  return (
    <>
      <h1 className="text-white text-3xl my-6 font-cormorant text-left">
        Service Offered
      </h1>

      {serviceData.map((item) => (
        <Button
          variant={{
            theme: "light",
            rounded: "full",
            size: "base",
            weight: "400",
          }}
          className="my-1 mx-1 hover:bg-red-600"
        >
          {item.location}
        </Button>
      ))}
    </>
  );
};

export default ServiceOffered;
