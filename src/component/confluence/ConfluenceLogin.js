import React, { useState } from "react";
import SearchJira from "./SearchConfluence";
import config from "../../config";
export default function ConfluenceLogin() {
  const [state, setState] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [host, setHost] = useState();

  const handleSubmit = (event) => {
    const obj = {
      host,
      username,
      password,
    };

    fetch(config.confluenceAuthApi, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((result) => result.json())
      .then((states) => {
        setState(true);
      })
      .catch((error) => {
        setState(false);
      });
    event.preventDefault();
  };
  return (
    <div>
      {state ? (
        <SearchJira />
      ) : (
        <div className="jira-login">
          <form onSubmit={handleSubmit}>
            <div className="jira-form">
              <label htmlFor="url" className="jira-label">
                Enter your host :
              </label>
              <input
                id="url"
                type="text"
                className="jira-input"
                placeholder="https://your-domain.atlassian.net"
                onChange={(input) => setHost(input.target.value)}
              />
            </div>

            <div className="jira-form">
              <label htmlFor="name" className="jira-label">
                Enter your register email :
              </label>
              <input
                id="username"
                type="text"
                className="jira-input"
                placeholder="example@xyz.com"
                onChange={(input) => setUsername(input.target.value)}
              />
            </div>
            <div className="jira-form">
              <label htmlFor="name" className="jira-label">
                Enter your api token :
                <a
                  href="https://id.atlassian.com/manage-profile/security/api-tokens"
                  data-toggle="tooltip"
                  className="jira-anchor"
                  title="click on it to genrate token"
                >
                  !
                </a>
              </label>
              <input
                id="password"
                type="password"
                className="jira-input"
                onChange={(input) => setPassword(input.target.value)}
              />
            </div>
            <div className="jira-form">
              <button type="submit" className="jira-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
