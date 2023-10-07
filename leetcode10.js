//find resultant array after removing anagram

const removeAnamgram = (words) => {
  let j = 0;
  for (let i = 1; i < words.length; i++) {
    if (isAnagram(words[j], words[i])) {
      words.splice(i, 1);
      i--;
    } else {
      j++;
    }
  }
  return words;
};

const isAnagram = (a, b) => {
  if (a.length != b.length) return false;
  return a.split('').sort().join() == b.split('').sort().join();
};

// const isAnagram = (a, b) => {
//   let obj = {};
//   for (let i of a) {
//     if (obj[i] == undefined) {
//       obj[i] = 1;
//     } else {
//       obj[i]++;
//     }
//   }
//   for (let j of b) {
//     if (obj[j] == undefined) {
//       return false;
//     }
//   }
//   return true;
// };

console.log(removeAnamgram(['abba', 'baba', 'bbaa', 'cd', 'cd']));
// console.log(isAnagram('aba', 'baba'));
// first iteration check if i and i-1 is an anagram,if
// ["a", "b", "c", "d"]
//   i-1  i
//   second iteration
// ["a", "b", "c", "d"]
//        i-1   i
// third iteration
// ["a", "b", "c", "d"]
//             i-1  i
