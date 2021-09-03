class bank{
    accountCreate(acno,ac_type,balance){
        this.acno=acno;
        this.ac_type=ac_type;
        this.balance=balance;
    }

    deposit(amount){
        this.balance+=amount;
        console.log(`your account number ${this.acno} has been credited with ${amount} avail bal ${this.balance}`);
    }

    withdrawal(amount){
        if (this.balance>amount){
            this.balance-=amount;
        }
        else{
            console.log("insufficient balance");
        }
    }

    balanceEnq(){
        console.log(`your available balance is ${this.balance}`);
    }
}

var obj1=new bank();
obj1.accountCreate(100,"savings",5000);
obj1.deposit(2000);
console.log(obj1.balance);
obj1.withdrawal(10000);
