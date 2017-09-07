var result = '';
for (var i = 0; i <= 6; i++) {
	for (var j = 0; j <= i; j++) {
		result += '#';
	}
	result += '\n';
}
console.log(result);