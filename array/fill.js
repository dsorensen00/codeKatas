// 31: array - `Array.prototype.fill` method
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.fill` can fill up an array with one value', () => {

	it('`fill(0)` will populate `0` into each array element', function() {
		// const arr = new Array(3).fill();
		const arr = new Array(3).fill(0);
		// we were creating an array of three items, but we were not 
		// giving the array any values for the items
		assert.deepEqual(arr, [0, 0, 0]);
	});

	it('fill only changes content, adds no new elements', function() {
		// const arr = [undefined].fill(0)
		const arr = [].fill(0);
		// we would be changing undefined to zero, we only want it to return an 
		// empty array, since it can't change nothing and can't add elements, filling
		// to an empty array causes it to do nothing.
		assert.deepEqual(arr, []);
	});

	it('second parameter to `fill()` is the position where to start filling', function() {
		// const fillPosition = 0;
		// const arr = [1,2,3].fill(42, fillPosition)
		const fillPosition = 2;
		const arr = [1,2,3].fill(42, fillPosition);
		// in the original example, we were telling it to start filling at index
		// 0, but we only wanted to fill at index 2, so change the value of 
		// fillPosition to 2
		assert.deepEqual(arr, [1, 2, 42]);
	});

	it('third parameter is the position where filling stops', function() {
		// const fillStartAt = 1;
		// const fillEndAt = 1;
		// const arr = [1,2,3].fill(42, fillStartAt, fillEndAt);
		const fillStartAt = 1;
		const fillEndAt = 2;
		const arr = [1,2,3].fill(42, fillStartAt, fillEndAt);
		// we can't tell fill to start and end on the same index,
		// we have to give it the index of the next item that we want it
		// to stop before.
		assert.deepEqual(arr, [1, 42, 3]);
	});

});
