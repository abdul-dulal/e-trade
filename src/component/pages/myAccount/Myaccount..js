import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { useNavigate, useLocation } from "react-router-dom";
import Breadcumb from "../../shered/Breadcumb";
import Logout from "../../shered/Logout";

const Myaccount = () => {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div>
      <Breadcumb tag="Myaccount" />
      <div className="lg:px-32 md:px-10 mt-20">
        <div className="lg:flex md:flex   bg-gray-200  gap-10 py-16  ">
          <div className="ml-10">
            <ul className="">
              <li className=" hover:bg-primary hover:text-white border border-gray-300   cursor-pointer ">
                <NavLink
                  to="/my-account"
                  className=" flex justify-center items-center h-10 w-36 rounded-sm  "
                >
                  Dashbard
                </NavLink>
              </li>
              <li className=" hover:bg-primary  border border-gray-300   cursor-pointer ">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : { color: "black" }
                  }
                  to="/my-account/order"
                  className=" flex justify-center items-center h-10 w-36 rounded-sm  "
                >
                  Order
                </NavLink>
              </li>
              <li className=" hover:bg-primary  border border-gray-300   cursor-pointer ">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : { color: "black" }
                  }
                  to="/my-account/address"
                  className=" flex justify-center items-center h-10 w-36 rounded-sm  "
                >
                  Address
                </NavLink>
              </li>
              <li className=" hover:bg-primary  border border-gray-300   cursor-pointer ">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : { color: "black" }
                  }
                  to="/my-account/account-details"
                  className=" flex justify-center items-center h-10 w-36 rounded-sm  "
                >
                  Details
                </NavLink>
              </li>
              <li className=" hover:bg-primary flex justify-center items-center  rounded-sm   h-10 w-36 border border-gray-300   cursor-pointer ">
                <Logout />
              </li>
            </ul>
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myaccount;
