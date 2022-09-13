import React, { useEffect, useState } from "react";

const useVendor = (user) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:3000/product/vendorProduct?user=${user}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(true);
      });
  }, [user]);
  return { products, loading };
};

export default useVendor;
