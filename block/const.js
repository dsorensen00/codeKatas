// 8: block scope - const
// To do: make all tests pass, leave the asserts unchanged!

describe('`const` is like `let` plus read-only', () => {

	describe('scalar values are read-only', () => {

		it('number', () => {
			const constNum = 0;
			//constNum = 1;
			assert.equal(constNum, 0);
			// comented out second constNum because you cannot edit const

		});

		it('string', () => {
			const constString = 'I am a const';
			//constString = 'Cant change you?';
			assert.equal(constString, 'I am a const');
			// comented out second constString because you cannot edit const
		});

	});

	const notChangeable = 23;

	it('const scope leaks too', () => {
		assert.equal(notChangeable, 23);
	});

	describe('complex types are NOT fully read-only', () => {

		it('array', () => {
			const arr = [42, 23];
			arr[0] = 0;
			arr[0] = 42;
			// just changed the index 0 to 42
			assert.equal(arr[0], 42);
		});

		it('object', () => {
			// const obj = {x: 1};
			// obj.x = 2;
			const obj = {x: 1};
			obj.x = 3;
			// just changed the value of key x
			assert.equal(obj.x, 3);
		});

	});

});
