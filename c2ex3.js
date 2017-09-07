var size = 12;
var result = '';
var changeL;
var changeR = 1;
for (var i = 0; i < size; i++) {
	if(changeR == 1){
		changeL = 0;
		changeR--;
	}else{
		changeL = 1;
		changeR++;
	}
	for(var j = 0; j < size; j++){
		if(changeL == 0){
			result += '#';
			changeL++;
		}else{
			result += ' ';
			changeL--;	
		}
	}
	result += '\n';
}
console.log(result);