
const findRandomElement = arr => {
	return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * The size of the input will not have an effect on the Big O complexity
 * of the findRandomElement algorithm.
 *
 * Worst case, you access a random element and return it's value.
 *
 * Therefore, the run-time-complexity is O(1) [Constant]
 */