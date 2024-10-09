import React, { useContext, useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../Firebase/FirebaseConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { signInSucess } from "../redux/user/userSlice";

const OAuth = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await axios.post("http://localhost:5000/api/v1/auth/google", {
        email: resultsFromGoogle.user.email,
        name: resultsFromGoogle.user.displayName,
        googlePhotoUrl: resultsFromGoogle.user.photoURL,
      });
      setUser(res.data);
     
      localStorage.setItem("user", JSON.stringify(res.data));
      if (res.data) {
        dispatch(signInSucess(res.data?.user));
      }
      
      
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button type="button" onClick={handleGoogleClick}>
      <spa className="text-black w-full flex text-2xl items-center ">
        <AiFillGoogleCircle className="w-6 h-6 mr-3  " />
        Continue with Google
      </spa>
    </Button>
  );
};

export default OAuth;
