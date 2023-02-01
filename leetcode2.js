const isPalindrome = (x) => {
	const palid = x.toString();
	const ReversePalid = x.toString().split("").reverse().join("");
	console.log(palid);
	console.log(ReversePalid);
	return palid == ReversePalid ? console.log("true") : console.log("false");
};

const Palindrome = (x) => {
	if (x < 0 || (x % 10 == 0 && x != 0)) {
		return false;
	}
	let revertedNumber = 0;
	while (x > revertedNumber) {
		revertedNumber = revertedNumber * 10 + (x % 10);
		x /= 10;
	}
	return x == revertedNumber || x == revertedNumber / 10;
};

isPalindrome(100021);
