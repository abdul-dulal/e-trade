import axios from "axios";
import React, { useEffect, useState } from "react";
import Breadcumb from "../../shered/Breadcumb";
import Filter from "./Filter";
import ShopCategory from "../shop/ShopCategory";
import Loading from "../../shered/Loading";
import SearchProduct from "./SearchProduct";
import AllProduct from "./AllProduct";

const Shop = () => {
  const [Category, setCategory] = useState("");
  const [accessories, setaccessories] = useState("");
  const [clening, setClening] = useState();
  const [cooking, setCooking] = useState();
  const [fashion, setFashion] = useState();
  const [eletronic, setEletronic] = useState();
  const [flower, setFlower] = useState();
  const [food, setFood] = useState();
  const [healthy, setHealthy] = useState();
  const [sport, setSport] = useState();
  const [mFashion, setMfashion] = useState();
  const [style, setStyle] = useState();
  const [toys, setToys] = useState();
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

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/search/${searchTerm}`)
      .then((res) => setProdcut(res.data));
  }, [searchTerm]);

  return (
    <div>
      <Breadcumb tag="Shop" />
      {loading ? (
        <div className="lg:flex md:flex  container">
          <div className="lg:block md:block hidden">
            <div className="w-80">
              <h2 className="text-2xl mt-4">Search</h2>
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-2 h-10 w-60 rounded-sm shadow-sm placeholder:purple-600 px-3 mt-3  border-gray-200 "
                placeholder="Search Product..."
              />
              <h1
                className="text-2xl font-serif my-3
              "
              >
                Category
              </h1>

              <div className="space-y-2">
                <div className="">
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      onClick={() => {
                        setaccessories(!accessories);
                        setCategory("accessories");
                      }}
                    />
                    <span className="font-semibold ml-2">
                      Electronic Accessories
                    </span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      onClick={() => {
                        setClening(!clening);
                        setCategory("clening");
                      }}
                    />
                    <span className="font-semibold ml-2">Clening</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      onClick={() => {
                        setCooking(!cooking);
                        setCategory("cooking");
                      }}
                    />
                    <span className="font-semibold ml-2">Cooking</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      onClick={() => {
                        setFashion(!fashion);
                        setCategory("women");
                      }}
                    />
                    <span className="font-semibold ml-2">Women's Fashion</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      onClick={() => {
                        setFlower(!flower);
                        setCategory("flower");
                      }}
                    />
                    <span className="font-semibold ml-2">Flower</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      onClick={() => {
                        setFood(!food);
                        setCategory("food");
                      }}
                    />
                    <span className="font-semibold ml-2">Food</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      onClick={() => {
                        setHealthy(!healthy);
                        setCategory("healthty");
                      }}
                    />
                    <span className="font-semibold ml-2">
                      Health &amp; Beauty
                    </span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      onClick={() => {
                        setEletronic(!eletronic);
                        setCategory("electronic");
                      }}
                    />
                    <span className="font-semibold ml-2">Eletronic</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      onClick={() => {
                        setSport(!sport);
                        setCategory("sport");
                      }}
                    />
                    <span className="font-semibold ml-2">Sport</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      onClick={() => {
                        setMfashion(!mFashion);
                        setCategory("men");
                      }}
                    />
                    <span className="font-semibold ml-2">Men`s Fashion</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      onClick={() => {
                        setStyle(!style);
                        setCategory("style");
                      }}
                    />
                    <span className="font-semibold ml-2">
                      Home &amp; Lifestyle
                    </span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      onClick={() => {
                        setToys(!toys);
                        setCategory("toys");
                      }}
                    />
                    <span className="font-semibold ml-2">Toys &amp; toys</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <Filter />
          <div>
            {accessories ||
            clening ||
            cooking ||
            fashion ||
            flower ||
            food ||
            healthy ||
            sport ||
            eletronic ||
            mFashion ||
            style ||
            toys ? (
              <ShopCategory category={Category} />
            ) : (
              <div>
                {product.length > 0 ? (
                  <div className="  my-10 ">
                    <div className="flex flex-wrap justify-between">
                      {product.map((product) => (
                        <SearchProduct product={product} />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-wrap gap-10 my-10">
                      {allproduct.map((product) => (
                        <AllProduct product={product} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Shop;
