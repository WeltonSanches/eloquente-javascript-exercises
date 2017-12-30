console.log(min(0, 10));
// → 0
console.log(min(32, 32));
// → -10


function min(x,y){
    if(x>y){
        return y;
    }else if(y>x){
        return x;
    }else{
        return 'Parecem iguais.';
    }
}