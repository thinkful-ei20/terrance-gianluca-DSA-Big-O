//Recursive
const binaryRepresentation = num => {

	if(num === 0) return '';

	let binaryNum = '' + Math.floor(num % 2);
	return binaryRepresentation(Math.floor(num/2)) + binaryNum;
};


console.log('\nRecrusive');
console.log(binaryRepresentation(25));


//Iterative

const binaryRepresentationItr = num => {
	let binary = '';

	while( num > 0) {
		binary += Math.floor(num % 2);
		num = Math.floor(num/2);
	}
	return reverse(binary);
};

const reverse = str => {
	let newStr = '';
	for (let i = str.length - 1; i >= 0; i--) { 
		newStr += str[i];
	}
	return newStr;
};

console.log('\n=============================================\n');
console.log('\nIterative');
console.log(binaryRepresentationItr(25));


/**
 * Recursive Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the binaryRepresentation algorithm.
 *
 * Worst case, the function will be called log base 2 of n times before reaching it's
 * base case, as we divide our input by 2 each per recurse.
 *
 * Therefore, the arrayDouble run-time-complecity is O(log n) [Logarithmic]
 *
 * [=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=]
 *
 * Iterative Big-O
 *
 * The size of the input array, array, will determine the Big O complexity of the
 * binaryRepresentationItr algorithm.
 *
 * Worst case, the function will divide the input log base 2 of n times before the binary
 * string can be made, and the reverse operation will only take log n operations as well, i.e.
 * the entire algorithm is  2 * log n
 *
 * Therefore, the arrayDoubleItr run-time-complexity is O(log n) [Logarithmic]
 */