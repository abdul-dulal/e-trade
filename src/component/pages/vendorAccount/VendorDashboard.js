import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../FirebaseInit";
import Logout from "../../shered/Logout";

const VendorDashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex">
        <h2>Hello {user?.email.slice(0, -10)}</h2>(
        <span className="ml-2">not {user?.email.slice(0, -10)}?</span>
        <span className=" underline">
          <Logout />
        </span>
        )
      </div>

      <button
        onClick={() => navigate("/my-account")}
        className="bg-primary h-9 w-52 mt-10 rounded-sm text-white font-semibold"
      >
        Go to My-Account
      </button>
    </div>
  );
};

export default VendorDashboard;
