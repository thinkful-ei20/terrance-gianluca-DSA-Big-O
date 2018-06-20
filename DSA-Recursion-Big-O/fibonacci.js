
const INDEX = 80;
const store = {};

let i = 0;
const fibonacci = (index) => {
	i++;
	if(index <=1 ) {
		if(!store.hasOwnProperty(index)) {
			store[index] = index;
		}
		return index;
	}

	let a = fibonacci(index-2);
	let b = fibonacci(index-1);
	if(!store.hasOwnProperty(index)) {
		store[index] = a + b;
	}
	return a + b;
};

const printFib = () => {
	fibonacci(INDEX);
	Object.keys(store).forEach(index => console.log( store[index]));
	console.log('Called', i);
};

printFib();


const fibonacciItr = (index) => {
	let a = 1;
	let b = 0;
	let temp;
	while( index >= 1) {
		temp = a;
		a = a + b;
		b = temp;
		console.log(b);
		index--;
	}
	return '';
};

console.log(fibonacciItr(INDEX));

/**
 * Recursive Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the fibonacci algorithm.
 *
 * Worst case, the function will always call itself twice per call before reaching the base case,
 * which can be represented by the expression 2^n.
 *
 * Therefore, the fibonacci run-time-complexity is O(2^n) [Exponential]
 *
 * [=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=]
 *
 * Iterative Big-O
 *
 * The size of the input will determine the Big O Complexity of
 * the fibonacciItr algorithm.
 *
 * Worst case, the function will iterate n - 1 times.
 *
 * Therefore, the factorialItr run-time-complexity is O(n) [Linear]
 */