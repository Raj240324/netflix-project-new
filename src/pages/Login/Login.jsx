import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="main-container">
      <NavLink exact to="/">
        <img src={logo} alt="" style={{ width: 150 }} />
      </NavLink>
      <div className="container">
        <h2>{signState}</h2>
        <div className="input-container">
          {signState === "Sign Up" ? (
            <>
            <input type="text" placeholder="Enter Your Name" {...register("name", {required: "Please enter your input field"})} />
            <p>{errors?.name?.message}</p>
            </>
          ) : (
            <></>
          )}

          <input type="email" placeholder="Enter Your Email" {...register("email", {required: "Please enter your input field"})} />
          <p>{errors?.email?.message}</p>
          <input type="password" placeholder="Enter Password" {...register("password", {required: "Please enter your input field"})} />
          <p>{errors?.password?.message}</p>
          <button className="sign-btn" onClick={handleSubmit(onSubmit)}>{signState}</button>
        </div>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="checkbox">Remember Me</label>
          </div>
          <p>Need help?</p>
        </div>
        <div className="sign-content">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have Account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
