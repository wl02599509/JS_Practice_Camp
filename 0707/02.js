let hero = {
    //kepy = power, age
    //value = 100, 20
    power: 100,
    age: 20,
    function(){
        console.log("ATTACK!")
    }
}

console.log(hero);  //印出hero物件 { power: 100, age: 20, function: [Function: function] }
console.log(hero['age']);
console.log(hero.age);