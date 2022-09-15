import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcumb from "../../shered/Breadcumb";
import Hover from "../../shered/Hover";
import Loading from "../../shered/Loading";
import Rattings from "../../shered/Ratting";

const Electical = () => {
  const [products, setProdcut] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/product/get-Bycategory?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProdcut(data);
        setLoading(true);
      });
  }, [category]);
  return (
    <div>
      <Breadcumb tags={""} />
      {loading ? (
        <>
          <div className="flex lg:justify-between justify-center gap-8 flex-wrap  container mt-10  overflow-hidden ">
            {products.map((product) => (
              <div className="parent " key={product._id}>
                <div className=" ">
                  <img
                    src={product.img}
                    className="  h-60 pt-3 block mx-auto hover:scale-110 duration-500"
                    alt=""
                  />

                  <div class=" py-4 px-6  text-base font-semibold ">
                    <h2 class="">{product.title}</h2>

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

export default Electical;
