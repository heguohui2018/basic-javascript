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
