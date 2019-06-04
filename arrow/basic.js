// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!

describe('arrow functions', function() {

	it('are shorter to write', function() {
		// var func = function(){};
		var func = () => {
			return 'I am func';
		};
		// we weren't returning anything
		assert.equal(func(), 'I am func');
	});

	it('a single expression, without curly braces returns too', function() {
		// var func = () => {};
		var func = () => 'I return too';
		// again, not returning anything, looking for just a one liner version too
		assert.equal(func(), 'I return too');
	});

	it('one parameter can be written without parens', () => {
		// var func = p => param - 1;
		var func = param => param - 1;
		// we were passing a paramater as p but called param instead
		assert.equal(func(25), 24);
	});

	it('many params require parens', () => {
		// var func = param => param + param1;
		var func = (param, param1) => param + param1;
		// we were only passing one param in and calling two
		assert.equal(func(23, 42), 23+42);
	});

	it('body needs parens to return an object', () => {
		// var func = () => {iAm: 'an object'};
		var func = () => ({iAm: 'an object'});
		// had to wrap in paranthesese  because it would otherwise thing it is 
		// jumping into the body of the function
		assert.deepEqual(func(), {iAm: 'an object'});
	});

});
