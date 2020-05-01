import React, { useState } from "react";
import Search from "../algolia/Search";
import { GoogleLogin } from "react-google-login";

export default function Index() {
  const [data, setData] = useState(false);

  const responseGoogle = (response) => {
    //console.log(response);
    setData(true);
  };
  return (
    <div>
      {data ? (
        <Search />
      ) : (
        <GoogleLogin
          className="button"
          clientId="777169248230-sh8m6vvm0e8ohc3ptf1dedatdhi9tacr.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      <br></br>
    </div>
  );
}
