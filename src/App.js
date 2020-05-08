import React, { useEffect } from "react";
import networkRequests from "./services/networkRequests";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import SignUp from "./Components/signup";
import LogIn from "./Components/login";
import { useDispatch } from "react-redux";
import { isLoggedIn } from "./actions/index";
import Home from "./Pages/Home";
import Question from "./Pages/Question";
export default function App() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === "/") {
      history.replace("/home");
    }
    networkRequests("/api/user/isLoggedIn")
      .then(res => {
        if (res.message === "Success") {
          dispatch(isLoggedIn());
        }
      })
      .catch(console.error);
  }, []);
  return (
    <Switch>
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/login" render={() => <LogIn />} />
      <Route exact path="/signup" render={() => <SignUp />} />
      <Route
        exact
        path="/quiz/:category/:difficulty"
        render={routeProps => (
          <Question
            category={routeProps.match.params.category}
            difficulty={routeProps.match.params.difficulty}
          />
        )}
      />
      <Route
        render={() => (
          <h1 className="center red-text">Error 404 Page Not Found ... :( </h1>
        )}
      />
    </Switch>
  );
}
