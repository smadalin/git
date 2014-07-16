function summ(a, b){
	return a + b;
};

var button = document.getElementById("summ");
button.onclick = function(){
	var x = 5;
	var y = 10;
	var result = summ(x, y);
	console.log(result);
}