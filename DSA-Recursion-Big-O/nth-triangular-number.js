//Recursive
const nthTriangularNumber = num => {
	if(num < 1) return 0;

	return num + nthTriangularNumber(num -1);
};

//Iterative
const nthTriangularNumberItr = num => {
	let sum = 0;
	while(num > 0) {
		sum += num;
		num--;
	}
	return sum;
};

console.log('\nRecrusive');
console.log(nthTriangularNumber(9));
console.log('\n=============================================\n');
console.log('\nIterative');
console.log(nthTriangularNumberItr(9));

/**
 * Recursive Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the fibonacci algorithm.
 *
 * Worst case, the function will always call itself n - 1 times before reaching the base case.
 *
 * Therefore, the fibonacci run-time-complexity is O(n) [Linear]
 *
 * [=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=]
 *
 * Iterative Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the fibonacciItr algorithm.
 *
 * Worst case, the function will iterate n - 1 times.
 *
 * Therefore, the factorialItr run-time-complexity is O(n) [Linear]
 */