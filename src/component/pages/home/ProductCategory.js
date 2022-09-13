import React from "react";
import { Link } from "react-router-dom";
import eletrocnic from "../../../assets/icon/1649412666885-electronic-device.png";
import clening from "../../../assets/icon/1649412695297-cleaning.png";
import cooking from "../../../assets/icon/1649412704659-cooking.png.png";
import women from "../../../assets/icon/1649412710794-fashion.png.png";
import flower from "../../../assets/icon/1649412717461-flower.png.png";
import food from "../../../assets/icon/1649412723965-food.png.png";
import health from "../../../assets/icon/1649412729898-medicine.png.png";
import camera from "../../../assets/icon/1649412738662-photo-camera.png.png";
import sport from "../../../assets/icon/1649412748236-running.png.png";
import shairt from "../../../assets/icon/1649412755038-shirts.png.png";
import home from "../../../assets/icon/1649412765247-sofa.png.png";
import toys from "../../../assets/icon/1649412748236-running.png.png";

const ProductCategory = () => {
  return (
    <div className="mt-24">
      <h1 className="text-2xl font-semibold text-center">Browse by Category</h1>
      <div className="container mt-12 ">
        <ul className="flex flex-wrap gap-3 justify-center">
          <Link
            to={"category/accessories"}
            className="flex border-2 hover:border-2 hover:border-primary  w-64 py-2 px-5 justify-between items-center cursor-pointer"
          >
            Electronic Accessories
            <img src={eletrocnic} className="w-8" alt="" />
          </Link>
          <Link
            to="category/clening"
            className="flex border-2 hover:border-2 hover:border-primary w-64 py-2 px-5 justify-between items-center cursor-pointer"
          >
            Clening
            <img src={clening} className="w-8" alt="" />
          </Link>
          <Link
            to="category/cooking"
            className="flex border-2 hover:border-2 hover:border-primary w-64 py-2 px-5 justify-between items-center cursor-pointer"
          >
            Cooking
            <img src={cooking} className="w-8" alt="" />
          </Link>
          <Link
            to="category/women"
            className="flex border-2 hover:border-2 hover:border-primary w-64 py-2 px-5 justify-between items-center cursor-pointer"
          >
            women's Fashion
            <img src={women} className="w-8" alt="" />
          </Link>
          <Link
            to="category/flower"
            className="flex border-2 hover:border-2 hover:border-primary w-64 py-2 px-5 justify-between items-center cursor-pointer"
          >
            Flower
            <img src={flower} className="w-8" alt="" />
          </Link>
          <Link
            to="category/food"
            className="flex border-2 hover:border-2 hover:border-primary w-64 py-2 px-5 justify-between items-center cursor-pointer"
          >
            Food
            <img src={food} className="w-8" alt="" />
          </Link>
          <Link
            to="category/health"
            className="flex border-2 hover:border-2 hover:border-primary w-64 py-2 px-5 justify-between items-center cursor-pointer"
          >
            Health &amp; Beauty
            <img src={health} className="w-8" alt="" />
          </Link>
          <Link
            to="category/electronic"
            className="flex border-2 hover:border-2 hover:border-primary w-64 py-2 px-5 justify-between items-center cursor-pointer"
          >
            Electronic
            <img src={camera} className="w-8" alt="" />
          </Link>
          <Link
            to="category/sports"
            className="flex border-2 hover:border-2 hover:border-primary w-64 py-2 px-5 justify-between items-center cursor-pointer"
          >
            Sports
            <img src={sport} className="w-8" alt="" />
          </Link>
          <Link
            to="category/men"
            className="flex border-2 hover:border-2 hover:border-primary w-64 py-2 px-5 justify-between items-center cursor-pointer"
          >
            Men's Fashion
            <img src={shairt} className="w-8" alt="" />
          </Link>
          <Link
            to="category/lifeStyle"
            className="flex border-2 hover:border-2 hover:border-primary w-64 py-2 px-5 justify-between items-center cursor-pointer"
          >
            Home &amp; LinkfeStyle
            <img src={home} className="w-8" alt="" />
          </Link>
          <Link
            to="category/toys"
            className="flex border-2 hover:border-2 hover:border-primary w-64 py-2 px-5 justify-between items-center cursor-pointer"
          >
            Toys category/&amp; Fun
            <img src={toys} className="w-8" alt="" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ProductCategory;
