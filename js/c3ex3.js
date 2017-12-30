function countBs(text) {
    let counter = 0;
    let CharNow = text.length-1;
    while ((CharNow+1)>0){
        if (text.charAt(CharNow) == 'B'){
            counter++;
        }
        CharNow--;
    }
    return counter;
}
function countChar(text,procurar) {
    let counter = 0;
    let CharNow = text.length - 1;
    while ((CharNow + 1) > 0) {
        if (text.charAt(CharNow) == procurar) {
            counter++;
        }
        CharNow--;
    }
    return counter;
}
console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4