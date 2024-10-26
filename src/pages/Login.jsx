import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import auth from "../firebase/firebase";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState(false);

  const loginUser = () => {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginUser();
        }}
      >
        <input type="email" required ref={email} />
        <input type="password" required ref={password} />
        <button type="submit">Login</button>
      </form>
      {error && error}
    </div>
  );
};

export default Login;
