import React, { useRef } from "react";

const UnControlledField = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSUbmit = (e) => {
    e.preventDefault();
    //     console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSUbmit}>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id=""
          placeholder="email"
        />
        <br />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id=""
          placeholder="password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlledField;
