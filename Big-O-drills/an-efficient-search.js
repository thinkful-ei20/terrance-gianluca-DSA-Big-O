const efficientSearch = (array, item) => {
	let minIndex = 0;
	let maxIndex = array.length - 1;
	let currentIndex;
	let currentElement;

	while (minIndex <= maxIndex) {
		currentIndex = Math.floor((minIndex + maxIndex) / 2);
		currentElement = array[currentIndex];

		if (currentElement < item) {
			minIndex = currentIndex + 1;
		}
		else if (currentElement > item) {
			maxIndex = currentIndex - 1;
		}
		else {
			return currentIndex;
		}
	}
	return -1;
};

/**
 * The size of the input, a sorted array, will determine the Big O complexity of the
 * efficient search algorithm. The algorithm divides our search space in half each iteration of
 * the loop.
 *
 * Worst case, the element is either the largest or smallest in the sorted array, and the search will take
 * n / 2 ^ x, where x is the total number of times we divide our search space in half or x = O(log n)
 *
 * Therefore, the areYouHere run-time-complexity is O(log n) [Logarithmic]
 */