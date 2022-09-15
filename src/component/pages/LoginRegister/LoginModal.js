import React from "react";
import { useForm } from "react-hook-form";
import login from "../../../assets/login-vector.png";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../FirebaseInit";
import Loading from "../../shered/Loading";
import Sociallogin from "../../shered/Sociallogin";
import remove from "../../../assets/icon/delete.png";
const LoginModal = ({ openLogin, setOpenLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let errorElement = "";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (error) {
    errorElement = error.message;
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {openLogin ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0   z-50 mt-8 ">
            <div className=" lg:w-7/12 md:w-4/5 m-auto mt-10">
              <img
                src={remove}
                onClick={() => setOpenLogin(false)}
                className="cursor-pointer border-2 border-white"
                alt=""
              />
              <div className=" rounded   bg-white  ">
                <div className="grid lg:grid-cols-2    ">
                  <div
                    className="bg-[#0D6EFD] p-4  py-20 text-white
                   "
                  >
                    <h1 className="text-3xl font-serif">Login</h1>
                    <p className="text-[18px] mt-2">
                      To keep connected with us please login with your personal
                      info
                    </p>
                    <img src={login} alt="" />
                  </div>
                  <div className="lg:my-20">
                    <div>
                      <p className="text-2xl font-serif text-center lg:mt-0 md:mt-5 mt-5">
                        Login with Social Profile
                      </p>
                      <Sociallogin />
                    </div>
                    <div class="divider">Or Email Account</div>
                    <div className="w-full flex items-center justify-center">
                      <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div>
                            <input
                              type="email"
                              placeholder="Enter Your Email"
                              {...register("email", {
                                required: {
                                  value: true,
                                  message: "Please Enter Email",
                                },
                                pattern: {
                                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                  message: "add special digit",
                                },
                              })}
                              className="input input-bordered input-accent my-3 placeholder:text-purple-400 w-full max-w-xs"
                            />
                          </div>
                          <label>
                            {errors.email?.type === "required" && (
                              <span className="label-text-alt text-red-500 text-xl">
                                {errors.email.message}.
                              </span>
                            )}
                            {errors.email?.type === "pattern" && (
                              <span className="label-text-alt text-red-500  ">
                                {errors.email.message}
                              </span>
                            )}
                          </label>

                          <label>
                            {errors.email?.type === "pattern" && (
                              <span className="label-text-alt text-red-500">
                                {errors.email.message}
                              </span>
                            )}
                          </label>
                          <div>
                            <input
                              type="password"
                              placeholder="Enter Your Password"
                              {...register(
                                "password",
                                {
                                  required: {
                                    value: true,
                                    message: "Pawssword is Required",
                                  },
                                },
                                {
                                  minLength: {
                                    value: 6,
                                    message: "Password must be 6 character",
                                  },
                                }
                              )}
                              className="border-2 border-gray-400 w-80 h-12 px-3   placeholder:text-purple-400 bg-white rounded-md focus:ring"
                            />
                          </div>
                          <label>
                            {errors.password?.type === "required" && (
                              <span className="label-text-alt text-red-500 text-xl">
                                {errors.password.message}
                              </span>
                            )}
                          </label>
                          <label>
                            {errors.password?.type === "minLength" && (
                              <span className="label-text-alt text-red-500">
                                {errors.email.message}
                              </span>
                            )}
                          </label>

                          <div className="flex justify-between my-3">
                            <p>Remember Me</p>
                            <p>Forget Password?</p>
                          </div>

                          <input
                            type="submit"
                            value="Login"
                            className={`w-80 h-12 bg-purple-600 text-white rounded-md mt-3 cursor-pointer 
`}
                          />
                          <p className="text-xl text-red-700">
                            {errorElement.slice(16)}
                          </p>
                        </form>
                      </div>
                    </div>
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
