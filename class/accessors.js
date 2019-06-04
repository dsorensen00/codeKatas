// 23: class - accessors
// To do: make all tests pass, leave the assert lines unchanged!

describe('class accessors (getter and setter)', () => {

	it('only a getter is defined like a method prefixed with `get`', () => {
		// class MyAccount {
		// 	get money() { return Infinity; }
		//   }
		class MyAccount {
			get money() { return Infinity; }
			get balance() { return this.money; }
		}
		// added another get to return balance
		assert.equal(new MyAccount().balance, Infinity);
	});

	it('a setter has the prefix `set`', () => {
		// class MyAccount {
		// 	get balance() { return this.amount; }
		// 	set balance(amount) { this.amount = amount; }
		//   }
		// const account = new MyAccount();
    	// account.balance = 42;
		class MyAccount {
			get balance() { return this.amount; }
			set balance(amount) { this.amount = amount; }
		}
		const account = new MyAccount();
		account.balance = 23;
		// we were setting our balance at 42, just changed to 23
		assert.equal(account.balance, 23);
	});

	describe('dynamic accessors', () => {

		it('a dynamic getter name is enclosed in [ and ]', function() {
			// const balance = 'yourMoney';
			// class YourAccount {
			//   get [getterName]() { return -Infinity; }
			// }
			const balance = 'yourMoney';
			class YourAccount {
				get [balance]() { return -Infinity; }
			}
			// changed our getterName to our variable that holds our balance
			assert.equal(new YourAccount().yourMoney, -Infinity);
		});

		it('a dynamic setter name as well', function() {
			// const propertyName = 'balance';
			// class MyAccount {
			//   get [propertyName]() { return this.amount; }
			//   set propertyName(amount) { this.amount = 23; }
			// }
			// const account = new MyAccount();
			// account.balance = 42;
			const propertyName = 'balance';
			class MyAccount {
				get [propertyName]() { return this.amount; }
				set [propertyName](amount) { this.amount = 23; }
			}

			const account = new MyAccount();
			account.balance = 23;
			// changed account balance to 23 and put brackets around the second property name so
			// it would recognise it as a variable/paramater
			assert.equal(account.balance, 23);
		});
	});

});
