import React, { useEffect, useState } from "react";
import Result from "./result";
import { v4 as uuid } from "uuid";

export default function Quiz({
  question,
  incrtAns,
  crctAns,
  nextQn,
  count,
  ansCount
}) {
  const decodedCrtAns = decodeURIComponent(crctAns);
  const [options, setOptions] = useState([]);
  const [nxtQn, setNxtQn] = useState(false);
  // TO toggle the display for result
  const [ansResult, setAnsResult] = useState(false);
  // To display whether ans is correct or wrong
  const [ans, setAns] = useState(false);

  const decodedQuestion = decodeURIComponent(question);
  const checkAnswer = ans => {
    if (decodedCrtAns === ans) {
      setAnsResult(!ansResult);
      setAns(true);
      ansCount();
      setNxtQn(!nxtQn);
    } else {
      setAnsResult(!ansResult);
      setAns(false);
      setNxtQn(!nxtQn);
    }
  };
  useEffect(() => {
    let options = [crctAns, ...incrtAns];
    function shuffleOptions(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      setOptions(options);
    }
    shuffleOptions(options);
  }, [incrtAns, crctAns]);

  const decodedOptions = options.map(op => {
    const show = nxtQn ? "disabled" : null;
    return (
      <div key={uuid()} className="col s6" style={{ marginBottom: "10px" }}>
        <button
          className={`waves-effect waves-light light-blue btn-large ${show}`}
          style={{ width: "100%" }}
          onClick={() => checkAnswer(decodeURIComponent(op))}
        >
          {decodeURIComponent(op)}
        </button>
      </div>
    );
  });
  function handlenxtQnClick() {
    setNxtQn(!nxtQn);
    setAnsResult(!ansResult);
    nextQn();
  }

  return (
    <div className="container center">
      <h2>{decodedQuestion}</h2>
      <div className="row">{decodedOptions}</div>
      {ansResult ? <Result result={ans} crtAns={decodedCrtAns} /> : null}
      {nxtQn ? (
        count !== 9 ? (
          <button className="btn right" onClick={handlenxtQnClick}>
            <i className="material-icons right">send</i>
            NEXT QUESTION{" "}
          </button>
        ) : (
          <button className="btn right" onClick={handlenxtQnClick}>
            <i className="material-icons right">send</i>
            Finish
          </button>
        )
      ) : null}
    </div>
  );
}
