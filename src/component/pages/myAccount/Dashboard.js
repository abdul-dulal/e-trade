import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import auth from "../../../FirebaseInit";
import Loading from "../../shered/Loading";
const Dashboard = () => {
  const [vendor, setVendor] = useState();
  const [loadin, setLoading] = useState(false);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/vendor/get-user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setVendor(data));
    setLoading(true);
  }, [user?.email]);

  return (
    <div className="">
      <h2 className="text-xl">
        Hello {user?.displayName}
        <span className="ml-2">
          (not {user?.email.slice(0, -10)}?
          <span className="text-purple-600 underline  cursor-pointer">
            logout
          </span>
          )
        </span>
      </h2>

      {loadin ? (
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
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Dashboard;
