import React, { useState } from "react";
import auth from "../firebase/firebase";
import { signOut } from "firebase/auth";

const Home = () => {
  const logout = () => {
    
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLogout(true)
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
