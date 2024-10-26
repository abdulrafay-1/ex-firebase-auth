import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "./firebase/firebase";

const ProtectedLayout = ({ childern }) => {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid);
      } else {
        setIsLogin(false);
        navigate("/login");
      }
    });
  }, []);
  return isLogin && childern;
};

export default ProtectedLayout;
