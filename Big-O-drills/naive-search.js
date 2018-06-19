
const naiveSearch = (array, item) => {
	for (let i=0; i<array.length; i++) {
		if (array[i] === item) {
			return i;
		}
	}
};

/**
 * The size of the input array, array, will determine the Big O complexity of the
 * naiveSearch algorithm.
 *
 * Worst case you must check every element in the array.
 *
 * Therefore, the run-time-complexity is O(n) [Linear]
 */