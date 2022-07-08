

const btn = document.querySelector("#remove")

btn.addEventListener("click", function(){
    const li = document.querySelector("ul li:last-child")
    if (li) {
        li.remove()
    }
})