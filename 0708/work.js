const ad = document.querySelector(".ad")
const bye = document.querySelector("#remove-btn")

// const f = document.querySelector("remove-btn").parentNode



bye.addEventListener("click", function(){
    ad.remove();
})