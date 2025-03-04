import React from "react";
import { Link } from "react-router-dom";

export default function Card({ card }) {
  return (
    <div className="card bg-white shadow-xl p-5 space-y-6">
      <figure className="">
        <img
          src={card.product_image}
          alt="Shoes"
          className="rounded-xl w-[500px] h-[300px] lg:w-[282px] lg:h-[181px] object-cover"
        />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title h2">{card.product_title}</h2>
        <p className="bodyText">Price: {card.price} $</p>
        <div className="card-actions items-start">
          <Link to={`/details/${card.product_id}`}><button className="px-5 py-3 rounded-[32px] border border-primaryColor text-primaryColor text-lg font-semibold">View Details</button></Link>
        </div>
      </div>
    </div>
  );
}
