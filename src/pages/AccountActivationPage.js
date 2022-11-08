import React, { useEffect, useState } from "react";
import { activate } from "../api/apiCalls";
import Alert from "./../components/Alert";
import Spinner from "./../components/Spinner";

const AccountActivationPage = (props) => {
  const [result, setresult] = useState();
  // useEffect(() => {
  //   setresult();
  //   activate(props.match.params.token)
  //     .then(() => {
  //       setresult("success");
  //     })
  //     .catch(() => {
  //       setresult("fail");
  //     });
  // }, [props.match.params.token]);

  useEffect(() => {
    async function activateRequest() {
      setresult();
      try {
        await activate(props.match.params.token);
        setresult("success");
      } catch (error) {
        setresult("fail");
      }
    }

    activateRequest();
  }, [props.match.params.token]);

  let content = (
    <Alert type="secondary" center>
      <Spinner size="big" />
    </Alert>
  );
  if (result === "success") {
    content = <Alert>Account is activated</Alert>;
  } else if (result === "fail") {
    content = <Alert type="danger">Activation failure</Alert>;
  }

  return <div data-testid="activation-page">{content}</div>;
};

export default AccountActivationPage;
