import React, { useEffect, useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import { deleting, getCart, removingCart } from "../Utils";

export default function Cart() {
  const handleRemove = (id) => {
    removingCart(id);
    const cart = getCart();
    setCartData(cart);
  };

  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const cart = getCart();
    setCartData(cart);
  }, []);

  const totalPrice = cartData.reduce(
    (previous, cart) => previous + cart.price,
    0
  );
  // console.log(totalPrice)

  const handleSort = () => {
    const sort = [...cartData].sort((a, b) => b.price - a.price);
    setCartData(sort);
  };

  const [purchase, setPurchase] = useState(false);
useEffect(() => {
  if (cartData.length === 0) {
    setPurchase(true);
  }
  else {
    setPurchase(false)
  }

}
, [cartData])
console.log(purchase)
console.log(cartData.length)

  const handleDeleting  = () => {
    const data = deleting()
    cartData(data)
  }
  
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center">
        <h3 className="h3 font-bold">Cart</h3>
        <div className="flex items-center flex-col lg:flex-row justify-center gap-4">
          <h3 className="h3 text-xl font-bold">Total Cost: ${totalPrice}</h3>
          <button
            onClick={handleSort}
            className="btn button  border border-primaryColor text-primaryColor bg-transparent"
          >
            Sort by Price{" "}
          </button>
          <a href="#my_modal_8">
            <button
              disabled={purchase}
              onClick={handleDeleting}
              className="btn button bg-primaryColor text-white"
            >
              Purchase
            </button>
            </a>
        </div>
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
                <Link
                  onClick={() => {
                    handleRemove(cart.product_id);
                  }}
                  className="p-3 rounded-full border border-red-600 text-red-600 h-[36px] w-[36px] flex items-center justify-center text-xl"
                >
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

      {/* modal */}

      {/* The button to open modal */}
      {/* <a href="#my_modal_8" className="btn">
        open modal
      </a> */}

      {/* Put this part before </body> tag */}
      <div className="modal" role="dialog" id="my_modal_8">
        <div className="modal-box flex flex-col items-center p-12">
          <h3 className="text-2xl text-center font-bold">Congratulate!</h3>
          <div className="modal-action">
            <Link to="/" className="btn">
              Close
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
