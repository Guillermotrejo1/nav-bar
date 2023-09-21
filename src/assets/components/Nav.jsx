import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/Init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function Nav() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "eagles@gmail.com", "123456")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function login() {
    signInWithEmailAndPassword(auth, "eagles@gmail.com", "123456")
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="container">
      {loading ? (
        <>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton__logout"></div>
        </>
      ) : (
        <>
          <img
            className="logo"
            src="https://frontendsimplified.com/_nuxt/img/Frontend%20Simplified%20Logo.853fbda.png"
            alt=""
          />
          <div className="nav__buttons">
            <button className="login" onClick={login}>
              Login
            </button>
            <button className="register" onClick={register}>
              Register
            </button>
            <span className="logout__wrapper">
              <button className="logout" onClick={logout}>
                E
              </button>
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default Nav;
