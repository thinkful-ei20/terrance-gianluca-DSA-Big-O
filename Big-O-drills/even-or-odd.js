
const isEven = value => {
	if (value % 2 === 0){
		return true;
	}
	return false;
};

/**
 *	The input size n of value does not have an effect on the number of
 *  control flow operations.
 *
 * 	Worst case, you perform one control flow operation.
 *
 *  Therefore the isEven algorithm is O(1) [Constant]
 */