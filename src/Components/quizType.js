import React, { useState } from "react";
import RadioButton from "./radioButton";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function QuizType() {
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const history = useHistory();

  const categoryList = [
    {
      value: 9,
      label: "General Knowledge"
    },
    {
      value: 18,
      label: "Computer Science"
    },
    {
      value: 24,
      label: "Politics"
    },
    {
      value: 21,
      label: "Sports"
    },
    {
      value: 11,
      label: "Entertainment"
    }
  ];
  const difficultyList = [
    {
      value: "easy",
      label: "Easy"
    },
    {
      value: "medium",
      label: "medium"
    },
    {
      value: "hard",
      label: "hard"
    }
  ];
  const handleCatChange = val => {
    setCategory(val);
  };
  const handleDiffChange = val => {
    setDifficulty(val);
  };
  const categoryRadioList = categoryList.map(cat => {
    return (
      <RadioButton
        key={uuid()}
        handleChange={handleCatChange}
        name="Category"
        value={cat.value}
        label={cat.label}
      />
    );
  });
  const difficultyRadioList = difficultyList.map(diff => {
    return (
      <RadioButton
        key={uuid()}
        handleChange={handleDiffChange}
        name="difficulty"
        value={diff.value}
        label={diff.label}
      />
    );
  });
  const handleClick = () => {
    history.push(`/quiz/${category}/${difficulty}`);
  };

  return (
    <div className="container">
      <div>
        <h3>Select Category</h3>
        {categoryRadioList}
      </div>
      <div>
        <h3>Select difficulty Level</h3>
        {difficultyRadioList}
      </div>
      {category && difficulty ? (
        <div className="center">
          <button
            onClick={handleClick}
            className="waves-effect waves-light pink accent-2 btn-large"
          >
            Click To Start Quiz
          </button>
        </div>
      ) : null}
    </div>
  );
}
