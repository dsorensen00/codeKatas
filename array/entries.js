// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!

describe('`[].entries()` returns an iterator object with all entries', function() {

	it('returns key+value for each element', function() {
		// const arr = ['a', 'b', 'c'];
		// const entriesAsArray = Array.from(arr.___());
		const arr = ['a', 'b', 'c'];
		const entriesAsArray = Array.from(arr.entries());
		//entries is the key to what the values are assigned
		assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]);
	});

	it('empty elements contain the value `undefined`', function() {
		// const arr = ['one'];
		// arr[2] = 'three';
		// const secondValue = arr.entries()
		const arr = ['one'];
		arr[2] = 'three';
		const secondValue = Array.from(arr.entries())[1];
		//looking for value but they weren't returning anything?
		assert.deepEqual(secondValue, [1, void 0]);
	});

	describe('returns an iterable', function() {

		it('has `next()` to iterate', function() {
			// const arr = ['one'];
			// const value = arr;
			const arr = ['one'];
			const value = arr.entries().next().value;
			//used .next().value to return the next value in the array
			assert.deepEqual(value, [0, 'one']);
		});

	});

});
