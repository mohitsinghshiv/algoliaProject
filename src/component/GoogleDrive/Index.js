import React from "react";
import Search from "../algolia/Search";
//import googleApi from "../../api/googleApi";
//import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function Index() {
  // const { getToken, updateData } = googleApi;
  // function onUpdate() {
  //   updateData();
  // }
  // const responseGoogle = (response) => {
  //   console.log(response);
  // };
  // const logout = (response) => {
  //   console.log(response);
  // };
  return (
    <div>
      {/* <GoogleLogout
        className="button"
        clientId="777169248230-sh8m6vvm0e8ohc3ptf1dedatdhi9tacr.apps.googleusercontent.com"
        buttonText="Logout"
        onSuccess={logout}
        onFailure={logout}
        cookiePolicy={"single_host_origin"}
      ></GoogleLogout>
      <GoogleLogin
        className="button"
        clientId="777169248230-sh8m6vvm0e8ohc3ptf1dedatdhi9tacr.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <br></br>
      <button className="button" onClick={onUpdate}>
        Update Data
      </button>
      <button className="button" onClick={getToken}>
        AccessToken
      </button> */}
      <Search />
    </div>
  );
}
