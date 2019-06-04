// 30: array - `Array.of` static method
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.of` creates an array with the given arguments as elements', () => {

	it('dont mix it up with `Array(10)`, where the argument is the array length', () => {
		// const arr = Array(10);
		const arr = Array.of(10);
		// Array.of creates an array, Array() does not, it takes the number as an argument
		// which I guess so does Array.of() but \(0.0)/
		assert.deepEqual(arr, [10]);
	});

	it('puts all arguments into array elements', () => {
		// const arr = Array.of();
		const arr = Array.of(1,2);
		// we weren't passing it values to create the array with
		assert.deepEqual(arr, [1, 2]);
	});

	it('takes any kind and number of arguments', () => {
		// const starter = [1, 2];
		// const end = [3, '4'];
		// const arr = Array.of(...starter, ...end);
		const starter = [1, 2];
		const end = [3, '4'];
		const arr = Array.of(starter, ...end);
		// were looking for starter to be a nested array, so we 
		// can't spread it.
		assert.deepEqual(arr, [[1, 2], 3, '4']);
	});

});
