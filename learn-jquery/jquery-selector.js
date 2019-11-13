$(document).ready(function(){
	// 给按钮增加一个点击事件
	$("button").click(function(){

		// 元素选择器
		$("p").text("p元素被修改");

		// id选择器
		$("#h2-id").text("修该h2标题");

		// 类选择器
		$(".red").text("一级标题被修改了")
	})
})
