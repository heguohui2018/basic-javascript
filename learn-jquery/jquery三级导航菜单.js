$(function() {
	$(".nav3 ul").hide();
	$(".nav3 li a:first-child").click(function() {
		$(this).siblings().toggle();
	});
	
});
