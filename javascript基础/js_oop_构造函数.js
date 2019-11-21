// 创建对象的一个一个实例，可以采用直接创建对象实例的方法
// 但是，创建一个对象多个实例时需要构造函数,对象构造函数
function myNewObjectType() {
	this.info = "I an a new object";
	this.showInfo = function(){
		alert(this.info);
	}
	this.setInfo = function(newInfo) {
		this.info = newInfo;
	}
}
