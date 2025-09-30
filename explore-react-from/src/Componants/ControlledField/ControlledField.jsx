import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpasswords] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChangeName}
        />
        <input
          type="email"
          onChange={handleEmailChange}
          name="email"
          placeholder="email"
          required
        />
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
