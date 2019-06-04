// 25: class - extends
// To do: make all tests pass, leave the assert lines unchanged!

describe('classes can inherit from another', () => {

	describe('the default super class is Object', () => {

		it('class A is an instance of Object', () => {
			// let A
			class A {}
			// changed let to class, class is by default an instance of object
			assert.equal(new A() instanceof Object, true);
		});

		it('B extends A, B is also instance of Object', () => {
			// class A {}
			// class B {}	  
			class A {}
			class B extends A {}
			// made class B extend class A- still an instance of object.
			assert.equal(new B() instanceof A, true);
			assert.equal(new B() instanceof Object, true);
		});

		it('class can extend `null`, not an instance of Object', () => {
			// class NullClass extends Object {}
			// let nullInstance = new NullClass();
			class NullClass extends null {}
			let nullInstance = new NullClass();
			// literally did what it says
			assert.equal(nullInstance instanceof Object, false);
		});

	});

	describe('instance of', () => {
		it('when B inherits from A, `new B()` is also an instance of A', () => {
			// let A;
      		// class B extends A {}
			class A {};
			class B extends A {}
			// made A a class so B can extend A.
			assert.equal(new B() instanceof A, true);
		});

		it('extend over multiple levels', () => {
			// class A {}
      		// class C extends B {}
			class A {}
			class B extends A {}
			class C extends B {}
			let instance = new C();
			// added class B extending A, therefore C inherits A when extending
			// B. Also created new C as instance.
			assert.equal(instance instanceof A, true);
		});
	});
});
