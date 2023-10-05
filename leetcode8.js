//first letter to appear twice

//bruteforce
// const repeatedCharacter = (s) => {
//   let newArray = [];
//   for (let i = 0; i < s.length; i++) {
//     if (newArray.includes(s[i])) return s[i];
//     newArray.push(s[i]);
//   }
// };

//reinforced
const repeatedCharacter = (s) => {
  let newObject = {};
  for (let i of s) {
    if (newObject[i] != undefined) {
      return i;
    }
    newObject[i] = 1;
  }
  return '';
};
console.log(repeatedCharacter('abccbaacz'));
