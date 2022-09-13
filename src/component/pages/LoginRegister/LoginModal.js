import React from "react";
import login from "../../../assets/login-vector.png";
const LoginModal = ({ openLogin, setOpenLogin }) => {
  return (
    <div>
      {openLogin ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0   z-50 mt-8 ">
            <div className=" lg:w-7/12 md:w-4/5 m-auto mt-10">
              <div className=" rounded-lg   bg-white  ">
                <div className="flex justify-between mt-2 px-8 pt-4">
                  <button onClick={() => setOpenLogin(false)}>remove</button>
                </div>
                <div className="grid lg:grid-cols-3 gap-6 p-3  ">
                  <div className="bg-primary p-4 ">
                    <h1 className="text-3xl font-serif">Login</h1>
                    <p className="text-[18px] mt-2">
                      To keep connected with us please login with your personal
                      info
                    </p>
                    <img src={login} alt="" />
                  </div>
                  <div>
                    <h1>hello</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoginModal;
