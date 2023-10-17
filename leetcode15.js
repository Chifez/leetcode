//two sum II - input array is sorted

// const twoSum = (numbers, target) => {
//   let current = 0;
//   for (let j = current; j < numbers.length; j++) {
//     for (let i = current + 1; i <= numbers.length; i++) {
//       console.log(i, j);
//       if (numbers[i] + numbers[j] == target) {
//         return [current + 1, i + 1];
//       }
//     }
//     current += 1;
//   }
// };

// var twoSum = function (sa, t) {
//   let n = sa.length;
//   for (let L = 0, R = n - 1; L < R; ) {
//     let sum = sa[L] + sa[R];
//     if (sum === t) {
//       return [L + 1, R + 1];
//     } else if (sum < t) {
//       L++;
//     } else {
//       R--;
//     }
//   }
//   return [-1, -1];
// };

const twoSum = function (numbers, target) {
  for (let i = 0, j = numbers.length - 1; i < j; ) {
    if (numbers[i] + numbers[j] == target) {
      return [i + 1, j + 1];
    } else if (numbers[i] + numbers[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  //   return [-1, -1];
};

console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8));
