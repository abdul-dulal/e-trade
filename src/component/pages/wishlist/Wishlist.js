import React from "react";
import useWishlist from "../../hooks/useWishlist";
import Breadcumb from "../../shered/Breadcumb";
import WishlistTable from "./WishlistTable";

const Wishlist = () => {
  const { wishlistInfo, refetch } = useWishlist();

  return (
    <div>
      <Breadcumb tag="Wishlist" />
      <div class="overflow-x-auto container mt-6">
        {wishlistInfo?.length > 0 ? (
          <table class="table w-full">
            <thead>
              <tr className=" ">
                <th className="text-[15px]">Image</th>
                <th className="text-[15px]"> Product Name</th>
                <th className="text-[15px]">Unit Pirce</th>
                <th className="text-[15px]">Add To Cart</th>
                <th className="text-[15px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlistInfo?.map((e) => (
                <WishlistTable key={e._id} data={e} refetch={refetch} />
              ))}
            </tbody>
          </table>
        ) : (
          <h2 className="text-xl font-semibold my-20 text-center">
            No items found in wishlist
          </h2>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
