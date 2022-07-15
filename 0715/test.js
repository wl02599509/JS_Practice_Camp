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

const h2 = new HeroCreator("kk", 100);
h2.attack();