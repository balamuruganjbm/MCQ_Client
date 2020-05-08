import React from "react";
import { useHistory } from "react-router-dom";
export default function HeaderInfo() {
  const score = localStorage.getItem("score");
  const history = useHistory();
  const handleLogoff = () => {
    localStorage.setItem("jwtToken", "");
    localStorage.setItem("userId", "");
    localStorage.setItem("score", "");
    history.replace("/login");
  };
  return (
    <nav>
      <div className="nav-wrapper teal">
        <h5 className="brand-logo left">Your Latest Score : {score}</h5>
        <ul
          id="nav-mobile"
          className="right"
          style={{ marginTop: "10px", marginRight: "30px" }}
        >
          <li>
            <button
              className="btn right black-text green accent-2"
              onClick={handleLogoff}
            >
              LOG OUT
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
