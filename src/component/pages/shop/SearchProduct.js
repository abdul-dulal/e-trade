import React from "react";
import Hover from "../../shered/Hover";
import Rattings from "../../shered/Ratting";

const SearchProduct = ({ product }) => {
  return (
    <div className="parent " key={product._id}>
      <div className={` rounded-md  shadow w-[312px] h-96 border-2 `}>
        <img
          src={product.img}
          className="  h-60 pt-3 block mx-auto rounded-lg hover:scale-110 duration-500"
          alt=""
        />

        <div className=" py-4 px-6  text-base font-semibold ">
          <h2 className="">{product.title}</h2>

          <div className="flex gap-1">
            <p>${product.price}</p>
            <span>-</span>
            <p className="line-through">${product.price2}</p>
          </div>
          <Hover data={product} />
          {product.ratting ? (
            <Rattings ratting={product.ratting} />
          ) : (
            <p className="mt-3">★★★★★</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
