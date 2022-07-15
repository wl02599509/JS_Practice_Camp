class heroCreator {
    constructor(name, power){
        this.name = name
        this.power = power
    }
    attack() {
        console.log("attack!!")
    }
}

const h1 = new heroCreator("kk", 100)
console.log(h1)

h1.attack()  // "attack!!"


class Actions {
    attack() {
        console.log("attack!!")
    }
}

class HeroCreator extends Actions{
    constructor(name, power){
        this.name = name
        this.power = power
    }
}

const h2 = new heroCreator("kk", 100)
h2.Attack