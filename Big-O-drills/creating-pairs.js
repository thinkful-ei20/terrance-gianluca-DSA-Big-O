
const createPairs = arr => {
	for (let i = 0; i < arr.length; i++) {
		for(let j = i+1; j < arr.length; j++) {
			console.log(arr[i] + ', ' +  arr[j] );
		}
	}
};

/**
 * The size of the input will determine the Big O complexity of the
 * createPairs algorithm.
 *
 * Worst case, you must console.log each pair n * n - 1 times, and for very large n,
 * the constant 1 is negligable
 *
 * Therefore, the run-time-complexity of createPairs is O(n^2) [Quadratic]
 */