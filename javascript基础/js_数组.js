// 初始化一个数组
let daysOfWeek1 = new Array();
console.log(daysOfWeek1.length);

// 初始化指定长度的数组
let daysOfWeek2 = new Array(7);
console.log(daysOfWeek2.length);

// 将数组元素作为参数传递给构造器
let daysOfWeek3 = ["Subday","Monday","Tuesday","Wednesday",'Friday'];
// 获取数组元素个数
console.log(daysOfWeek3.length);

// 循环遍历数组,取出每一个元素
for(let i =0;i<daysOfWeek3.length;i++){
	console.log(daysOfWeek3[i])
}


let number1 = [0,1,2,3,4,5,6,7,8,9];
// 在数组的末尾添加新的元素
number1.push(10);
console.log('number1 ='+ number1);

let number2 = [0,1,2,3,4,5,6,7,8,9];
number2.push(11,12);
console.log('number2 ='+ number2);

let number3 = [0,1,2,3,4,5,6,7,8,9];
number3.push(13,14,15);
console.log('number3 ='+ number3);

let number4 = [0,1,2,3,4,5,6,7,8,9];
// 在数组开头添加新元素
number4.unshift(-2);
console.log('number4 =' + number4);

let number5 = [0,1,2,3,4,5,6,7,8,9];
number5.unshift(-4,-5);
console.log('number5 =' + number5);

let number6 = [0,1,2,3,4,5,6,7,8,9];
number6.unshift(-4,-6,-7);
console.log('number6 =' + number6);

// 数组中删除元素,删除最后一个元素
let number7 = [0,1,2,3,4,5,6,7,8,9];
number7.pop();
console.log('number7 =' + number7);

// 删除数组的第一个元素
let number8 = [0,1,2,3,4,5,6,7,8,9];
number8.shift();
console.log('number8 =' + number8);

// 通过索引删除指定位置的元素
// 第一个参数为起始索引值，后面一个为需要删除的元素个数
let number9 = [0,1,2,3,4,5,6,7,9,9];
number9.splice(5,3)
console.log('number9 =' + number9);

// 从索引值为5的位置删除三个元素，同时也添加三个元素
let number10 = [0,1,2,3,4,5,6,7,8,10];
number10.splice(5,3,2,3,4);
console.log('number10 =' + number10);

// 数组只能存储一维数据，存储二维数据需要通过数组嵌套来实现
// 第一天
let averageTemp = [];
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 73;
averageTemp[0][2] = 74;
averageTemp[0][3] = 75;
averageTemp[0][4] = 76;
averageTemp[0][5] = 77;
averageTemp[0][6] = 78;
averageTemp[1] = [];
averageTemp[1][0] = 82;
averageTemp[1][1] = 83;
averageTemp[1][2] = 84;
averageTemp[1][3] = 85;
averageTemp[1][4] = 86;
averageTemp[1][5] = 87;
averageTemp[1][6] = 88;
console.log(averageTemp);
console.log(averageTemp.length);
console.log(averageTemp[0][3]);

// 2*2矩阵
// function printMatrix(myMatrix) {
// 	for(let i = 0;i<myMatrix.length;i++){
// 		for(let j =0;j<myMatrix.length[i];j++){
// 			console.log(myMatrix[i][j]);
// 		}
// 	}
// }
// printMatrix(averageTemp);


// // 数组合并
// let zero = 0;
// let oneArray = [1,2,3];;
// let twoArray = [-1,2,3];
// let newArray = oneArray.concat(zero,twoArray);
// console.log(newArray);





