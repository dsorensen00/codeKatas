// 33: array - `Array.prototype.findIndex`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.findIndex` makes finding items in arrays easier', () => {

	it('takes a compare function, returns the index where it returned true', function() {
		//const foundAt = [false, true].findIndex(item);
		const foundAt = [false, true].findIndex(item => item);
		//by giving it an arrow we are declaring item as the "current value," otherwise it 
		// will assume that it is a variable declared somewhere else and try to find it
		assert.equal(foundAt, 1);
	});

	it('returns the first position it was found at', function() {
		//const foundAt = [0, 1, 1, 1].findIndex(item => item = 1);
		const foundAt = [0, 1, 1, 1].findIndex(item => item == 1);
		//one equals does not work, gotta do that double equal
		assert.equal(foundAt, 1);
	});

	it('returns `-1` when nothing was found', function() {
		//const foundAt = [1, 2, 3].findIndex(item => item > 1);
		const foundAt = [1, 2, 3].findIndex(item => item > 3);
		//only returns 1-3 if it is greater than 3, it will not find anything and return -1
		assert.equal(foundAt, -1);
	});

	it('the findIndex callback gets the item, index and array as arguments', function() {
		
		// const three = 3;
		// const containsThree = arr => arr.indexOf(three) > -1;
		// function theSecondThree(index, arr) {
		//   const preceedingItems = arr.slice(0, index);
		//   return containsThree(preceedingItems);
		// }
		// const foundAt = [1, 1, 2, 3, 3, 3].findIndex(theSecondThree);

		const three = 3;
		const containsThree = arr => arr.indexOf(three) > -1;
		function theSecondThree(item, index, arr) {
			//only changed the order of arguments. with this, the current value is always passed as 
			//the first arg, index as second, and so on so forth.
			const preceedingItems = arr.slice(0, index);
			return containsThree(preceedingItems);
		}
		const foundAt = [1, 1, 2, 3, 3, 3].findIndex(theSecondThree);

		assert.equal(foundAt, 4);
	});

	it('combined with destructuring complex compares become short', function() {
		// const bob = {name: 'Bob'};
		// const alice = {name: 'Alice'};
		// const foundAt = [bob, alice].findIndex(({name:{length:l}}) => length > 3);
		const bob = {name: 'Bob'};
		const alice = {name: 'Alice'};
		const foundAt = [bob, alice].findIndex(({name:{length:l}}) => l > 3);
		//typo. when calling the length, they call length rather than l.

		assert.equal(foundAt, 1);
	});

});
