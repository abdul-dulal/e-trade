import { useEffect, useState } from "react";

const useVendor = (user) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(
      `https://eduworld-backend.vercel.app/product/get-vendorPorudct?user=${user}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(true);
      });
  }, [user]);
  return { products, loading };
};

export default useVendor;
