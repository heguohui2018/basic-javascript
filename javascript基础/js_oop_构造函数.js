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


// 构造函数多个参数
// 创建一个汽车对象
function Car(Color ,Year, Make, User) {
	this.Color = Color;
	this.Year = Year;
	this.Make = Make;
	this.User = User;
	this.setOdometer = function(newUser) {
		this.User = newUser;
	};
}
var Car1 = new Car("red","2019","China","heguohui");

var Car2 = new Car("orange","2018","China","heguohui");

var Car3 = new Car("pink","2018","China","heguohui");

Car1.setOdometer("wang");

// 创建酒店对象
function Hotel (name,rooms,booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function () {
		return this.rooms -this.booked;
	}
}

var quayHotel = new Hotel("Quay","40","20");
var quayHotel = new Hotel("Park","40","20");


// 对已进行实例化对象进行扩展
// 通过使用关键字 prototype,来添加属性和方法
Proson.prototype.sayHello = function() {
	alert(this.name + "says helllo");
}


function User(name) {
	this.name = name;
	this.amdin = true;
}

let user = new User("Jack");
alert(user.name);
alert(user.amdin);



