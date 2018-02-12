var arrays = [[1, 2, 3], [4, 5], [6]];
let reduzido = arrays.reduce(function (a, b) {
    return a.concat(b);
});
console.log(reduzido);
// → [1, 2, 3, 4, 5, 6]