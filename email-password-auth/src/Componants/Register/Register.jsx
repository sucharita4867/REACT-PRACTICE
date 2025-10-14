import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase/Firebase.init";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handelRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const terms = e.target.terms.checked;
    const password = e.target.password.value;
    console.log("register btn clicked", email, password, terms);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/;
    // const desidPattern = /^.{6,}$/;
    // const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    // const spcalCharectorPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).+$/;
    // if (!desidPattern.test(password)) {
    //   console.log("password didnt match");
    //   setError("password must be 6 character or longer");
    //   return;
    // } else if (!casePattern.test(password)) {
    //   setError(
    //     "password must have at least one uppercase and loarcase character"
    //   );
    //   return;
    // } else if (!spcalCharectorPattern.test(password)) {
    //   setError(
    //     "Password must contain at least one uppercase letter, one lowercase letter, and one special character (@, $, !, %, *, ?, &)."
    //   );
    //   return;
    // }
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one special character (@, $, !, %, *, ?, &)."
      );
      return;
    }

    // reset stauts
    setError("");
    setSuccess(false);
    if (!terms) {
      setError("Please accept out terms and conditions");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        e.target.reset();
        // send verification email
        sendEmailVerification(result.user).then(() => {
          alert("Please login to your email and verification email address");
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handlePasswordToggle = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handelRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    onClick={handlePasswordToggle}
                    className="btn btn-xs absolute top-2 right-5"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div>
                  <label className="label">
                    <input type="checkbox" name="terms" className="checkbox" />
                    Accept Our Terms And Condition
                  </label>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              {success && (
                <p className="text-green-500 font-bold">
                  Account created Successfully
                </p>
              )}
              {error && (
                <p className="text-red-600 font-semibold text-center">
                  {error}
                </p>
              )}
            </form>
            <div>
              <p>
                Allrady have ana account please{" "}
                <Link className="text-blue-700 underline" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
