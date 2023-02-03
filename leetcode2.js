//check if a number is a palindrome
const isPalindrome = (x) => {
	const palid = x.toString();
	const ReversePalid = x.toString().split("").reverse().join("");
	return palid == ReversePalid ? console.log("true") : console.log("false");
};

isPalindrome(100021);
