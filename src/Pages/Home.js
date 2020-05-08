import React, { useEffect, useState } from "react";
import QuizType from "../Components/quizType";
import { useDispatch, useSelector } from "react-redux";
import networkRequests from "../services/networkRequests";
import { isLoggedIn } from "../actions/index";
import { useHistory } from "react-router-dom";
import HeaderInfo from "../Components/headerInfo";

export default function Home() {
  const dispatch = useDispatch();
  const loginStatus = useSelector(state => state.isLoggedIn);
  const history = useHistory();
  const [loader, setloader] = useState(false);
  setTimeout(() => {
    setloader(true);
  }, 2000);
  useEffect(() => {
    networkRequests("/api/user/isLoggedIn").then(res => {
      if (res.message === "Success") {
        dispatch(isLoggedIn());
      } else {
        if (!loginStatus) {
          history.replace("/login");
          return;
        }
      }
    });
  }, []);

  return loader && loginStatus ? (
    <>
      <HeaderInfo />
      <QuizType />
    </>
  ) : (
    <div
      className="preloader-wrapper big active"
      style={{ position: "absolute", left: "50%", top: "50%" }}
    >
      <div className="spinner-layer spinner-blue">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  );
}
