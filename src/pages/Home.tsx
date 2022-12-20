import React, { useState } from "react";
import classes from "./Home.module.css";
import Config from "../config/QuizConfig";
import Context from "../context/QuizContext.js";

import { Points } from "../interfaces/IPoints";
import { Question } from "../interfaces/IQuestion";
import { Views } from "../enums/Views";

import GameOverView from "../views/GameOverView";
import PickCategoryView from "../views/PickCategoryView";
import QuestionView from "../views/QuestionView";
import Spinner from "../components/spinner/Spinner";
import StartView from "../views/StartView";

const Home: React.FC = () => {
  const [answerOptions, setAnswerOptions] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>();
  const [playerName, setPlayerName] = useState<string>("");
  const [question, setQuestion] = useState<Question>();
  const [questionAnswers, setQuestionAnswers] = useState<Points[]>([]);
  const [view, setView] = useState<Views>(Views.START);

  const { totalQuestions } = Config;

  return (
    <Context.Provider
      value={{
        answerOptions,
        category,
        difficulty,
        playerName,
        question,
        questionAnswers,
        setAnswerOptions,
        setCategory,
        setDifficulty,
        setPlayerName,
        setQuestion,
        setQuestionAnswers,
        setView,
      }}
    >
      <section className={classes.home}>
        <header>
          <p>
            {questionAnswers.length + 1} / {totalQuestions}
          </p>
          <p>{playerName}</p>
          <h1>
            Quiz <Spinner /> Time
          </h1>
        </header>
        <section className={classes["view-container"]}>
          {view === "start" && <StartView />}
          {view === "question" && <QuestionView />}
          {view === "pickCategory" && <PickCategoryView />}
          {view === "end" && <GameOverView />}
        </section>

        {/* Only used for toggling between views for styling purposes */}
        {/* <button onClick={() => setView("start")}>Start</button>
        <button onClick={() => setView("pickCategory")}>Category</button>
        <button onClick={() => setView("question")}>Question</button>
        <button onClick={() => setView("end")}>End</button> */}
      </section>
    </Context.Provider>
  );
};

export default Home;
