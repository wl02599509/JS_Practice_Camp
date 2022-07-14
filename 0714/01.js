const list = ["1", "2", "3", "4"];
const numberList = list.map(function(elm){
    return Number(elm);
})

const nList = [];
for(let i = 0; i < list.length; i++){
    nList.push(Number(list[i]))
}
console.log(nList)