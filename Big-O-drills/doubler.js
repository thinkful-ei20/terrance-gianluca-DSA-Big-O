
const doubleArrayValues = array => {
	for (let i=0; i<array.length; i++) {
		array[i] *= 2;
	}
	return array;
};

/**
 * The size of the input array, array, will determine the Big O complexity of the
 * doubleArrayValues algorithm.
 *
 * Worst case you must multiply each array element by 2.
 *
 * Therefore, the doubleArrayValues run-time-complexity is O(n) [Linear]
 */