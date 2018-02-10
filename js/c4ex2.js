function reverseArray(array){
    let array_novo = [];
    let j = 0;
    for (let i = array.length-1; i >= 0; i--) {
        array_novo[j] = array[i];
        j++;
        //console.log('Array: ' + array[(j - 1)]+ '| J:'+(j-1)+'| I:'+i);
    }
    return array_novo;
}
function reverseArrayInPlace(array) {
    
    let metade_arr = Math.floor(array.length / 2);
    let maior_arr = array.length-1;
    let aux;
    for (let i = 0; i < metade_arr; i++) {
        aux = array[i];
        array[i] = array[maior_arr];
        array[maior_arr] = aux;
        maior_arr--;
    }
    return array;
}

//console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]