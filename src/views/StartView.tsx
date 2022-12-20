import { useContext, useRef } from "react";

import classes from "./StartView.module.css";
import Config from "../config/QuizConfig";
import Context from "../context/QuizContext";

import { fetchQuestions } from "../api/FetchQuestion";
import { QuestionDifficulties } from "../enums/QuestionDifficulties";
import { useShuffleAnswers } from "../utilities/useShuffleArray";
import { Views } from "../enums/Views";

const StartView = () => {
  const {
    setAnswerOptions,
    setDifficulty,
    setPlayerName,
    setQuestion,
    setView,
  } = useContext(Context);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const difficultyRef = useRef<HTMLSelectElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const shuffleCategories = Config.categories.sort(() => 0.5 - Math.random());

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const pickedCategory = categoryRef.current!.value;
    let pickedDifficulty = difficultyRef.current!.value;
    const enteredName = nameRef.current!.value;

    setDifficulty(pickedDifficulty);
    setPlayerName(enteredName);
    if (pickedDifficulty === "random") {
      let randomizeDifficulties = Object.values(QuestionDifficulties).sort(
        () => 0.5 - Math.random()
      );
      pickedDifficulty = randomizeDifficulties[0];
    }

    const fetchQuestion = async () => {
      const newQuestion = await fetchQuestions(
        pickedCategory,
        pickedDifficulty
      );
      setQuestion(newQuestion);

      setAnswerOptions(
        useShuffleAnswers(
          newQuestion[0]?.correctAnswer,
          newQuestion[0]?.incorrectAnswers
        )
      );
    };
    fetchQuestion();
    setView(Views.QUESTION);
  };
  return (
    <section className={classes["start-view"]}>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          Enter your name
          <input
            type="text"
            id="name"
            data-testid="playername-input"
            placeholder="Your name"
            ref={nameRef}
          />
        </label>
        <label htmlFor="category">
          Choose category:
          <select data-testid="select-category" id="category" ref={categoryRef}>
            {shuffleCategories?.slice(0, 3).map((category) => (
              <option key={category.id}>{category.name}</option>
            ))}
          </select>
        </label>
        <label htmlFor="difficulty">
          Choose difficulty:
          <select
            data-testid="select-difficulty"
            id="difficulty"
            ref={difficultyRef}
          >
            {Object.values(QuestionDifficulties).map((difficulty) => (
              <option key={difficulty}>{difficulty}</option>
            ))}
            <option key="random">random</option>
          </select>
        </label>
        <label htmlFor="start">
          <button data-testid="start-quiz-button" id="start">
            Start quiz
          </button>
        </label>
      </form>
    </section>
  );
};

export default StartView;
