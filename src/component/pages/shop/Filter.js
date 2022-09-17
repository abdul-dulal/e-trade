import React, { useState } from "react";

const Filter = () => {
  const [accessories, setaccessories] = useState("");
  const [fashion, setFashion] = useState("");
  const [food, setFood] = useState("");
  const [eletronic, setEletronic] = useState("");
  const [mFashion, setMfashion] = useState("");
  const [cooking, setCooking] = useState("");
  const [clening, setClening] = useState("");
  const [flower, setFlower] = useState("");
  const [healthy, setHealthy] = useState("");
  const [sport, setSport] = useState("");
  const [style, setStyle] = useState("");
  const [toys, setToys] = useState("");
  const [searchTerm, setSearchTerm] = useState(false);
  const [filter, setFilter] = useState(false);
  const [hide, setHide] = useState(false);
  return (
    <div className="lg:hidden md:hidden block">
      <div className="">
        <p
          className="text-2xl text-purple-600 font-bold"
          onClick={() => setHide(!hide)}
        >
          {hide ? "-" : "+"} Filter
        </p>
        {hide ? (
          <div className="w-80">
            <h2 className="text-2xl mt-4">Search</h2>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-2 h-10 w-60 rounded-sm shadow-sm placeholder:purple-600 px-3 mt-3  border-gray-200 "
              placeholder="Search Product..."
            />
            <h2 className="text-2xl mt-4">Categories</h2>
            <div className="space-y-2">
              <div className="">
                <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    onClick={() => setaccessories(!accessories)}
                  />
                  <span className="font-semibold ml-2">
                    Electronic Accessories
                  </span>
                </label>
              </div>
              <div>
                <label className="cursor-pointer">
                  <input type="checkbox" onClick={() => setClening(!clening)} />
                  <span className="font-semibold ml-2">Clening</span>
                </label>
              </div>
              <div>
                <label className="cursor-pointer">
                  <input type="checkbox" onClick={() => setCooking(!cooking)} />
                  <span className="font-semibold ml-2">Cooking</span>
                </label>
              </div>
              <div>
                <label className="cursor-pointer">
                  <input type="checkbox" onClick={() => setFashion(!fashion)} />
                  <span className="font-semibold ml-2">Women's Fashion</span>
                </label>
              </div>
              <div>
                <label className="cursor-pointer">
                  <input type="checkbox" onClick={() => setFlower(!flower)} />
                  <span className="font-semibold ml-2">Flower</span>
                </label>
              </div>
              <div>
                <label className="cursor-pointer">
                  <input type="checkbox" onClick={() => setFood(!food)} />
                  <span className="font-semibold ml-2">Food</span>
                </label>
              </div>
              <div>
                <label className="cursor-pointer">
                  <input type="checkbox" onClick={() => setHealthy(!healthy)} />
                  <span className="font-semibold ml-2">
                    Health &amp; Beauty
                  </span>
                </label>
              </div>
              <div>
                <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    onClick={() => setEletronic(!eletronic)}
                  />
                  <span className="font-semibold ml-2">Eletronic</span>
                </label>
              </div>
              <div>
                <label className="cursor-pointer">
                  <input type="checkbox" onClick={() => setSport(!sport)} />
                  <span className="font-semibold ml-2">Sport</span>
                </label>
              </div>
              <div>
                <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    onClick={() => setMfashion(!mFashion)}
                  />
                  <span className="font-semibold ml-2">Men`s Fashion</span>
                </label>
              </div>
              <div>
                <label className="cursor-pointer">
                  <input type="checkbox" onClick={() => setStyle(!style)} />
                  <span className="font-semibold ml-2">
                    Home &amp; Lifestyle
                  </span>
                </label>
              </div>
              <div>
                <label className="cursor-pointer">
                  <input type="checkbox" onClick={() => setToys(!toys)} />
                  <span className="font-semibold ml-2">Toys &amp; toys</span>
                </label>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Filter;
