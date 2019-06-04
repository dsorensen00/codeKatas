// 42: array - `Array.prototype.keys`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.keys` returns an iterator for all keys in the array', () => {

	it('`keys()` returns an iterator', function() {
		// const arr = ['a', 'b'];
		// const iterator = arr.keys();
		const arr = ['a'];
		const iterator = arr.keys();
		// was expecting there to not be a second value, but we had one there.
		assert.deepEqual(iterator.next(), {value: 0, done: false});
		assert.deepEqual(iterator.next(), {value: void 0, done: true});
	});

	it('gets all keys', function() {
		// const arr = ['a', 'b'];
		// const keys = Array.from(arr.keys());
		const arr = [1, 2, 3];
		const keys = Array.from(arr.keys());
		// expects three keys from the array, so just had to add a third
		assert.deepEqual(keys, [0, 1, 2]);
	});

	it('empty array contains no keys', function() {
	    // const arr = ['empty me'];
    	// const keys = [...arr.keys()];
		const arr = [];
		const keys = [...arr.keys()];
		// literally did what it asked 
		assert.equal(keys.length, 0);
	});

	it('a sparse array without real values has keys though', function() {
		// const arr = [,,];
		// const keys = [...arr.___()];
		const arr = [,,];
		const keys = [...arr.keys()];
		// replaced the blank with keys operator, it will then return our keys
		assert.deepEqual(keys, [0, 1]);
	});

	it('also includes holes in sparse arrays', function() {
		// const arr = ['a', , 'c'];
    	// const keys = arr.keys;
		const arr = ['a', , 'c'];
		const keys = Array.from(arr.keys());
		// wasn't pulling the array values correctly. Have to use Array.from to 
		// pull them correctly.
		assert.deepEqual(keys, [0, 1, 2]);
	});
});

