import React, { useState } from "react";
import useFormChange from "../hooks/useFormChange";
import networkRequests from "../services/networkRequests";
import { useHistory, NavLink } from "react-router-dom";
export default function LogIn() {
  const [email, setEmail] = useFormChange("");
  const [password, setPassword] = useFormChange("");
  const [warning, setWarning] = useState(null);
  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    const oldUser = { email, password };
    networkRequests("/api/user/signin", "POST", oldUser).then(res => {
      if (res.message === "Success") {
        localStorage.setItem("jwtToken", res.jwtToken);
        localStorage.setItem("userId", res.id);
        localStorage.setItem("score", res.score);
        history.replace("/home");
      } else {
        if (res.error) setWarning(res.error);
      }
    });
  };
  return (
    <div
      className="row container "
      style={{ marginLeft: "30%", marginTop: "5%" }}
    >
      <div className="col s12 m7">
        <div className="card">
          <div className="card-content">
            <div className="card-title">
              <p className="center">LOG IN</p>
            </div>
            {warning ? (
              <div className="row">
                <div className="col s12">
                  <p className="red-text center">{warning}</p>
                </div>
              </div>
            ) : null}
            <div className="row">
              <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter your Email ID"
                      id="email"
                      type="email"
                      value={email}
                      onChange={setEmail}
                      required
                    />
                    <label htmlFor="email" className="active">
                      Email ID
                    </label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter your password"
                      id="pass"
                      type="password"
                      value={password}
                      onChange={setPassword}
                      required
                    />
                    <label htmlFor="pass" className="active">
                      Password
                    </label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      type="submit"
                      className={`waves-effect center waves-light purple btn-large`}
                      style={{ width: "100%" }}
                      value="LOG IN"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="card-action">
              <p>
                Not a member? <br />
                <NavLink to="/signup" className="teal-text">
                  click to Register
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
