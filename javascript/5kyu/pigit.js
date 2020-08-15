/*
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 */

function pigIt(str) {
	let arr = str.split(" ");
	let newStr = "";

	for (let wi = 0, len = arr.length; wi < len; ++wi) {
		if (!arr[wi].match(/[a-zA-Z]/)) {
			newStr += arr[wi];
			continue;
		} else {
			for (let j = 0; (rest = arr[wi][++j]); newStr += rest) {}
		}

		newStr += arr[wi][0];
		newStr += wi === len - 1 ? "ay" : "ay ";
	}

	return newStr;
}

console.log(pigIt("Hello, world!"));


