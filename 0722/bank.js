class BankAccount{
    constructor(accountMoney){
        this.accountMoney = accountMoney
    }

    deposit(money){
        if (money > 0){
            this.accountMoney += money
        }
    }

    withdraw(money){
        if (money > 0 && money <= this.accountMoney){
            this.accountMoney -= money  
            return money
        } else {
            return 0;
        }
    }
    
    get balance(){
        return this.accountMoney;
    }
}