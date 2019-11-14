$(document).ready(function() {
	// .click()单击事件
	// $("button").click(function () { 

	// 	// this当前对象
	// 	$(this).hide();
	// 	// .hide()方法用于隐藏对象
	// });
	//
	
	// .dblclick()双击事件
	// $("button").dblclick(function () { 

	// 	$(this).hide();
	// });

	// .mouseenter()事件
	// $("button").mouseenter(function () { 

	// 	$(this).hide();
	// });

	// ..bind()事件用于绑定多个方法
	$("button").bind({
		click:function(){$("p").slideToggle();},
		mouseover:function(){$("body").css("background-color","red");},
		mouseout:function(){$("body").css("background-color","green");}
	});
});
