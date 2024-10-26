import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import auth from "../firebase/firebase";

const Register = () => {
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState(false);

  const registerUser = () => {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerUser();
        }}
      >
        <input type="email" required ref={email} />
        <input type="password" required ref={password} />
        <button type="submit">Register</button>
      </form>
      {error && error}
    </div>
  );
};

export default Register;
