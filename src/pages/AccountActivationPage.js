import React, { useEffect, useState } from "react";
import { activate } from "../api/apiCalls";

const AccountActivationPage = (props) => {
  const [result, setresult] = useState();
  useEffect(() => {
    setresult();
    activate(props.match.params.token)
      .then(() => {
        setresult("success");
      })
      .catch(() => {
        setresult("fail");
      });
  }, [props.match.params.token]);
  let content = (
    <span className="spinner-border spinner-border" role="status"></span>
  );
  if (result === "success") {
    content = (
      <div className="alert alert-success mt-3">Account is activated</div>
    );
  } else if (result === "fail") {
    content = <div className="alert alert-danger mt-3">Activation failure</div>;
  }
  return (
    <div data-testid="activation-page">
      {result === "success" && (
        <div className="alert alert-success mt-3">Account is activated</div>
      )}
      {result === "fail" && (
        <div className="alert alert-danger mt-3">Activation failure</div>
      )}
      {!result && (
        <span className="spinner-border spinner-border" role="status"></span>
      )}
    </div>
  );
};

export default AccountActivationPage;
