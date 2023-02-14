//longest common prefix

const longestprefix = (s) => {
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
	return fix;
};
longestprefix(["flower", "flosh", "floor", "flor"]);
