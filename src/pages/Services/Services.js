import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../shared/ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 lg:gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;