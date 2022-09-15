import React, { useEffect, useState } from "react";
import Hover from "../../shered/Hover";
import Loading from "../../shered/Loading";
import Rattings from "../../shered/Ratting";

const Newarrival = () => {
  const [products, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(
      "https://e-trade-server.vercel.app/product/get-featured?highlights=new"
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
          <div className="flex lg:justify-between gap-9 flex-wrap justify-center container mt-10  overflow-hidden ">
            {products.map((product) => (
              <div className="parent " key={product._id}>
                <div className="  rounded-md bg-base-100 shadow w-[312px] h-96 border-2">
                  <img
                    src={product.img}
                    className="  h-60 pt-3 block mx-auto hover:hover:scale-110 duration-500 rounded-lg"
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
    </div>
  );
};

export default Newarrival;
