//Recursive

const arrayDouble = arr => {
	if(!arr.length) return [];

	arr[0] = arr[0] * 2;

	return [arr[0], ...arrayDouble(arr.slice(1))];
};

const testArrays = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[1,1,1]
];

console.log('\nRecrusive');
for(let i = 0; i < testArrays.length; i++) {
	console.log(arrayDouble(testArrays[i]));
}

console.log('\n=============================================\n');
//Iterative
const arrayDoubleItr = arr => {
	for(let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * 2;
	}
	console.log(arr);
};

const testArraysItr = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[1,1,1]
];

console.log('\nIterative');
for(let i = 0; i < testArraysItr.length; i++) {
	arrayDoubleItr(testArraysItr[i]);
}

/**
 * Recursive Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the arrayDouble algorithm.
 *
 * Worst case, the function will be called n times before reaching it's
 * base case, with at most three constant-time operations per call.
 *
 * Therefore, the arrayDouble run-time-complecity is O(n) [Linear]
 *
 * [=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=]
 *
 * Iterative Big-O
 *
 * The size of the input array, array, will determine the Big O complexity of the
 * arrayDoubleItr algorithm.
 *
 * Worst case, you must multiply each array element by 2.
 *
 * Therefore, the arrayDoubleItr run-time-complexity is O(n) [Linear]
 */