
const anagram = (prefix, remaining) => {

	// when we are out of remaining letters, print out the prefix (permutation/anagram)
	if(!remaining.length) {
		console.log(prefix);
		return;
	}

	// process remaining characters
	for (let i = 0; i < remaining.length; i++) {
		/**
		 * First layer...
		 * 	anagram( '' + 'A', '' + 'BCD');
		 *
		 * 		Second Layer...
		 *
		 * 		anagram( 'A' + 'B', '' + 'CD');
		 * 						>
		 * 
		 * 		anagram( 'A' + 'C', 'B' + 'D');
		 * 						>
		 * 
		 * 		anagram( 'A' + 'D', 'BC' + '');
		 * 						>
		 *
		 * 					.
		 * 					.
		 * 					.
		 * 
		 * 	anagram( '' + 'B', 'A' + 'CD');
		 *
		 * 					.
		 * 					.
		 * 					.
		 *
		 * 	anagram( '' + 'C', 'AB' + 'D');
		 *
		 *					.
		 * 					.
		 * 					.
		 *
		 * 	anagram( '' + 'D', 'ABC' + '');
		 *
		 *					.
		 * 					.
		 * 					.
		 *
		 */

		anagram(prefix + remaining[i], remaining.substr(0, i) + remaining.substr(i + 1, remaining.length));
	}
};
const word = 'ABCD';
console.log(anagram('', word));

const anagramItr = (word) => {

	/*ABCD*/

	/*A*/

	for(let i = 0; i < word.length; i++) {
		for(let j = 0; j < word.length; j++) {
			if(j !== i) {
				
			}
		}
	}

};

/**
 * Recursive Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the anagram algorithm.
 *
 * Worst case, the funciton must always be called n! times.
 *
 * Therefore, the arrayDouble run-time-complecity is O(n!) [Linear]
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