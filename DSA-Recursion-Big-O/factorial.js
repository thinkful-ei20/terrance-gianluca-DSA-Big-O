//Recursive
const factorial = num => {
	if(num === 1) return 1;
	console.log('r',num);
	return num * factorial(num -1);
};
console.log('\nRecrusive');
console.log(factorial(5));

//Iterative
const factorialItr = num => {
	let factorial = 1;
	while(num > 1) {
		factorial = num * factorial;
		console.log('i',num);
		num --;
	}
	return factorial;
};
console.log('\n=============================================\n');
console.log('\nIterative');
console.log(factorialItr(5));

/**
 * Recursive Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the factorial algorithm.
 *
 * Worst case, the function will always be called n - 1 times.
 *
 * Therefore, the factorial run-time-complexity is O(n) [Linear]
 *
 * [=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=]
 *
 * Iterative Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the factorialitr algorithm.
 *
 * Worst case, the function will iterate n - 1 times.
 *
 * Therefore, the factorialItr run-time-complexity is O(n) [Linear]
 */