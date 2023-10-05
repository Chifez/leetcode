//percentage of letter in string

const percentageLetter = (s, letter) => {
  let numletter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == letter) numletter++;
  }

  return Math.floor((numletter / s.length) * 100);
};
console.log(percentageLetter('sgawtb', 's'));
