import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import networkRequests from "../services/networkRequests";
export default function DisplayResult(props) {
  const count = props.count;
  const showResult = count => {
    switch (true) {
      case count < 5:
        return (
          <div>
            <h3>Your Mark : {count}</h3>
            <h5>Needs to improve ..!</h5>
          </div>
        );

      case count < 7:
        return (
          <div>
            <h3>Your Mark : {count}</h3>
            <h5>Good ..!</h5>
          </div>
        );

      case count < 9:
        return (
          <div>
            <h3>Your Mark : {count}</h3>
            <h5>Great ..!</h5>
          </div>
        );
      case count <= 10:
        return (
          <div>
            <h3>Your Mark : {count}</h3>
            <h5>Excellent ..!</h5>
          </div>
        );
      default:
        return (
          <div>
            <h5>Oops something went wrong .. :(</h5>
          </div>
        );
    }
  };
  useEffect(() => {
    const id = localStorage.getItem("userId");
    networkRequests(`/api/user/${id}`, "POST", { score: count }).then(res => {
      if (res.message === "Success") {
        localStorage.setItem("score", count);
        return;
      }
    });
  }, []);
  return (
    <div>
      {showResult(count)}{" "}
      <NavLink
        className={`waves-effect center waves-light pink btn-large`}
        style={{ width: "100%" }}
        to="/home"
      >
        Back To Main Menu
      </NavLink>
    </div>
  );
}
