import React from "react";
import { useQuery } from "react-query";
import Loading from "../shered/Loading";
const useUploadproduct = (user) => {
  const {
    isLoading,
    data: product,
    refetch: deleteRetch,
  } = useQuery("productdemo", () =>
    fetch(`http://localhost:3000/get-vendorPorudct?user=${user?.email}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return { product, deleteRetch, isLoading };
};

export default useUploadproduct;
