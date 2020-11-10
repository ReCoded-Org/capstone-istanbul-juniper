// first line to rendomlly picking a question
const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);
// iam fetching data from a website called opentdb.com this website will give us a simple questions about the nature.
export const fetchQuizQuestions = async (amount, difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=17&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};