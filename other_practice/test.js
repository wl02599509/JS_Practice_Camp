const items = ['item1', 'item2', 'item3'];
const copy = [];

for (let i=0; i<items.length; i++) {
  copy.push(items[i])
}

console.log(copy);

const items1 = ['item1', 'item2', 'item3'];
const copy1 = [];

const list = items.forEach(function(item1){
  copy1.push(item1)
  return copy1;
});

console.log(list)

