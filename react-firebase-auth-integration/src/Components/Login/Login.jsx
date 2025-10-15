import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthCOntext";

const Login = () => {
  const signInUser = use(AuthContext)

  const handleLogIn ()=>{
    
  }
  return (
    <div className="card bg-base-100 w-full my-10 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Login!</h1>
        <form>
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p>
            New to our website? Please{" "}
            <Link to="/register" className="text-blue-600 underline">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
