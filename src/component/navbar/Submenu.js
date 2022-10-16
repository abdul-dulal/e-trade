import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import wishlist from "../../assets/icon/wishlist.png";
import cart from "../../assets/icon/cart.png";
import avatar from "../../assets/icon/avatar.a296afc6.png";
import { HiMenu } from "react-icons/hi";
import logo from "../../assets/demo-store-logo-1634113310.jpg";

// import Cartmodal from "../cart/Cartmodal";
// import auth from "../../Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../shered/Logout";
import auth from "../../FirebaseInit";

const Submenu = () => {
  const [hide, setHide] = useState(true);
  const [show, setShow] = useState(false);
  const [user] = useAuthState(auth);
  const handleHide = () => {
    setHide(!hide);
  };
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className=" grid grid-cols-2  lg:hidden md:hidden  ">
      <div className="grid grid-cols-2 relative">
        <div className="space-y-6">
          <HiMenu className="text-3xl" onClick={handleShow} />
          {show ? (
            <>
              <ul className=" gap-8 space-y-6 ">
                <li className="text-sm font-semibold mt-2 hover:bg-[#7C3AED] p-[10px] ">
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                            padding: "10px",
                            background: "#7C3AED",
                            width: "100%",
                            color: "white",
                            borderRadius: "4px",
                          }
                        : { color: "black" }
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-sm font-semibold mt-2 ">
                  <NavLink
                    to={"shop"}
                    className=""
                    style={({ isActive }) =>
                      isActive
                        ? {
                            border: "2px",
                            padding: "10px",
                            background: "#7C3AED",
                            color: "white",
                            borderRadius: "4px",
                          }
                        : { color: "black" }
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="text-sm font-semibold mt-2">
                  <NavLink
                    to={"contact"}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            border: "2px",
                            padding: "10px",
                            background: "#7C3AED",
                            color: "white",
                            borderRadius: "4px",
                          }
                        : { color: "black" }
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </>
          ) : (
            " "
          )}
        </div>
        <div className="ml-[-10px] ">
          <Link to="/" className="text-3xl ">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="">
        <ul className="flex  justify-center gap-7">
          <div className="relative">
            <Link to={"wishlist"}>
              <img src={wishlist} alt="" />
            </Link>
            <p className="absolute bottom-5 left-5  bg-gray-900 text-gray-100 w-5 h-5 rounded-full flex items-center justify-center">
              0
            </p>
          </div>
          <div className="relative">
            <li>
              <img
                // onClick={() => setCartmodal(!cartmodal)}
                src={cart}
                className="cursor-pointer"
                alt=""
              />
            </li>
            <p className="absolute bottom-5 left-4  bg-gray-900 text-gray-100 w-5 h-5 rounded-full flex items-center justify-center">
              0
            </p>
          </div>
          <div className="dropdown dropdown-end ">
            <label tabIndex="0" className="">
              <img
                src={avatar}
                onClick={handleHide}
                className="w-8 h-8  cursor-pointer"
                alt=""
              />
            </label>
            {hide ? (
              ""
            ) : (
              <>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to={"/my-account"}>My Account</Link>
                  </li>
                  {user ? (
                    <Logout />
                  ) : (
                    <>
                      <li>
                        <Link to={"/register"}>Register</Link>
                      </li>
                      <li>
                        <Link to={"/login"}>Login</Link>
                      </li>
                    </>
                  )}
                </ul>
              </>
            )}
          </div>
        </ul>
      </div>
      {/* <Cartmodal cartmodal={cartmodal} /> */}
    </div>
  );
};

export default Submenu;
