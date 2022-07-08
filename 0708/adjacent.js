document.querySelector("#btn").addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "I'm here!"
    
    document.querySelector("#list").insertAdjacentElement("beforeend", li);

})