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
	// 总共绑定了三个事件，
	// 一个是点击事件，
	// 一个是鼠标移动到按钮上，改变背景颜色
	// 一个是鼠标从按钮上移除，再次改变背景颜色
	// $("button").bind({
	// 	click:function(){$("p").slideToggle();},
	// 	mouseover:function(){$("body").css("background-color","red");},
	// 	mouseout:function(){$("body").css("background-color","green");}
	// });

	// .focus()获得焦点时触发事件
	// .blur()失去焦点触发事件
	// $("input").focus(function () {
	// 	$("input").css("background-color","orange");
	// });
	// $("input").blur(function() {
	// 	$("input").css("background-color","yellow");
	// });
	// $(".button1").click(function() {
	// 	$("input").focus();
	// });
	// $(".button2").click(function() {
	// 	$("input").blur();
	// });

	// .change()事件
	// 改事件用于文本域以及select元素
	// $("input").change(function() {
	// 	$(this).css("background-color","red");
	// });


	// .delegate()
	// .slideToggle()事件，起到淡出效果,隐藏元素
	// $("div").delegate("p","click",function() {
	// 	$(this).slideToggle();
	// });
	// $("div").delegate("button","click",function() {
	// 	$("<p>这是一个段落").insertAfter("button");
	// });

	// .off()事件是为移除通过.on()事件添加给元素的所有相关事件
	// $("p").on("click",function() {
	// 	$(this).slideToggle();
	// });
	// $("button").click(function() {
	// 	$("p").off();
	// })

	// $("img").error(function() {
	// 	$("img").replaceWith("<p><b>图片未加载</b></p>");
	// });
	// $("button").click(function() {
	// 	$("img").error();
	// });

});
