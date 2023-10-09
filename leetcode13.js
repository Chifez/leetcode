// keyboard row

const findWords = (words) => {
  let row = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  let foundWords = [];

  for (let i = 0; i < words.length; i++) {
    let found = false;
    for (let key of row) {
      for (let j = 0; j < words[i].length; j++) {
        if (key.indexOf(words[i][j].toLowerCase()) == -1) {
          // i need to understand what happens here
          found = false;
          break;
        }
        found = true;
      }
      if (found == true) {
        foundWords.push(words[i]);
      }
    }
  }
  return foundWords;
};

// var findWords = function (words) {
//   let result = [];
//   //let word = ["Hello","Alaska","Dad","Peace"]
//   let row_words = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
//   //let result = []

//   for (let i = 0; i < words.length; i++) {
//     let found = false;
//     for (let row_word of row_words) {
//       for (let j = 0; j < words[i].length; j++) {
//         if (row_word.indexOf(words[i][j].toLowerCase()) == -1) {
//           found = false;
//           break;
//         }
//         found = true;
//       }
//       if (found == true) {
//         result.push(words[i]);
//       }
//     }
//   }
//   return result;
// };
console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));
`
1.loop through the words array
2.loop through the words at each index
3.check if the first letter is in either the top middle or bottom
4.check if the key of the next letter is also the same as the first letter
 4a.if true go to the next letter,if not remove the word from the array
`;
