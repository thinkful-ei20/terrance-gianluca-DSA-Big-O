const generateFib = num => {
	let result = [];
	for (let i = 1; i <= num; i++) {

	// we're adding the first item
	// to the result list, append the
	// number 0 to results
		if (i === 1) {
			result.push(0);
		}
		// ...and if it's the second item
		// append 1
		else if (i === 2) {
			result.push(1);
		}

		// otherwise, sum the two previous result items, and append that value to results.
		else {
			result.push(result[i - 2] + result[i - 3]);
		}
	}
	// once the for loop finishes
	// we return `result`.
	return result;
};

/**
 * The size of the input num will determine the Big O complexity of the
 * generateFib algorithm. The algorithm loops n times, performing operations.
 *
 * Worst case, we must run the loop n times.
 *
 * Therefore, the generateFib run-time-complexity is O(n) [Linear]
 */