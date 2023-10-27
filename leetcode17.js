//Group anagram

//Algorithm
//create an array, set the array to be the first word in the array as an array
//loop through the array and check if the next word is an anagram of the first word in the newly created array if it is then push it into that index
//if it is not then
// const isAnagram = (a, b) => {
//   if (a.length != b.length) return false;
//   return a.split('').sort().join() == b.split('').sort().join();
// };

// const groupAnagram = (strs) => {
//   let output = [['eat']];
//   let k = 0;
//   if (strs.length <= 1) return output.push([strs]);
//   output.push(strs[0]);
//   for (let i = 1; i < strs.length; i++) {
//     for (let j = 0; j < output.length; j++) {
//       // if (isAnagram(output[output.length - 1],strs[i] )) {
//       //   output.push(...output, strs[i]);
//       //   console.log(output);
//       //   //   i--;
//       // }
//       // i++;
//     }
//     // console.log(output);
//   }
//   console.log(...output);
//   return output;
// };

const groupAnagram = (strs) => {
  let map = {};

  for (let str of strs) {
    let s = str.split('').sort().join('');
    if (!map[s]) map[s] = [];
    map[s].push(str);
    console.log(map);
  }
  return Object.values(map);
};
console.log(groupAnagram(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
