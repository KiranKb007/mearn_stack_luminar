// // localStorage.setItem("username","raju")
// // localStorage.setItem("password","abc123")
// // localStorage.setItem("token","123")

// var person1={pname:"ram",account_number:1000,balance:2000,password:"userone"}
// var person2={pname:"ram pj",account_number:1001,balance:2000,password:"usertwo"}

// localStorage.setItem(person1.account_number,JSON.stringify(person1));
// localStorage.setItem(person2.account_number,JSON.stringify(person2));

// function getBalance(account_number){
//     if (account_number in localStorage){
//         let user=JSON.parse(localStorage.getItem(account_number));
//         console.log(user.balance);
//     }
//     else{
//         console.log("invalid account number");
//     }

// }

// function authenticate(account_number,password){
//     if (account_number in localStorage){
//         let user=JSON.parse(localStorage.getItem(account_number))
//         if (user.password==password && user.account_number==account_number){
//             console.log("login success");
//         }
//         else{
//             console.log("invalid credentials");
//         }
//     }
//     else{
//         console.log("invalid account number, login failed");
//     }
// }



class Bank {

    createAccount() {
        let person_name = name.value;
        let account_number = acno.value;
        let balance = bal.value;
        let password = pwd.value;
        let user = {
            person_name, account_number, balance, password
        }
        localStorage.setItem(account_number, JSON.stringify(user));
        alert("Account Created Successfully!")
        location.href = "banklogin.html"
    }

    validateAccountNumber() {
        return acno in localStorage ? true : false
    }

    authenticate() {
        let account_number = acno.value;
        let password = pwd.value;
        if (account_number in localStorage) {
            let user = JSON.parse(localStorage.getItem(account_number))
            if (user.password == password) {
                alert("Log In Success")
                sessionStorage.setItem(account_number, JSON.stringify(user))
                location.href = "userhome.html";
            }
            else {
                alert("Invalid Credentials")
            }
        }
        else {
            alert("Invalid Account Number")
        }
        }

    loggingout(){
        sessionStorage.clear()
        alert("Log Out Successful")
    }

    balEnquiry(){
        let user= JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
        alert(`Available Balance is ${user.balance}`)
    }

    fundTransfer(){
        let to_acno=toacno.value;
        let amount=amt.value;
        if(to_acno in localStorage){
            if(sessionStorage){
                let user= JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
                if(user.balance>=amount){
                    let user1=JSON.parse(localStorage.getItem(to_acno))
                    let user2=JSON.parse(localStorage.getItem(user.account_number))
                    let bal=Number(user1.balance)+Number(amount)
                    user1.balance=Number(bal)
                    user2.balance-=Number(amount)
                    localStorage.setItem(user1.account_number,JSON.stringify(user1))
                    localStorage.setItem(user2.account_number,JSON.stringify(user2))
                    user.balance-=amount
                    sessionStorage.setItem(user.account_number,JSON.stringify(user))               
                    alert("Transaction Successful")
                }
            }

        }
        else{
            alert("Invalid Transaction")
        }
    }
}

var bank = new Bank();



