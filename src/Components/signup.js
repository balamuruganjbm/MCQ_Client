import React from "react";
import useFormChange from "../hooks/useFormChange";
import networkRequests from "../services/networkRequests";
import { useHistory, NavLink } from "react-router-dom";
export default function SignUp() {
  const history = useHistory();
  const [name, setName] = useFormChange("");
  const [email, setEmail] = useFormChange("");
  const [password, setPassword] = useFormChange("");
  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { name, email, password };
    networkRequests("/api/user/signup", "POST", newUser).then(res => {
      res.message === "Success"
        ? history.push("/login")
        : history.push("/signup");
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
              <p className="center">SIGN UP</p>
            </div>

            <div className="row">
              <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter your name"
                      id="first_name"
                      type="text"
                      value={name}
                      onChange={setName}
                      required
                    />
                    <label htmlFor="first_name" className="active">
                      Student Name
                    </label>
                  </div>
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
                      className={`waves-effect center waves-light pink btn-large`}
                      style={{ width: "100%" }}
                      value="SIGN UP"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="card-action">
              <p>
                Already a member?
                <NavLink to="/login" className="teal-text">
                  {" "}
                  LOGIN
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
