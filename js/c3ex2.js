function isEven(x) {
    if (x > 0 && ((x % 2) == 0) || x == 0){
        return true;
    } else if (x > 0 && ((x % 2) != 0) || x == 1){
        return false;
    } else if(x<0){
        //quebro mesmo hein
        return isEven(x-1);
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??