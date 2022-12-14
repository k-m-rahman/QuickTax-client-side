import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../shared/ServiceCard/ServiceCard";
import { FaAngleRight } from "react-icons/fa";

const HomeServices = ({ services }) => {
  return (
    <div>
      <div className="flex flex-col gap-3 mb-10 mt-20 text-center">
        <h1 className="capitalize text-4xl md:text-5xl font-semibold text-slate-700 dark:text-slate-100 ">
          Here's how I can help you
        </h1>
        <p className="text-xl  text-slate-500 dark:text-slate-200 ">
          Browse my services and find the perfect tax preparation solution
          you've been searching for.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 lg:gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to="/services">
          <Button
            gradientMonochrome="purple"
            className="mx-auto mt-5 w-32 hover:scale-110 delay-75"
          >
            <span className="flex items-center gap-2 ">
              <span>See All</span>
              <FaAngleRight></FaAngleRight>
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
