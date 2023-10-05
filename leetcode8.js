//first letter to appear twice

//bruteforce
const repeatedCharacter = (s) => {
  let newArray = [];
  for (let i = 0; i < s.length; i++) {
    if (newArray.includes(s[i])) return s[i];
    newArray.push(s[i]);
  }
};

console.log(repeatedCharacter('aabcbcbaacz'));
