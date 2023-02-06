//longest common prefix

const longestPrefix = (s) => {
	let prefix = s[0]; //this returns the first string in the array of argument in this case flower
	console.log("input :", prefix);
	for (let i = 1; i < s.length; i++) {
		//starting from the second item in the array we loop through the array
		while (s[i].indexOf(prefix) != 0) {
			// we check if the second item can be found in the first item which is the prefix
			/* this is where the magic happens,from the condition above as long as a part of the next word/item in the array can be found in the 
	   the prefix declared above then we want to return the substring shortened by 1
	  */
			prefix = prefix.substring(0, prefix.length - 1);
			console.log("midput:", prefix);
		}
	}
	console.log("output :", prefix);
};
// longestPrefix(["flower", "flosh", "floor", "flor"]);

// prefix = flower;
// for the first iteration;it goes through the first letter and if the same it returns the prefix cut by 1
// flower,flosh,floor ->> flowe
// for the second iteration
//flowe,flosh,floor -> flow
// for the third iteration
// flow,flosh,floor -> flo;

const longestfix = (s) => {
	let fix = s[0];
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < fix.length; j++) {
			if (s[i].charCodeAt([j]) !== fix.charCodeAt([j])) {
				console.log(s[i][j]);
				console.log(fix[j]);
				fix = fix.slice(0, j);
			}
		}
	}
	console.log(fix);
};
longestfix(["flower", "flosh", "floor", "flor"]);
