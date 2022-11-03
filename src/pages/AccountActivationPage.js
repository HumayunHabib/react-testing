import React, { useEffect, useState } from "react";
import { activate } from "../api/apiCalls";

const AccountActivationPage = (props) => {
  const [result, setresult] = useState();
  useEffect(() => {
    activate(props.match.params.token)
      .then(() => {
        setresult("success");
      })
      .catch(() => {
        setresult("fail");
      });
  }, []);

  return (
    <div data-testid="activation-page">
      {result === "success" && (
        <div className="alert alert-success mt-3">Account is activated</div>
      )}
      {result === "fail" && (
        <div className="alert alert-danger mt-3">Activation failure</div>
      )}
    </div>
  );
};

export default AccountActivationPage;
