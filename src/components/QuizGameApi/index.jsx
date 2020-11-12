// first line to rendomlly picking a question
// we fetch those questions from opentdb website. we can pick the type of questions,the amount and the dificulty.
// here we have a 10 questions as an amount, nature as a category ,easy, middle and hard for the difficulty and multiple choices as a type.
const shuffleArray=(array) =>{
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// iam fetching data from a website called opentdb.com this website will give us a simple questions about the nature.
// this is an example of the game https://lovattspuzzles.com/online-puzzles-competitions/ultimate-online-trivia-quiz.
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