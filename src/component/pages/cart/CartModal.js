import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import ModalDetails from "./ModalDeatils";
const Cartmodal = ({ cartmodal }) => {
  const { cartInfo } = useCart();

  const navigate = useNavigate();
  const price = cartInfo?.map((e) => e.price);
  const totalPrice =
    price?.length > 0 &&
    price.reduce((x, y) => {
      return x + y;
    });

  return (
    <div>
      {cartmodal && (
        <div class="origin-top-right absolute lg:right-32 md:right-12 right-5 z-50  sm:right-0 mt-2 w-72 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-100 scale-100">
          <div className="overflow-y-scroll h-96">
            {cartInfo?.length > 0 ? (
              <div>
                {cartInfo.map((data) => (
                  <div>{<ModalDetails data={data} key={data._id} />}</div>
                ))}

                <div className="flex justify-between text-xl font-semibold px-6 mt-5">
                  <p>Total</p>
                  <p>${totalPrice}</p>
                </div>
              </div>
            ) : (
              <h2 className=" flex justify-center items-center h-full text-xl">
                No items added to cart
              </h2>
            )}
            {price?.length > 0 && (
              <div className="px-6 py-12">
                <button
                  onClick={() => navigate("/cart")}
                  className="bg-primary text-white uppercase w-full h-10 hover:bg-gray-600"
                >
                  View Cart
                </button>
                <button
                  onClick={() => navigate("/checkout")}
                  className="bg-primary text-white uppercase w-full h-10 mt-3 hover:bg-gray-600"
                >
                  CheckOut
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartmodal;
