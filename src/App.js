import React from "react";
import "./styles.css";
import QuizList from "./Components/quizList";
import QuizType from "./Components/quizType";
import { Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <QuizType />} />
      <Route
        exact
        path="/quiz/:category/:difficulty"
        render={routeProps => (
          <QuizList
            category={routeProps.match.params.category}
            difficulty={routeProps.match.params.difficulty}
          />
        )}
      />
    </Switch>
  );
}
