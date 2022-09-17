import axios from "axios";
import React, { useEffect, useState } from "react";
import Breadcumb from "../../shered/Breadcumb";
import Filter from "./Filter";
import Loading from "../../shered/Loading";
import Hover from "../../shered/Hover";
import Rattings from "../../shered/Ratting";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState(false);
  const [product, setProdcut] = useState([]);
  const [allproduct, setallproduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/product/allproduct").then((res) => {
      setLoading(true);
      setallproduct(res.data);
    });
  }, []);

  return (
    <div>
      <Breadcumb tag="Shop" />
      <div className=" container">
        <div className="w-80">
          <h2 className="text-2xl mt-4">Search</h2>
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 h-10 w-60 rounded-sm shadow-sm placeholder:purple-600 px-3 mt-3  border-gray-200 "
            placeholder="Search Product..."
          />
        </div>
      </div>
      {loading ? (
        <div className=" ">
          <div
            className={`flex lg:justify-between gap-8 flex-wrap justify-center container mt-10  overflow-hidden `}
          >
            {allproduct
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.title?.toLowerCase().includes(searchTerm?.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div className="parent " key={product._id}>
                    <div
                      className={` rounded-md  shadow w-[312px] h-96 border-2 `}
                    >
                      <img
                        src={val.img}
                        className="  h-60 pt-3 block mx-auto rounded-lg hover:scale-110 duration-500"
                        alt=""
                      />

                      <div className=" py-4 px-6  text-base font-semibold ">
                        <h2 className="">{val.title}</h2>

                        <div className="flex gap-1">
                          <p>${product.price}</p>
                          <span>-</span>
                          <p className="line-through">${val.price2}</p>
                        </div>
                        <Hover data={val} />
                        {product.ratting ? (
                          <Rattings ratting={val.ratting} />
                        ) : (
                          <p className="mt-3">★★★★★</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Shop;
