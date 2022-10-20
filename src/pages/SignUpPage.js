import React, { useState } from "react";
import axios from "axios";
const SignUpPage = () => {
  const [disabled, setdisabled] = useState(true);
  const [apiProgress, setapiProgress] = useState(false);
  const [password, setpassword] = useState("");
  const [passwordRepeat, setpasswordRepeat] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [errors, setErrors] = useState({});

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
    // After using msw both type of api calls works now
    setapiProgress(true);
    axios.post("/api/1.0/users", body);
    // fetch("/api/1.0/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // });
  };

  return (
    <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 ">
      <form className="card mt-5">
        <div className="card-header">
          <h1 className="text-center">Sign Up</h1>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              onChange={onChangeUsername}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            {" "}
            <label className="form-label" htmlFor="email">
              E-mail
            </label>
            <input
              className="form-control"
              id="email"
              onChange={onChangeEmail}
            />
          </div>
          <div className="mb-3">
            {" "}
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              id="password"
              type="password"
              onChange={onChangePassword}
            />
          </div>
          <div className="mb-3">
            {" "}
            <label className="form-label" htmlFor="passwordRepeat">
              Password Repeat
            </label>
            <input
              className="form-control"
              id="passwordRepeat"
              type="password"
              onChange={onChangePasswordRepeat}
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary"
              disabled={
                disabled ||
                password === "" ||
                passwordRepeat === "" ||
                apiProgress
              }
              onClick={submit}
            >
              {apiProgress && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                ></span>
              )}
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
