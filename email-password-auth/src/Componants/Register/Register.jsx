import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase/Firebase.init";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const handelRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("register btn clicked", email, password);

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

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        e.target.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
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
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
