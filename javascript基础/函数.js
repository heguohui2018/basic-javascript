function Cube(x) {
	alert(x*x*x);
}

function times(a,b) {
	alert(a*b);
}

function Area(a, b) {
	return a*b;
}
Area(3,4);

function sum(a,b) {
	return a+b;
}
sum(2,5);

var a = 10;
var b = 10;
function showVars() {
	var a = 20;
	b = 20;
	return "Local variable 'a' =" + a +"\nGloab variable 'b' =" + b;
}
var message = showVars();
alert(message +"\nGloab variable 'a' =" + a);

var mydate = new Date();
var year = mydate.getFullYear();
var month = mydate.getMonth();
var date = mydate.getDate();
var day = mydate.getDay();
var hours = mydate.getHours();
var minutes = mydate.getMinutes();
var seconds = mydate.Seconds();

let user = {
	name:"Joho",
	age:30
};


