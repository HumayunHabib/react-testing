import React, { useState } from "react";
import axios from "axios";
const SignUpPage = () => {
  const [disabled, setdisabled] = useState(true);
  const [password, setpassword] = useState("");
  const [passwordRepeat, setpasswordRepeat] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");

  const onChangePassword = (event) => {
    const currentValue = event.target.value;
    setpassword(currentValue);
    setdisabled(currentValue !== passwordRepeat);
  };
  const onChangePasswordRepeat = (event) => {
    const currentValue = event.target.value;
    setpasswordRepeat(currentValue);
    setdisabled(currentValue !== password);
  };
  const onChangeUsername = (event) => {
    const currentValue = event.target.value;
    setusername(currentValue);
  };
  const onChangeEmail = (event) => {
    const currentValue = event.target.value;
    setemail(currentValue);
  };

  const submit = (e) => {
    e.preventDefault();
    const body = {
      username,
      email,
      password,
    };
    // axios.post("/api/1.0/users", body);
    fetch("/api/1.0/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <div>
      <form>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input id="username" onChange={onChangeUsername} />
        <label htmlFor="email">E-mail</label>
        <input id="email" onChange={onChangeEmail} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={onChangePassword} />
        <label htmlFor="passwordRepeat">Password Repeat</label>
        <input
          id="passwordRepeat"
          type="password"
          onChange={onChangePasswordRepeat}
        />
        <button
          disabled={disabled || password === "" || passwordRepeat === ""}
          onClick={submit}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
