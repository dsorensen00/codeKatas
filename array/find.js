// 32: array - `Array.prototype.find`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.find` makes finding items in arrays easier', () => {

	it('takes a compare function', function() {
		// const found = [true].find(true);
		const found = [true].find(x => x);
		// added a 'function' to 'compare' our current value and return x
		assert.equal(found, true);
	});

	it('returns the first value found', function() {
		// const found = [0, 1].find(item => item > 1);
		const found = [0, 1, 2].find(item => item > 1);
		// we're looking to return 2, but 2 wasn't even in the array,
		// added 2 and told it to return the first thing that is 
		// greater than one.
		assert.equal(found, 2);
	});

	it('returns `undefined` when nothing was found', function() {
		// const found = [1, 2, 3].find(item => item === 2);
		const found = [1, 2, 3].find(item => item === 4);
		// we don't want it to find anything, so give it a compare function
		// that wants it to find something that doesn't exist in the array.
		assert.equal(found, void 0);
	});

	it('combined with destructuring complex compares become short', function() {
		// const bob = {name: 'Bob'};
		// const alice = {name: 'Alice'};
		// const found = [bob, alice].find(({name}) => name);
		const bob = {name: 'Bob'};
		const alice = {name: 'Alice'};
		const found = [bob, alice].find(({name:{length}}) => length==5);
		// give a key value pair and ask for the length value that is equal to 5
		// which is alice
		assert.equal(found, alice);
	});

});
