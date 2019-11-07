// 定义一个addTax函数
function addTax(one,two) {
     var total = one * (1+(two/200));
     return total
}

// call function    
var page = addTax(20,1000);
alert(page);
// 能正常工作：应为total变量是在函数内部，而函数外部total变量是不存在的，函数内部返回的是
// total变量的值，然后total变量的值又被赋值给了page变量

alert(total);
