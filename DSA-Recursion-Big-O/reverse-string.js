const reverse = string => {
	if(string.length === 0) return '';

	return string.charAt(string.length - 1) + reverse(string.slice(0, string.length - 1));
};

console.log('\nRecrusive');
console.log(reverse('hello'));


const reverseItr = str => {
	let newStr = '';
	for (let i = str.length - 1; i >= 0; i--) { 
		newStr += str[i];
	}
	return newStr;
};

console.log('\n=============================================\n');
console.log('\nIterative');
console.log(reverseItr('hello'));

/**
 * Recursive Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the reverse algorithm.
 *
 * Worst case, the function will always call itself n - 1 times before reaching the
 * base case.
 *
 * Therefore, the reverse run-time-complexity is O(n) [Linear]
 *
 * [=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=]
 *
 * Iterative Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the reverseItr algorithm.
 *
 * Worst case, the function will iterate n - 1 times.
 *
 * Therefore, the reverseItr run-time-complexity is O(n) [Linear]
 */