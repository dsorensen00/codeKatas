// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!

describe('class creation', () => {

	it('is as simple as `class XXX {}`', function() {
		// let TestClass;
		// const instance = new TestClass();
		class TestClass{};
		const instance = new TestClass();
		// to declare a class, you need to use class then variable name, not let
		assert.equal(typeof instance, 'object');
	});

	it('class is block scoped', () => {
		// class Inside {}
		// {class Inside {}}
		{class Inside {}}
		{class Inside {}}
		// added braces around the first one so it brings the class out of the parent's 
		// scope.
		assert.equal(typeof Inside, 'undefined');
	});

	it('special method is `constructor`', function() {
		// class User {
		// 	constructor(id) {}
		//   }
		// const user = new User(42);
		class User {
			constructor(id) {
				this.id = 42;
			}
		}
		const user = new User();
		// added the id to the constructor, now new users will be built with id 42
		assert.equal(user.id, 42);
	});

	it('defining a method is simple', function() {
		// class User {
      
		// }
		// const notATester = new User();
		class User {
			writesTests() {
				return 23 == 42
			}
		}
		const notATester = new User();
		// added a function called writesTests that returns false-- inherits like a constructor.
		assert.equal(notATester.writesTests(), false);
	});

	it('multiple methods need no commas (opposed to object notation)', function() {
		// class User {
		// 	wroteATest() { this.everWroteATest = true; }
		// 	isLazy() {  }
		//   }
		// const tester = new User();
		// assert.equal(tester.isLazy(), true);
		// tester.wroteATest();
		// assert.equal(tester.isLazy(), false);
		class User {
			constructor() { this.everWroteATest = false; }
			wroteATest() { this.everWroteATest = true; }
			isLazy() { return !this.everWroteATest  }
		}

		const tester = new User();
		assert.equal(tester.isLazy(), true);
		tester.wroteATest();
		assert.equal(tester.isLazy(), false);
		//added a constructor which makes the tester lazy by default, but then when we call 
		// the tester wroteATest function, it changes the everWroteATest to true, 
		// and had isLazy return everWroteAtest
	});

	it('anonymous class', () => {
		// const classType = typeof {};
		const classType = typeof class{
			someMethod(foo) { return foo ; }
		};
		// made an anonymous class that returns a method and somehow is called a function?????
		assert.equal(classType, 'function');
	});

});
