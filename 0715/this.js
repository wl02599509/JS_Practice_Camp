const hero = {
    name: "kk",
    attack: function () {
        console.log(this)
    },
}

hero.attack()  //this 指的是hero


function hi() {
    console.log(this)
}

hi()  //沒人呼叫，就是瀏覽器的window
//所以等同下列
window.hi() 
//但要在瀏覽器執行，node執行會出錯

function hi() {
    function hey() {
        console.log(this)
    }
}

this 為 window
跟位置沒關係，只跟「誰呼叫」有關


const hero = {
    name: "kk",
    attack: () ＝ {
        console.log(power)
    },
}

function heroCreator(name, power) {
    //this -> {}
    this.name = name
    this.power = power
}

const h1 = new heroCreator("kk", 100);

// 把hero當this傳進去，但他不是參數

const hero = { power: 100}

function hi() {
    console.log(this)
}
hi.apply(hero)
hi.call(hero)

function hi() {
    console.log(this)
}