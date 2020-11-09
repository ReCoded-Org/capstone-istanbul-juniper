// Shuffles cards
// Check Fisher–Yates shuffle algorithm https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
const shuffle = (arr) => {
  const copyOfArr = [...arr];
  for (let i = copyOfArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyOfArr[i], copyOfArr[j]] = [copyOfArr[j], copyOfArr[i]];
  }
  return copyOfArr;
};

export default shuffle;
