const shuffle = (arr) => {
  const copyOfArr = [...arr];
  for (let i = copyOfArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyOfArr[i], copyOfArr[j]] = [copyOfArr[j], copyOfArr[i]];
  }
  return copyOfArr;
};

export default shuffle;