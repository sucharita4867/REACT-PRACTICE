// import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthCOntext";
import { useContext } from "react";
// import { auth } from "../../Firebase/Firebase.init";

const Register = () => {
  const createUser = useContext(AuthContext);
  console.log(createUser);
  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   createUser(email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   console.log(email, password);

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };
  return (
    <div className="card bg-base-100 w-full my-10 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Register!</h1>
        <form>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
            />
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
            <button className="btn btn-neutral mt-4">Registered</button>
          </fieldset>
          <p>
            Already have an account? Please{" "}
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
