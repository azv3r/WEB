// Реализуйте функцию sum
function sum(){
	var curSum = 0;
	this.forEach(e => {curSum += e});
	return curSum;
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));