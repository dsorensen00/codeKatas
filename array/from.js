// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.from` converts an array-like object or list into an Array', () => {

	const arrayLike = {0: 'one', 1: 'two', length: 2};

	it('call `Array.from` with an array-like object', function() {
		// const arr = arrayLike;
		const arr = Array.from(arrayLike);
		// .from will just pull the array and so when you call arr, 
		// it will be equal to the arrayLike values not the variable arrayLike.
		assert.deepEqual(arr, ['one', 'two']);
	});

	it('a DOM node`s classList object can be converted', function() {
		// const domNode = document.createElement('span');
		// domNode.classList.add('some');
		// domNode.classList.add('other');
		// const classList = domNode.classList;
		document.body.classList.add('some');
		document.body.classList.add('other');
		const classList = Array.from(document.body.classList);
		// I didn't understand this one......
		assert.equal(''+classList, ''+['some', 'other']);
	});

	it('convert a NodeList to an Array and `filter()` works on it', function() {
		const nodeList = document.querySelectorAll('body');
		const bodies = Array.from(nodeList).filter((node) => node === document.body);

		assert.deepEqual(bodies, [document.body]);
	});

	describe('custom conversion using a map function as second param', () => {
		it('we can modify the value before putting it in the array', function() {
			const arr = Array.from(arrayLike, (value) => value.toUpperCase());
			assert.deepEqual(arr, ['ONE', 'TWO']);
		});

		it('and we also get the object`s key as second parameter', function() {
			const arr = Array.from(arrayLike, (value, key) => `${key}=${value}`);
			assert.deepEqual(arr, ['0=one', '1=two']);
		});
	});

});
