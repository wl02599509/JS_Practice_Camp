const h = document.getElementById("hello")
h.textContent = "<h1>456</h1>"

h.innerHTML = "<h1>456</h1>"

//後面蓋掉前面
console.log(h);



const item = document.querySelector(".list li:nth-child(2)") //透過CSS選取器
item.textContent = "ZZZ"