import React from "react";
export default function QuizHeader({ qnCount }) {
  return <h5 className="center  blue-text">Question {qnCount + 1} of 10</h5>;
}
