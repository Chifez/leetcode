// check if a string is an acroynm of words

//brute force

const isAcronym = (words, s) => {
  if (!words.length) return false;
  let obj = '';
  for (let i = 0; i < words.length; i++) {
    obj += words[i][0];
  }
  return s == obj;
};

console.log(isAcronym(['an', 'apple'], 'a'));
