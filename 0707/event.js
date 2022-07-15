// const btn = document.querySelector("#btn")

// btn.addEventListener("click", function(){
//     console.log("Goode Job!")
// })

// 當整份文件讀取完，並將所有標籤轉換成物件後，所以這個寫法可以把<script src="event.js"></script>放在<head>裡。
// document.addEventListener("DOMContentLoaded", function () {
//     const btn = document.querySelector("#btn")
//     btn.addEventListener("click", function(){
//         console.log("Goode Job Elly!");
//     })
// })

// document.addEventListener("click", () => console.log("Goode job Mike!"))


const list = document.querySelector("a")
list.addEventListener("click", function(e){
    e.preventDefault();
    console.log("Stop the link!");
})