import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../FirebaseInit";

import Loading from "../shered/Loading";

const useCart = () => {
  const [user] = useAuthState(auth);
  const {
    isLoading,
    data: cartInfo,
    refetch: reload,
  } = useQuery("demo", () =>
    fetch(
      `https://eduworld-backend.vercel.app/cart/get-cartItems?user=${user?.email}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return { cartInfo, reload };
};

export default useCart;
