//Recrusive
const countingSheep = num => {
	if(num === 0) return '';
	console.log(`${num} - Another sheep jump over the fence`);
	countingSheep(num - 1);
};

console.log('\nRecrusive');
countingSheep(10);

console.log('\n=============================================\n');

//Iterative
const countingSheepItr = num => {
	while(num > 0) {
		console.log(`${num} - Another sheep jump over the fence`);
		num--;
	}
};
console.log('\nIterative');
countingSheepItr(10);


/**
 * Recursive Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the countingSheep algorithm.
 *
 * Worst case, the function will always be called n times.
 *
 * Therefore, the countingSheep run-time-complexity is O(n) [Linear]
 *
 * [=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=]
 *
 * Iterative Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the countingSheepItr algorithm.
 *
 * Worst case, the function will always iterate over the input n times.
 *
 * Therefore, the countingSheepItr run-time-complexity is O(n) [Linear]
 */