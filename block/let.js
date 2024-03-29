// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!

describe('`let` restricts the scope of the variable to the current block', () => {

	describe('`let` vs. `var`', () => {

		it('`var` works as usual', () => {
			// if (true) {
			// 	let varX = true;
			//   }
			if (true) {
				var varX = true;
			}
			// changed let to var because var will lift out to other scopes
			assert.equal(varX, true);
		});

		it('`let` restricts scope to inside the block', () => {
			// if (true) {
			// 	var letX = true;
			//   }
			if (true) {
				let letX = true;
			}
			// changed var to let, let doesn't allow lifting out of scope
			assert.throws(() => console.log(letX));
		});

	});

	describe('`let` usage', () => {

		it('`let` use in `for` loops', () => {
			// let obj = {x: 1};
			// for (var key in obj) {}
			let obj = {x: 1};
			for (let key in obj) {}
			// just changed var to let
			assert.throws(() => console.log(key));
		});

		it('create artifical scope, using curly braces', () => {
			// {
			// 	var letX = true;
			// }
			{
				let letX = true;
			}
			// just changed var to let
			assert.throws(() => console.log(letX));
		});

	});

});
