function range(start,finish,seq) {
    let array = [];
    if(start<finish){
        while (start <= finish) {
            array.push(start);
            if (arguments.length > 2){
                start += seq;
            }else{
                start++;
            }
        }
    }else{
        while (start >= finish) {
            array.push(start);
            if (arguments.length > 2) {
                start += seq;
            } else {
                start--;
            }
        }
    }
    return array;
}
function sum(array){
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55