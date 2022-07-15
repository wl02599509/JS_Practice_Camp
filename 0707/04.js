// const list = document.getElementsByClassName("same")

// for(let i = 0; i < list.length; i++){
//     console.log(list[i].textContent);
// }



const list_2 = document.querySelectorAll(".same")
//nodelist物件，有forEach
list_2.forEach((x) => 
    console.log(x.textContent)
)