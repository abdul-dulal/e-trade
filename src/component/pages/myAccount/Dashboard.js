import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import auth from "../../../FirebaseInit";
const Dashboard = () => {
  const [vendor, setVendor] = useState();
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://e-trade-server.vercel.app/vendor/get-user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setVendor(data));
  }, [user?.email]);

  return (
    <div className="">
      <h2 className="text-xl">
        Hello {user?.displayName}
        <span className="ml-2">
          (not {user?.email.slice(0, -10)}?
          <span className="text-purple-600 underline ml-1 cursor-pointer">
            logout
          </span>
          )
        </span>
      </h2>

      <div>
        {vendor?.user == user?.email && (
          <button
            onClick={() => navigate("/vendor")}
            className="bg-purple-600 h-9 w-52 mt-10 rounded-sm text-white font-semibold"
          >
            Go to Vendor Dashbarod
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
