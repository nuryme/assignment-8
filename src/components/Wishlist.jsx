import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCart, getWishlist, removingWishlist } from "../Utils";

export default function Wishlist() {
  const handleRemove = (id) => {
    removingWishlist(id)
    const wishlist = getWishlist()
    setCartData(wishlist)
  }


  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const wishlist = getWishlist();
    setCartData(wishlist);
  }, []);


  return (
    <div className="mt-12">
      <div className="">
        <h3 className="h3 font-bold">Wishlist</h3>
      </div>
      <div className="space-y-6 mt-8">
        {cartData.map((cart) => (
          <div
            key={cart.product_id}
            className="p-8 flex gap-8 rounded-2xl w-full bg-white drop-shadow-md "
          >
            <div className="">
              <img
                src={cart.product_image}
                className="object-cover rounded-xl h-[124px] w-[200px]"
                alt=""
              />
            </div>
            <div className="w-full space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="h2">{cart.product_title}</h3>
                <Link onClick={() => {
                  handleRemove(cart.product_id)
                }
                } className="p-3 rounded-full border border-red-600 text-red-600 h-[36px] w-[36px] flex items-center justify-center text-xl">
                  x
                </Link>
              </div>
              <p className="bodyText font-normal">{cart.description}</p>
              <p className="bodyText font-semibold text-secondaryColor/80">
                Price: ${cart.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
