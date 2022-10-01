import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../FirebaseInit";
import Loading from "../shered/Loading";

const useWishlist = () => {
  const [user] = useAuthState(auth);
  const {
    isLoading,
    data: wishlistInfo,
    refetch,
  } = useQuery("repoData", () =>
    fetch(
      `https://eduworld-backend.vercel.app/wishlist/get-wishlist?user=${user?.email}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return { wishlistInfo, refetch };
};

export default useWishlist;
