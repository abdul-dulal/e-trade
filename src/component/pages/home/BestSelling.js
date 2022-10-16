import React, { useEffect, useState } from "react";
// import useReviews from "../hooks/useReviews";

import Ratting from "../../shered/Ratting";
import Loading from "../../shered/Loading";
import Hover from "../../shered/Hover";
import "../../shered/style.css";
import { backgroundContext } from "../../../App";
const BestSelling = () => {
  const [products, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [popup] = React.useContext(backgroundContext);
  //   const { reviews } = useReviews();
  useEffect(() => {
    fetch(
      "https://e-trade-server.vercel.app/product/get-featured?highlights=best"
    )
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);
        setLoading(true);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <div
            className={`flex lg:justify-between gap-8 flex-wrap justify-center lg:px-20 md:px-10 px-5 mt-10  overflow-hidden `}
          >
            {products.map((product) => (
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
                      <Ratting ratting={product.ratting} />
                    ) : (
                      <p className="mt-3">★★★★★</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default BestSelling;
