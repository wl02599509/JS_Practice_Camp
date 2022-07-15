function heroCreator(name, power) {
    //this -> { } 做一個空物件 this指向他
    this.name = name
    this.power = power
    //對this空物件灌進東西，也就是把 name = name / power = power 塞進 this空物件裡
    // return this
}

const h1 = new heroCreator("kk", 100) 
// new 不用return 

const h2 = heroCreator("kk", 100)
//沒有 new 就是一班的function，所以需要有return，不然undefined