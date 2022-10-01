import React from "react";
import useVendor from "../../hooks/useVendor";
import Hover from "../../shered/Hover";
import Loading from "../../shered/Loading";
import Rattings from "../../shered/Ratting";

const VendorProduct = ({ user }) => {
  const { products, loading } = useVendor(user);

  return (
    <div>
      {loading ? (
        <div className="">
          {products.length > 0 ? (
            <div className="flex lg:justify-between mb-10 gap-8 flex-wrap justify-center container mt-10  overflow-hidden ">
              {products.map((product) => (
                <div className="parent" key={product._id}>
                  <div class=" rounded-md bg-base-100 shadow-xl w-[270px] h-96 border-2">
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
          ) : (
            <div>
              <p className="text-2xl mt-10 text-center">There are no product</p>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default VendorProduct;
