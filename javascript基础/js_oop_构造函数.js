// 创建对象的一个一个实例，可以采用直接创建对象实例的方法
// 但是，创建一个对象多个实例时需要构造函数,对象构造函数
// 对象构造函数的好处是会创建模版，方便多次实例化
function myNewObjectType() {
	this.info = "I an a new object";
	this.showInfo = function(){
		alert(this.info);
	}
	this.setInfo = function(newInfo) {
		this.info = newInfo;
	}
}

// 对象实例化
// 创建的实例都具有 myNewObjectType函数所定义的方法
var myNewObject = new myNewObjectType();

// 调用属性和方法
myNewObject.showInfo();
myNewObject.setInfo("覆盖掉信息")


// 创建多个实例
var myNewObject1 = new myNewObjectType();

var myNewObject2 = new myNewObjectType();

var myNewObject3 = new myNewObjectType();

var myNewObject4 = new myNewObjectType();


// 构造函数参数

function Person(personName) {
	this.name = personName;
	this.info = "I an called " + this.name;
	this.showInfo = function() {
		alert(this.info);
	};
}

var person1 = new Person("heguohui");

var person2 = new Person("heguohui");



