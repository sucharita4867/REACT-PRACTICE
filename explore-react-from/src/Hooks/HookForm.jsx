import React from "react";
import UseInputField from "./UseInputField";

const HookForm = () => {
  const [name, nameOnChange] = UseInputField("");
  const [email, emailOnChange] = UseInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name, email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue={name}
          name="name"
          onChange={nameOnChange}
          placeholder="name"
        />
        <br />
        <input
          type="email"
          defaultValue={email}
          name="email"
          onChange={emailOnChange}
          placeholder="email"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
