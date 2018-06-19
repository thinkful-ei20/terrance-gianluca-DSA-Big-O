
const areYouHere = (arr1, arr2) => {
	for (let i=0; i<arr1.length; i++) {
		const el1 = arr1[i];
		for (let j=0; j<arr2.length; j++) {
			const el2 = arr2[j];
			if (el1 === el2) return true;
		}
	}
	return false;
};

/**
 * The size of the input arrays of arr1 and arr2 will determine the Big O complexity of the
 * areYouHere algorithm. The algorithm loops through arr1, checking the equivilancy of each element with
 * every element of arr2.
 *
 * Worst case, only the last element of arr2 will match the last element of arr1, resulting in full run
 * through our nested loop.
 *
 * Therefore, the areYouHere run-time-complexity is O(n^2) [Quadratic]
 */