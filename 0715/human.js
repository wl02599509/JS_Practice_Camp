class HumanCreator {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    sleep() {
        console.log("zzz");
    }
    eat() {
        console.log("yummy");
    }
}

const Mike = new HumanCreator("Mike", 20);
const Elly = new HumanCreator("Elly", 18);
Mike.sleep();
Elly.eat();