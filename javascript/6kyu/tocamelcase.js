/*
	Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/

function toCamelCase(str){
	let newStr = "";

	for(let index = 0, strlen = str.length; index < strlen; ++index){
		if(str[index] == '-' || str[index] == '_'){
			++index;
			newStr += str[index].toUpperCase();
			continue;
		}

		newStr += str[index];
	}

	return newStr;
}