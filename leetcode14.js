// common string with the least index sum

const findRestaurant = (list1, list2) => {
  let leastString = [];
  for (let i = 0; i < list1.length; i++) {
    let leastSum = 1000;
    let found = false;
    for (let j = 0; j < list2.length; j++) {
      if (list2[j] != list1[i]) {
        found = false;
      }
      found = true;
    }
    if (found == true && i + j <= leastSum) {
      leastString.push(list2[i]);
      leastSum = i + j;
    }
    // if (found == true && i + j == leastSum) {
    // }
    // if (found == true && i + j < leastSum) {
    //   leastSum = i + j;
    //   leastString.push(list1[i]);
    // }
  }
  return leastString;
};

// const findRestaurant = function (list1, list2) {
// 	// For the first array, make a hashmap of all indexes of each interest
// 	const interests = {}
// 	for (let i = 0; i < list1.length; i++) {
// 		const interest = list1[i];
// 		interests[interest] = i
// 	}

// 	let commonInterestArr = []
// 	let minSum = Infinity
// 	for (let i = 0; i < list2.length; i++) {
// 		const interest = list2[i];

// 		// when there is a common interest, add the current index to the index in the hashmap
// 		if (interests[interest] !== undefined) {
// 			const currentSum = interests[interest] + i
// 			// if it is lower than the current minimum index, set the array of common interests to an array of the current element and the minimum sum to the current sum
// 			if (currentSum < minSum) {
// 				commonInterestArr = [interest]
// 				minSum = currentSum
// 			}
// 			// If they are equal, push the current element to the array of common interests
// 			else if (currentSum === minSum) {
// 				commonInterestArr.push(interest)
// 			}
// 		}
// 	}
// 	// return the array of common interests
// 	return commonInterestArr
// };

console.log(
  findRestaurant(
    ['shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse']
  )
);

// list1 = ["Shogun","Tapioca Express","Burger King","KFC"]
// list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
