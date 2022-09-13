import React from "react";
import { useQuery } from "react-query";
import Loading from "../shered/Loading";

const useFollower = (id) => {
  const {
    isLoading,
    data: followers,
    refetch: followerRefetch,
  } = useQuery("productdemo", () =>
    fetch(`https://gentle-inlet-09370.herokuapp.com/vendor/${id}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return { followers, followerRefetch };
};

export default useFollower;
