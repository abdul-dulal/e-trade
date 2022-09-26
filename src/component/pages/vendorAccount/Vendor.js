import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../../../FirebaseInit";
import Breadcumb from "../../shered/Breadcumb";
import Logout from "../../shered/Logout";
import useUserInfo from "../../hooks/useUserInfo";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import LoginRegister from "../LoginRegister/LoginRegister";
const Vendor = () => {
  const [vendor, setVendor] = useState();
  const [user] = useAuthState(auth);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/vendor/user/${user?.email}`)
      .then((res) => setVendor(res.data));
  }, [user?.email]);

  return (
    <div>
      <Breadcumb tag="Myaccount" />
      {user ? (
        <div className="lg:px-32 md:px-10  mt-20">
          <div className="lg:flex bg-gray-200  gap-10 py-16  ">
            <div className="bg-gray-700 p-5 lg:ml-10 w-48 md:ml-64 ml-24 rounded-sm">
              <ul className="">
                <li className=" hover:bg-primary border  cursor-pointer ">
                  <NavLink
                    to="/vendor"
                    className=" flex justify-center items-center h-10 w-36 rounded-sm text-gray-200 "
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className=" hover:bg-primary border border-gray-300   cursor-pointer ">
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#FC9236",
                          }
                        : { color: "" }
                    }
                    to="/vendor/products"
                    className=" flex justify-center items-center h-10 w-36 rounded-sm   text-gray-200"
                  >
                    Prodcuts
                  </NavLink>
                </li>
                <a
                  href={`/shop/${vendor?._id}`}
                  className=" hover:bg-primary border border-gray-300   cursor-pointer  h-10 w-[152px] flex items-center justify-center rounded-sm text-gray-200 "
                  target="blank"
                >
                  Visit Store
                </a>
                <li className=" hover:bg-primary border border-gray-300   cursor-pointer ">
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#FC9236",
                          }
                        : { color: "" }
                    }
                    to="/vendor/settings"
                    className=" flex justify-center items-center h-10 w-36 rounded-sm text-gray-200"
                  >
                    Settings
                  </NavLink>
                </li>
                <li className=" hover:bg-primary border border-gray-300   cursor-pointer flex justify-center items-center h-10   w-[152px] rounded-sm text-gray-200">
                  <Logout />
                </li>
              </ul>
            </div>

            <div>
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <LoginRegister />
      )}
    </div>
  );
};

export default Vendor;
