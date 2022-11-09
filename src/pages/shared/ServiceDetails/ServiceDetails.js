import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Review from "../../Review/Review";
import "./ServiceDetails.css";
import ServiceDetailsCard from "./ServiceDetailsCard/ServiceDetailsCard";
const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id } = service;

  const [reviews, setReviews] = useState(null);
  const [forUpdate, setForUpdate] = useState(false);

  useEffect(() => {
    fetch(
      `https://quick-tax-server-side-k-m-rahman.vercel.app/reviews?serviceId=${_id}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  console.log(reviews);
  return (
    <div>
      {/* service details card */}
      <ServiceDetailsCard key={_id} service={service}></ServiceDetailsCard>

      {/* reviews */}
      <h3 className="capitalize mt-20 text-center text-3xl w-3/4 mx-auto md:text-4xl font-bold dark:text-slate-100 italic">
        Reviews of our valued clients
      </h3>
      <div className="grid grid-cols-1 w-3/4 mx-auto my-10 gap-5">
        {reviews?.map((reviewDetails) => (
          <Review
            key={reviewDetails._id}
            reviewDetails={reviewDetails}
          ></Review>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;