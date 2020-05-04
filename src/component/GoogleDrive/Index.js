import React, { useState } from "react";
import Search from "../algolia/Search";
import { GoogleLogin } from "react-google-login";
import config from "../../config";

export default function Index() {
  const [data, setData] = useState(false);
  const responseGoogle = (response) => {
    console.log(response.tokenObj.access_token);
    const obj = {};
    obj.access_token = response.tokenObj.access_token;
    fetch(config.updateGoogleDataApi, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    setData(true);
  };
  return (
    <div>
      {data ? (
        <Search />
      ) : (
        <GoogleLogin
          className="button"
          clientId={config.googleClientId}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          scope={config.googleDriveScope}
          cookiePolicy={"single_host_origin"}
        />
      )}
      <br></br>
    </div>
  );
}
