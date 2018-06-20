
//Recursive
const split = (string, separator = undefined, limit = 0) => {

	if( separator === undefined || separator === null) return [string];

	if(!string.length) return [''];

	let character = string[0];
	if(character === separator) {
		return ['', ...split(string.substr(1), separator, limit)];
	}

	let newArray = split(string.substr(1), separator, limit);
	newArray[0] = character + newArray[0];
	return newArray;
};

const word =  'hello world my name is joe';
console.log('\nRecrusive');
console.log(JSON.stringify(split(word,' ')));

//Iterative
const splitItr = (string, separator = undefined, limit = 0) => {

	const split = [];

	if( separator === undefined || separator === null) return [string];

	let tokenStart = 0;
	for(let i = 0; i < string.length; i++) {
		if(string[i] === separator) {
			split.push(string.substring(tokenStart,i));
			tokenStart = i + 1;
		}

		if(i === string.length-1) {
			split.push(string.substring(tokenStart, i + 1));
		}
	}
	return split;
};

const word2 =  'hello world my name is joe';
console.log('\n=============================================\n');
console.log('\nIterative');
console.log(JSON.stringify(splitItr(word2,' ')));


/**
 * Recursive Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the split algorithm.
 *
 * Worst case, the function will always call itself n times before reaching the
 * base case.
 *
 * Therefore, the split run-time-complexity is O(n) [Linear]
 *
 * [=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=]
 *
 * Iterative Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the splitItr algorithm.
 *
 * Worst case, the function will iterate n times.
 *
 * Therefore, the splitItr run-time-complexity is O(n) [Linear]
 */