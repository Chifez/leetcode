//shortest completing words
//1).Process the licensePlate string to remove spaces and convert all characters to lowercase.
//Create a frequency map of characters in licensePlate.

//2).Initialize a variable to keep track of the shortest completing word, and set it initially to an empty string.

//3).Iterate through the words array and for each word,
//check if it is a completing word by comparing its character frequency with the frequency map created in step 1.
//If it is a completing word, check if it is shorter than the current shortest completing word. If both conditions are met,
//update the shortest completing word.

//4).Return the shortest completing word found during the iteration.

const shortestCompletingWord = (licensePlate, words) => {
  const licenseWord = licensePlate.toLowerCase().replace(/[^a-z]/g, '');
  const licenseFreq = {};

  for (let i = 0; i < licenseWord.length; i++) {
    licenseFreq[licenseWord[i]] = (licenseFreq[licenseWord[i]] || 0) + 1;
  }

  let shortestWord = null;

  for (let i = 0; i < words.length; i++) {
    const wordFreq = {};
    for (const char of words[i]) {
      wordFreq[char] = (wordFreq[char] || 0) + 1;
    }
    let isComplete = true;
    for (const license in licenseFreq) {
      if (!wordFreq[license] || wordFreq[license] < licenseFreq[license]) {
        isComplete = false;
        break;
      }
    }
    if (isComplete) {
      if (shortestWord === null || shortestWord.length > words[i].length) {
        shortestWord = words[i];
      }
    }
  }
  return shortestWord;
};

const licensePlate1 = '1s3 PSt';
const words1 = ['step', 'steps', 'stripe', 'stepple'];
console.log(shortestCompletingWord(licensePlate1, words1));
