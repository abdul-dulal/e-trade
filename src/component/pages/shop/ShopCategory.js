import React, { useEffect } from "react";
import { useState } from "react";
import Hover from "../../shered/Hover";
import Loading from "../../shered/Loading";
import Rattings from "../../shered/Ratting";

const ShopCategory = ({ category }) => {
  const [products, setProdcut] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(category);

  useEffect(() => {
    fetch(
      `https://eduworld-backend.vercel.app/product/get-Bycategory?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProdcut(data);
        setLoading(true);
      });
  }, [category]);
  return (
    <div>
      {loading ? (
        <>
          {products.length > 0 ? (
            <div className="flex flex-wrap gap-10 my-10  mt-10  overflow-hidden ">
              {products.map((product) => (
                <div className="parent " key={product._id}>
                  <div
                    className={` rounded-md  shadow w-[312px] h-96 border-2 `}
                  >
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
              ))}
            </div>
          ) : (
            <h1 className="text-xl font-serif text-center lg:mb-96">
              There are no products
            </h1>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ShopCategory;
