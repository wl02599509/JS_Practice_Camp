const hi = document.querySelector("#hi")

const yoyo = document.createElement("div")
yoyo.textContent = "Hey man!"
hi.appendChild(yoyo) 


//製作ul li
const ul = document.createElement("ul")

const li1 = document.createElement("li")
li1.textContent = "li_1" 

const li2 = document.createElement("li")
li2.textContent = "li_2"

const li3 = document.createElement("li")
li3.textContent = "li_3"

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

hi.appendChild(ul);


//用for迴圈
for(let i = 1; i < 4; i++){
    const li = document.createElement("li")
    li.textContent(`hi ${i}`);
    ul.appendChild(li);
}
