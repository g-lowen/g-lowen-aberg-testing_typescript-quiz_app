import { Category } from "../interfaces/ICategory";

const CATEGORIES: Category[] = [
  { id: "arts_and_literature", name: "Arts & Literature" },
  { id: "film_and_tv", name: "Film & TV" },
  { id: "food_and_drink", name: "Food & Drink" },
  { id: "general_knowledge", name: "General Knowledge" },
  { id: "geography", name: "Geography" },
  { id: "history", name: "History" },
  { id: "music", name: "Music" },
  { id: "science", name: "Science" },
  { id: "society_and_culture", name: "Society & Culture" },
  { id: "sport_and_leisure", name: "Sport & Leisure" },
];

const ANSWER_TIME = 30;
const QUESTION_COUNTDOWN = 3;
const TOTAL_QUESTIONS = 9;

const Config = {
  answerTime: ANSWER_TIME,
  categories: CATEGORIES,
  questionCountDown: QUESTION_COUNTDOWN,
  totalQuestions: TOTAL_QUESTIONS,
};

export default Config;
