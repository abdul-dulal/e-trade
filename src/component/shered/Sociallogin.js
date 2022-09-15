import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import auth from "../../FirebaseInit";

const Sociallogin = () => {
  const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading] = useSignInWithGithub(auth);
  const [signInWithFacebook, fbUser, fbLoading] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  if (gUser || gitUser || fbUser) {
    navigate("/");
  }

  if (gLoading || gitLoading || fbLoading) {
    return <Loading />;
  }

  return (
    <div className="text-center ">
      <div className=" mt-8">
        <button onClick={() => signInWithGoogle()}>
          <AiOutlineGoogle
            title="Login With Google"
            className="text-4xl  text-white  p-2 bg-[#DB4437] hover:text-white duration-1000 rounded-full "
          />
        </button>
        <button onClick={() => signInWithGithub()}>
          <FaFacebookF className="text-4xl  text-white  p-2 bg-[#4867AA] hover:text-white duration-1000 rounded-full ml-5" />
        </button>
        <button onClick={() => signInWithFacebook()}>
          <AiOutlineGithub className="text-4xl  text-white  p-2 bg-[#161B22] hover:text-white duration-1000 rounded-full ml-5 " />
        </button>
      </div>
    </div>
  );
};

export default Sociallogin;
