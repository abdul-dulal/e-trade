import React, { useEffect, useState } from "react";
import Hover from "../../shered/Hover";
import Loading from "../../shered/Loading";
import Rattings from "../../shered/Ratting";

const Moreproduct = ({ category }) => {
  const [moreProduct, setMorePorduct] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(moreProduct);
  useEffect(() => {
    fetch(`http://localhost:3000/get-Bycategory?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setMorePorduct(data);
        setLoading(true);
      });
  }, [category]);

  return (
    <div>
      {moreProduct ? (
        <>
          {loading ? (
            <>
              <div className="flex lg:justify-between justify-center  flex-wrap  gap-8 mt-10  overflow-hidden ">
                {moreProduct.map((product) => (
                  <div className="parent " key={product._id}>
                    <div
                      className={` rounded-md  shadow w-[300px] h-96 border-2 `}
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
            </>
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <p className="text-xl text-center">There are no proudcts</p>
      )}
    </div>
  );
};

export default Moreproduct;
