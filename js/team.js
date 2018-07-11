$(document).ready(function(){
	
	//製作團隊hover變化
	var stu_div;
	$(".img_hover").hover(
	function(){
		stu_div ='#'+ $(this).attr('id') + '_stu';
		//console.log(stu_div);
		$(stu_div).fadeIn(300).css('display','block');
	}, function() {
		$(stu_div).css('display','none');
	});
});