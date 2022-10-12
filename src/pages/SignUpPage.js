import React, { useState } from "react";

const SignUpPage = () => {
  const [disabled, setdisabled] = useState(true);
  const [password, setpassword] = useState("");
  const [passwordRepeat, setpasswordRepeat] = useState("");
  // let disabled = false;
  // setTimeout(() => {
  //   setdisabled(true);
  //   // console.log("updating disabled");
  //   // disabled = true;
  // }, 1000);
  const onChangePassword = (event) => {
    const currentValue = event.target.value;
    setpassword(currentValue);
    setdisabled(currentValue != passwordRepeat);
  };
  const onChangePasswordRepeat = (event) => {
    const currentValue = event.target.value;
    setpasswordRepeat(currentValue);
    setdisabled(currentValue != password);
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <label htmlFor="username">Username</label>
      <input id="username" />
      <label htmlFor="email">E-mail</label>
      <input id="email" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" onChange={onChangePassword} />
      <label htmlFor="passwordRepeat">Password Repeat</label>
      <input
        id="passwordRepeat"
        type="password"
        onChange={onChangePasswordRepeat}
      />
      <button disabled={disabled || password === "" || passwordRepeat === ""}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUpPage;
