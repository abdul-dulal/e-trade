import React, { useEffect, useState } from "react";
import Hover from "../../shered/Hover";
import Loading from "../../shered/Loading";
import Rattings from "../../shered/Ratting";

const Moreproduct = ({ category }) => {
  const [moreProduct, setMorePorduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(
      `https://e-trade-server.vercel.app/product/get-Bycategory?category=${category}`
    )
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
              <div className="flex lg:justify-between gap-8 flex-wrap justify-center container mt-10  overflow-hidden ">
                {moreProduct.map((e) => (
                  <div className="parent " key={e._id}>
                    <div class=" rounded-md bg-base-100 shadow-xl w-64 h-96 border-2">
                      <img
                        src={e.img}
                        className="  h-60 pt-3 ml-3 rounded-lg"
                        alt=""
                      />

                      <div class=" py-4 px-6  text-base font-semibold ">
                        <h2 class="">{e.title}</h2>

                        <div className="flex gap-1">
                          <p>${e.price}</p>
                          <span>-</span>
                          <p className="line-through">${e.price2}</p>
                        </div>
                        <Hover data={e} />
                        {e.ratting ? (
                          <Rattings ratting={e.ratting} />
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
