// var account_details={
//     1000:{acno:1000,balance:2000,username:"userone",password:"userone"},
//     1001:{acno:1001,balance:3000,username:"usertwo",password:"usertwo"},
//     1002:{acno:1002,balance:2002,username:"userthree",password:"userthree"},
//     1003:{acno:1003,balance:20000,username:"userfour",password:"userfour"}
// }

// console.log(1000 in account_details);

// console.log(account_details[1003].balance)

// console.log(account_details[1002].username);
// console.log(account_details[1002].password);


class bank {
    session = {"user":1001};

    account_details = {
        1000: { acno: 1000, balance: 2000, username: "userone", password: "userone" },
        1001: { acno: 1001, balance: 3000, username: "usertwo", password: "usertwo" },
        1002: { acno: 1002, balance: 2002, username: "userthree", password: "userthree" },
        1003: { acno: 1003, balance: 20000, username: "userfour", password: "userfour" }
    }

    accountCreate(acno, balance, username, password) {
        if (acno in this.account_details) {
            console.log("account already exists");
        }
        else {
            this.account_details[acno] = { acno, balance, username, password }
            console.log("account created");
            console.log(this.account_details);
        }
    }


    authenticate(account_number, username, password) {
        if (account_number in this.account_details) {
            if (this.account_details[account_number].username == username) {
                if (this.account_details[account_number].password == password) {
                    console.log("login success");
                    this.session["user"] = account_number;
                }
                else {
                    console.log("invalid password");
                }
            }
            else {
                console.log("invalid username");
            }
        }
        else {
            console.log("invalid account number");
        }
    };

    fundTransfer(from_acno, to_acno, amount) {
        if (from_acno == this.session["user"]) {
            if (to_acno in this.account_details) {
                if (this.account_details[from_acno].balance >= amount) {
                    this.account_details[from_acno].balance -= amount;
                    this.account_details[to_acno].balance += amount;
                    console.log(`transaction successful, your a/c ${from_acno} has debited ${amount}, current balance ${this.account_details[from_acno].balance}`);
                }
                else {
                    console.log("insufficient balance");
                }
            }
            else {
                console.log("invalid account number");
            }
        }
        else {
            console.log("login required");
        }
    };

    balEnquiry(){
        if("user" in this.session){
            console.log(`your a/c balance is ${this.account_details[this.session["user"]].balance}`);
        }
    }


}



// var obj = new bank();
// obj.accountCreate(1004,2000,"userfive","userfive")
// obj.authenticate(1004, "userfive", "userfive");

// var obj1 = new bank();
// obj1.authenticate(1001,"usertwo","usertwo");
// obj1.fundTransfer(1001, 1002, 1000);

// var obj2 = new bank();
// obj2.authenticate(1000,"userone","userone");
// obj2.balEnquiry();





