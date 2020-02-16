//
//
// create 2 classes:
//
//Account Class:
//Attributes/Fields
//-account number
//-owner
//-a list of transactions // starts off empty
//method:
// -balance(): loop through all the transactions
//  and return the current balance.
// - add transaction(amount, payee); // checks to see if amount is valid (ie cannot debit more than the balence)
//
// - instead of addTransaction();
//  deposit(amt)
//  charge(payee, amt)
//

//Transaction Class
// -amount (can be positive or negative)// passed into constructor
// -payee// passed into constructor
// -date// auto set into constructor

//Create a SavingsAccount that extends Account
//- interestRate
//- accrueInterest(): This method should get the balance,
//  and add a new transaction to the list of transactions
//  for the interest accrued on the account.

class account {
  constructor(acctnumb, owner) {
    this.owner = owner;
    this.number = acctnumb;
    this.transactions = [];
  }
  balance() {
    let bal = 0;
    if (this.transactions.length > 0) {
      let amts = this.transactions.map(value => {
        return value.amount;
      });
      bal = amts.reduce((prev, current) => {
        return current + prev;
      });
    }
    return bal;
  }
  addTransaction(payee, amount) {
    let newTrans = new transaction(payee, amount);
    this.transactions.push(newTrans);
  }
}

class transaction {
  constructor(payee, amount) {
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();
  }
}

class Savings extends account {
  constructor(owner, acctnumb, interestRate) {
    super(owner, acctnumb);
    this.interestRate = interestRate;
  }
}

let acctA = new account("123-456-789", "John Doe");
acctA.addTransaction("Deposit", 1000);
acctA.addTransaction("Target", -45);
acctA.addTransaction("Free Birds", -7.35);
console.log(acctA.balance()); //should print 942.65
acctA.addTransaction("Fraud", -1000); // this should not go through
console.log(acctA.balance()); //should print 942.65
