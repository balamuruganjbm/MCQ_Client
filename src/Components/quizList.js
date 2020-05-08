import React, { useState, useEffect } from "react";
import Quiz from "./quiz";
import { useHistory } from "react-router-dom";
import DisplayResult from "./displayResult";
import QuizHeader from "./quizHeader";
export default function QuizList({ category, difficulty }) {
  const [quizList, setquizList] = useState(null);
  const [counter, setCounter] = useState(0);
  const [ansCount, setAnsCount] = useState(0);
  const history = useHistory();
  const APIURL = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple&encode=url3986`;

  useEffect(() => {
    fetch(APIURL)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else throw Error("network request failed!!");
      })
      .then(result => {
        setquizList(result.results);
      })
      .catch(error => {
        history.replace("/home");
      });
  }, [APIURL]);
  const nextQuestion = () => {
    setCounter(counter + 1);
  };
  function handleAnsCount() {
    setAnsCount(ansCount + 1);
  }
  return quizList != null ? (
    counter < 10 ? (
      <div>
        <QuizHeader qnCount={counter} />
        <Quiz
          question={quizList[counter].question}
          crctAns={quizList[counter].correct_answer}
          incrtAns={quizList[counter].incorrect_answers}
          nextQn={() => nextQuestion()}
          ansCount={() => handleAnsCount()}
          count={counter}
        />
      </div>
    ) : (
      <div className="container center">
        <DisplayResult count={ansCount} />
      </div>
    )
  ) : (
    <></>
  );
}
