
const input = document.querySelector(".input")
document.querySelector(".btn").addEventListener("click", () => {
    const hero = {
        name: 'kk',
        power: 100
    }
    localStorage.setItem("kk", JSON.stringify(hero))
    // "{name:'kk', power:100}" 將物件壓縮成字串 JSON.stringify()
    // 否則會是 [Object Object]
    console.log(input.value)
})

document.addEventListener("DOMContentLoaded", () => {
    const hero = JSON.parse(localStorage.getItem("kk"))
    console.log(hero.name)
    input.value = hero.name
})