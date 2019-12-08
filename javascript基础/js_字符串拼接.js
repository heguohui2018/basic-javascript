let num1 = "This is a ";
let num2 = "apple";
console.log(num1+num2);

let num1 = "This"
let num2 = "is"
let num3 = "a"
let num4 = "text"
console.log(num1+num2+num3+num4);

let newString = " ".concat("This","is","a","test");
console.log(newString);
	

let strName = prompt("What 's your name"," ");
if (strName == "Shelley"){
	alert("Your name is Shelley! Good for you!");
}else{
	alert("Your name isn't Shelley.Bummer.");
}

let username = prompt("Your name is"," ");
if (username == "heguohui"){
	prompt("This is my name");
}else{
	prompt("This isn't my name");
}

let username = prompt("Your name is ","");
if (username.toUpperCase() == "hEGUOHUI"){
	alert("This is my name");
}else{
	alert("not");
}

// 正向查找字串
let parentString = "This is cookbook's test script";
let subString = "cookbook";
let indexString = parentString.indexOf(subString);
console.log(indexString);

let parentString = "This is cookbook's test script";
let subString = "cookbook";
let indexString = parentString.indexOf(subString,5);
console.log(indexString);

// 反向查找字串
let parentString = "This is cookbook's test script";
let subString = "cookbook";
let indexString = parentString.lastIndexOf(subString);
console.log(indexString);

let parentString = "This is cookbook's test script";
let subString = "cookbook";
let indexString = parentString.lastIndexOf(subString,5);
console.log(indexString);


// 从字符串提取子串

let parentString = "This is cookbook .test script.This is a list of item:cookbook,book,cook.";
// let subString = "cookbook";
let start = parentString.indexOf(":");
let end = parentString.indexOf(".",start+1);
let list = parentString.substring(start+1,end);
console.log(list);

let signString = list.split(",");
console.log(signString);











