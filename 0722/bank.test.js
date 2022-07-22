// 3A原則
// Arrange
// Act
// Assert


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



test("存錢", ()=> {
    // Arrange
    const account = new BankAccount(5)
    // Act
    account.deposit(10)
    // Assert
    expect(account.balance).toBe(15)
})

test("不可存0或負數，否則顯示原餘額", ()=> {
    const account = new BankAccount(5)
    account.deposit(-10)
    expect(account.balance).toBe(5)
})

test("可以領錢", () => {
    const account = new BankAccount(20)
    const money = account.withdraw(5)
  
    expect(account.balance).toBe(15)
    expect(money).toBe(5)
})

test("不能領 0 元或是小於 0 元的金額（越領錢越多！）", () => {
    const account = new BankAccount(20)
    const money = account.withdraw(-5)

    expect(account.balance).toBe(20)
    expect(money).toBe(0)
})



test("不能領超過本身餘額", ()=> {
    const account = new BankAccount(20)
    const money = account.withdraw(30)
    expect(account.balance).toBe(20)
    expect(money).toBe(0)
})