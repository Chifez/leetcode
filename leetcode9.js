//percentage of letter in string

const percentageLetter = (s, letter) => {
  let numletter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == letter) numletter++;
  }

  return Math.floor((numletter / s.length) * 100);
};
console.log(percentageLetter('sgawtb', 's'));

const isAnagram = (a, b) => {
  let obj = {};
  for (let i of a) {
    if (obj[i] == undefined) {
      obj[i] = 1;
    } else {
      obj[i] = obj[i] + 1;
    }
  }
  for (let j of b) {
    if (!obj[j]) {
      return false;
    }
    obj[j] -= 1;
  }
  return true;
};

console.log(isAnagram('abba', 'baba'));
