import React from "react";
export default function Result({ result, crtAns }) {
  return result ? (
    <div>
      <button
        className={`waves-effect center waves-light light-green btn-large`}
        style={{ width: "100%", pointerEvents: "none" }}
      >
        {crtAns}
      </button>
      <h4 className="center green-text">Correct Answer..!</h4>
    </div>
  ) : (
    <div>
      <h4 className="center red-text">
        Wrong Answer.. :( <br />
        Correct Answer is
      </h4>
      <button
        className={`waves-effect center waves-light pink btn-large`}
        style={{ width: "100%", pointerEvents: "none", marginBottom: "10px" }}
      >
        {crtAns}
      </button>
    </div>
  );
}
