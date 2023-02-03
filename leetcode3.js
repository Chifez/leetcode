//covert a roman numeral to its integer equivalent
const romanToInt = (s) => {
	let int = 0;
	let input = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
	const roman = s.split("");
	for (let i = 0; i < roman.length; i++) {
		if (input[roman[i]] < input[roman[i + 1]]) {
			int = int - input[roman[i]];
		} else {
			int = int + input[roman[i]];
		}
	}
	console.log(int);
};

romanToInt("XX");
romanToInt("IX");
romanToInt("MXI");
