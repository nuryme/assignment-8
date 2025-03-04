import React, { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { addCart, addWishlist, getCart, getWishlist } from "../Utils";

export default function Details() {
  const { id } = useParams();
  //   console.log(id);
  const data = useLoaderData();

  const [detailsData, setDetailsData] = useState({});

  const [isCart, setIsCart] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  useEffect(() => {
    const details = data.find((detail) => detail.product_id == id);
    setDetailsData(details);

    const cart = getCart();
    const isExistCart = cart.find((item) => item.product_id === id);
    if (isExistCart) {
      setIsCart(true);
    }

    const wishlist = getWishlist();
    const isExistWishlist = wishlist.find((item) => item.product_id === id);
    if (isExistWishlist) {
      setIsWishlist(true);
    }
  }, [data, setDetailsData, setIsCart, setIsWishlist]);
  // console.log(isCart);

  const handleCart = (detailsData) => {
    addCart(detailsData);
    setIsCart(true);
  };
  const handleWishlist = (detailsData) => {
    addWishlist(detailsData);
    setIsWishlist(true);
  };

  return (
    <div>
      <div className="bg-primaryColor pb-52 pt-8">
        <Heading
          heading={"Product Details"}
          body={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
      </div>

      <div className="w-full relative flex justify-center">
        <div className="card card-side bg-white shadow-xl p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start absolute -top-48">
          <figure className="flex max-h-[520px] rounded-3xl ">
            <img
              src={detailsData.product_image}
              alt="Movie"
              className="w-full h-auto max-h-full object-cover"
            />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title h2">{detailsData.product_title}</h2>
            <p className="bodyText">Price: {detailsData.price} $</p>
            <button className="border border-badge rounded-[32px] px-[14px] py-[7px] bg-badge/10 text-badge text-sm font-medium w-fit">
              {detailsData.availability ? "In Stock" : "Out of Stock"}
            </button>
            <p className="bodyText text-lg font-normal my-4">
              {detailsData.description}
            </p>
            <ul>
              <p className="h5 mb-3">Specification: </p>
              {detailsData.specification?.map((speci, index) => (
                <li
                  key={index}
                  className="list-disc bodyText text-lg font-normal ml-4 mt-2"
                >
                  {speci}
                </li>
              ))}
            </ul>
            <div>
              <p className="h5 flex items-center gap-2">
                Rating <FaStar className="text-orange-400" />
              </p>
              <div></div>
            </div>
            <div className="card-actions mt-4 items-center">
              <Link className="">
                <button
                  disabled={isCart}
                  onClick={() => {
                    handleCart(detailsData);
                  }}
                  className="btn !py-3 !px-6 bg-primaryColor rounded-[32px] border-none h5 text-white flex items-center gap-4"
                >
                  Add to Cart <IoCartOutline className="text-xl font-bold" />
                </button>
              </Link>
              <Link disabled={isWishlist} onClick={() => {
                handleWishlist(detailsData)
              }
              } className="btn p-3 rounded-full border-secondaryColor border text-xl">
                <FaRegHeart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
