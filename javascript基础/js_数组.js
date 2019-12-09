let daysOfWeek = ["Subday","Monday","Tuesday","Wednesday",'Friday'];
// 获取数组元素个数
console.log(daysOfWeek.length);

// 循环遍历数组,取出每一个元素
for(let i =0;i<daysOfWeek.length;i++){
	console.log(daysOfWeek[i])
}


let number = [0,1,2,3,4,5,6,7,8,9];
// 在数组的末尾添加新的元素
number.push(10);
number.push(11,12);
number.push(13,14,15);
console.log(number);

// 在数组开头添加新元素
number.unshift(-2);
number.unshift(-4,-5);
number.unshift(-5,-6,-7);
console.log(number);

// 数组中删除元素,删除最后一个元素
number.pop();
console.log(number);

// 删除数组的第一个元素
number.shift();
console.log(number);

// 通过索引删除指定位置的元素
// 第一个参数为起始索引值，后面一个为需要删除的元素个数
number.splice(5,3)
console.log(number);

// 从索引值为5的位置删除三个元素，同时也添加三个元素
number.splice(5,3,2,3,4);
console.log(number);

// 数组只能存储一维数据，存储二维数据需要通过数组嵌套来实现
// 第一天
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

// 2*2矩阵
function printMatrix(myMatrix) {
	for(let i = 0;i<myMatrix.length;i++){
		for(let j =0;j<myMatrix.length[i];j++){
			console.log(myMatrix[i][j]);
		}
j}
}
printMatrix(averageTemp);









