import React, { useState } from "react";

const ControlledField = () => {
  const [password, setpasswords] = useState("abcd");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  const passwordValue = (e) => {
    console.log(e.target.value);
    setpasswords(e.target.value);
    if (password.length < 6) {
      setError("Password must be 6 character or longer.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder="email" required />
        <br />
        <input
          onChange={passwordValue}
          defaultValue={password}
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControlledField;
