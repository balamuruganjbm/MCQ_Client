import React from "react";
import { NavLink } from "react-router-dom";
export default function DisplayResult(props) {
  const count = props.count;
  const showResult = count => {
    switch (true) {
      case count < 5:
        return (
          <div>
            <h3>Your Mark : {count}</h3>
            <h5>Needs to improve 😀</h5>
          </div>
        );

      case count < 7:
        return (
          <div>
            <h3>Your Mark : {count}</h3>
            <h5>Good 😋</h5>
          </div>
        );

      case count < 9:
        return (
          <div>
            <h3>Your Mark : {count}</h3>
            <h5>Great 🤩</h5>
          </div>
        );
      case count <= 10:
        return (
          <div>
            <h3>Your Mark : {count}</h3>
            <h5>Excellent 🔥🔥</h5>
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

  return (
    <div>
      {showResult(count)}{" "}
      <NavLink
        className={`waves-effect center waves-light pink btn-large`}
        style={{ width: "100%" }}
        to="/"
      >
        Back To Main Menu
      </NavLink>
    </div>
  );
}
