// we fetch those questions from opentdb website. we can pick the type of questions,the amount and the dificulty.
// here we have a 10 questions as an amount, nature as a category ,easy, middle and hard for the difficulty and multiple choices as a type.
// iam fetching data from a website called opentdb.com this website will give us a simple questions about the nature.
// this is an example of the game https://lovattspuzzles.com/online-puzzles-competitions/ultimate-online-trivia-quiz.
import shuffle from "../../components/memorygame/shuffle.jsx";

const NATURE_CATEGORY = 17;

export const fetchQuizQuestions = async (amount, difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${NATURE_CATEGORY}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question) => ({
    ...question,
    answers: shuffle([...question.incorrect_answers, question.correct_answer]),
  }));
};
