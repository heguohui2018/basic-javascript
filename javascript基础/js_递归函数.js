function power(base,expoent) {
	if (expoent == 0) {
		return 1;
	}else{
		return base*power(base, expoent-1);
	}
}
console.log(power(2, 3));

// 调用自己的函数称为递归函数
// power(2,3)
// 2*power(2,2)
// 2*2*power(2,1)
// 2*2*2*power(2,0)
//
//
function power1(base,expoent) {
	if (expoent == 0) {
		return 1;
	}else{
		return base*power1(base, expoent-1);
	}
}
console.log(power1(2, 4));


function power2(base,expoent) {
	if (expoent == 0) {
		return 1;
	}else{
		return base*power2(base, expoent-1);
	}
}
console.log(power2(2, 5));

