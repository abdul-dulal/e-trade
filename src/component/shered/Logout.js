import React from "react";
import { signOut } from "firebase/auth";
import auth from "../../FirebaseInit";
const Logout = () => {
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={handleLogout} className="ml-4">
        Logout
      </button>
    </div>
  );
};

export default Logout;
