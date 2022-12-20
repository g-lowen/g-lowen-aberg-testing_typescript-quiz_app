import { useContext, useEffect, useState } from "react";
import classes from "./QuestionView.module.css";
import Config from "../config/QuizConfig";
import Context from "../context/QuizContext";

import { DifficultyPoints } from "../enums/DifficultyPoints";
import { QuestionDifficulties } from "../enums/QuestionDifficulties";
import { Views } from "../enums/Views";

const QuestionView = () => {
  const {
    answerOptions,
    questionAnswers,
    question,
    setQuestionAnswers,
    setView,
  } = useContext(Context);
  const { answerTime, questionCountDown, totalQuestions } = Config;
  const [countDown, setCoundDown] = useState(questionCountDown);
  const [timer, setTimer] = useState(answerTime + questionCountDown);
  let currentAnswer = { difficultyPoints: 0, timePoints: 0 };

  useEffect(() => {
    if (countDown <= 0) return;
    const countDownInterval = setInterval(() => {
      setCoundDown(countDown - 1);
    }, 1000);
    return () => clearInterval(countDownInterval);
  }, [countDown]);

  useEffect(() => {
    if (timer <= 0) return;
    const timerInterval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      setQuestionAnswers((prevAnswers: object[]) => [
        ...prevAnswers,
        currentAnswer,
      ]);

      if (questionAnswers.length + 1 < totalQuestions) {
        setView("pickCategory");
      } else {
        setView(Views.END);
      }
    }
  }, [timer === 0]);

  const clickHandler = (pickedAnswer: string) => {
    let questionDifficultyType: QuestionDifficulties = question[0]?.difficulty;
    currentAnswer.timePoints = timer;

    if (pickedAnswer === question[0]?.correctAnswer) {
      currentAnswer.difficultyPoints = DifficultyPoints[questionDifficultyType];
    } else {
      currentAnswer.difficultyPoints = DifficultyPoints["wrong"];
    }

    setQuestionAnswers((prevAnswers: object[]) => [
      ...prevAnswers,
      currentAnswer,
    ]);

    if (questionAnswers.length + 1 < totalQuestions) {
      setView(Views.PICK_CATEGORY);
    } else {
      setView(Views.END);
    }
  };

  return (
    <>
      {countDown > 0 ? (
        countDown
      ) : (
        <>
          <div className={classes.question}>
            <h4>Category: {question[0]?.category}</h4>
            <p>{question[0]?.question} </p>
          </div>
          <div className={classes["question-container"]}>
            {answerOptions?.map((answer: string, index: number) => {
              return (
                <button
                  data-testid="answer-button"
                  key={index}
                  onClick={() => clickHandler(answer)}
                >
                  {answer}
                </button>
              );
            })}
          </div>
          {timer}
        </>
      )}
    </>
  );
};

export default QuestionView;
