// 43: array - `Array.prototype.values`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {

	it('`values()` returns an iterator', function() {
		// const arr = ['k', 'e', 'y'];
    	// const iterator = arr.values();
		const arr = [];
		const iterator = arr.values();
		// we're evaluating for an empty array 
		assert.deepEqual(iterator.next(), {value: void 0, done: true});
	});

	it('use iterator to drop first key', function() {
		// const arr = ['keys', 'values', 'entries'];
		// const iterator = arr.values();
		// iterator.___();
		const arr = ['keys', 'values', 'entries'];
		const iterator = arr.values();
		iterator.next();
		// added .next() so it will list through the keys
		assert.deepEqual([...iterator], ['values', 'entries']);
	});

	it('empty array contains no values', function() {
		// const arr = [...[...[...[...'1']]]];
		// const values = [...arr.values()];
		const arr = [...[...[...[...[]]]]];
		const values = [...arr.values()];
		// got rid of the one.. we were testing for another empty array
		assert.equal(values.length, 0);
	});

	it('a sparse array without real values has values though', function() {
		// const arr = [, 0];
		// const keys = [...arr.values()];
		const arr = [,,];
		const keys = [...arr.values()];
		// again, testing for yet another empty array
		assert.deepEqual(keys, [void 0, void 0]);
	});

	it('also includes holes in sparse arrays', function() {
		// const arr = ['a',];
		const arr = ['a',,'c'];
		// testing for 'c' value but it wasn't there
		assert.deepEqual([...arr.values()], ['a', void 0, 'c']);
	});

});
