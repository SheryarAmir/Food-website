import React, { useState } from "react";
import { assets } from "../../Assest/assets";
import "./LoginPop.css";
const LoginPop = ({ setShowLogin , showLogin  }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="Login-popUp">
      <form className="Logon-Popup-Container">
        <div className="Logon-Popup-tittle">
          <h2 className=" mx-auto ml-9">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="lgin-pop-Inputs">
          {currentState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="you Name" required />
          )}
          <input type="email" placeholder="you Email" required />
          <input type="password" placeholder="password" required />
        </div>

        <button>
          {currentState === "Sign Up" ? " Create Account" : "Login"}
        </button>

        <div className="Input-condation">
          <input type="checkbox" required />

          <p>By Continuing, I agree a to the trems of use & privacy policy </p>
        </div>
        {currentState === "login" ? (
          <p>
            Creat a new account ?{" "}
            <span className="link" onClick={() => setCurrentState("Sign Up")}>
              Click Here !{" "}
            </span>
          </p>
        ) : (
          <p>
            Already Have an account{" "}
            <span className="link" onClick={() => setCurrentState("login")}>Login Here !</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
