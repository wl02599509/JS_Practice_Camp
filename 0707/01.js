const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = list.filter((elm) => elm > 4)
                   .filter((num) => num % 2 === 0)
                   .map((square) => square ** 2)
                   .reduce((acc, vc) => acc + vc);
console.log(result);