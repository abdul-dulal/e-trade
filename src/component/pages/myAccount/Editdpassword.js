import React from "react";

const Editpassword = () => {
  return (
    <div className="ml-20 mt-0">
      <div className="">
        <label className="font-semibold uppercase text-sm">
          Current Password
        </label>{" "}
        <br />
        <input
          type="text"
          class=" lg:w-96 px-2 h-10 mt-3 focus:outline rounded-md  "
        />
      </div>
      <div className="mt-5">
        <label className="font-semibold uppercase text-sm">New Password</label>{" "}
        <br />
        <input
          type="text"
          class=" lg:w-96 px-2 h-10 mt-3 focus:outline rounded-md  "
        />
      </div>
      <div className="mt-5">
        <label className="font-semibold uppercase text-sm">
          Confirm password
        </label>{" "}
        <br />
        <input
          type="text"
          class=" lg:w-96 px-2 h-10 mt-3 focus:outline rounded-md  "
        />
      </div>
      <button className="bg-purple-600 hover:bg-gray-600 text-white px-6 py-2 rounded-sm mt-5 font-semibold">
        Save Change
      </button>
    </div>
  );
};

export default Editpassword;
