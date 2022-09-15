import React, { useEffect, useState } from "react";

const useSinglevendor = (user) => {
  const [vendor, setVendor] = useState();
  useEffect(() => {
    fetch(
      `https://gentle-inlet-09370.herokuapp.com/collectVendor/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setVendor(data));
  }, [user?.email]);
  return [vendor];
};

export default useSinglevendor;
