$(document).ready(function(){
	windowSize();//RWD
    center(); //一進入網頁時，將導覽列垂直置中
	
	//縮放網頁時，重新將導覽列置中
    $(window).resize(function() {
		$('.menu').hide();
		windowSize();
        center();
    });
	
	//響應式設定
	function windowSize(){
		if($(window).width()>1024){
			$('.list_btn').css('display','none');
			$('.bar_list').css('display','');
			$(".bar_list").css('width','30%');
			$(".bar_list").css('top','1%');
			$(".home_img").css('width','40%');
			$(".about_text").css('font-size','160%');
			$(".about_text").css('line-height','40px');
			$(".pageword3").css('font-size','160%');
			$(".text1").css('line-height','45px');
			$(".pageword4").css('font-size','135%');
			$(".text2").css('line-height','30px');
		}
		else if(($(window).width()<=1024)&&($(window).width()>768)){
			$('.list_btn').css('display','none');
			$('.bar_list').css('display','');
			$(".bar_list").css('width','35%');
			$(".bar_list").css('top','2%');
			$(".home_img").css('width','35%');
			$(".about_text").css('font-size','120%');
			$(".about_text").css('line-height','30px');
			$(".pageword3").css('font-size','120%');
			$(".text1").css('line-height','40px');
			$(".pageword4").css('font-size','105%');
			$(".text2").css('line-height','25px');
			$(".in_text").css('left','14%');
		}
		else if(($(window).width()<=768)&&($(window).width()>425)){
			$('.list_btn').css('display','none');
			$('.bar_list').css('display','');
			$(".bar_list").css('width','45%');
			$(".bar_list").css('top','2%');
			$(".home_img").css('width','45%');
			$(".about_title").css('top','30%');
			$(".about_text").css('font-size','90%');
			$(".about_text").css('line-height','23px');
			$(".about_text").css('top','30%');
			$(".center").css('top','30%');
			$(".pageimage1 img").css('top','25%');
			$(".pageimage2 img").css('top','30%');
			$(".pageword3").css('font-size','100%');
			$(".pageword3").css('top','25%');
			$(".text1").css('line-height','30px');
			$(".pageword4").css('font-size','95%');
			$(".pageword3").css('top','25%');
			$(".text2").css('line-height','20px');
			$(".img_hover img").css('width','130px');
			$(".img_hover img").css('height','130px');
			$(".in_text").css('left','6%');
			$('.team_cc').css('font-size','8pt');
		}
		else if($(window).width()<=425){
			$('.logo_img').css('width','80px');
			/* $('.list_btn').css('display',''); */
			$(".bar_list").css('display','none');
			$(".navbar").css('display','none');
			$(".bar_list").css('width','50%');
			$(".home_img").css('width','65%');
			$(".about_img").attr('src','img/font/about_title_mobile.svg');
			$(".about_img").css('width','200%');
			$(".about_title").css('top','15%');
			$(".about_title").css('left','25%');
			$(".about_text").css('width','90%');
			$(".about_text").css('top','20%');
			$(".about_text").css('left','0');
			$(".about_text").css('font-size','60%');
			$(".about_text").css('line-height','20px');
			$(".center").css('top','40%');
			$(".center").css('padding','0 20%');
			$(".changeimg").css('top','40%');
			$(".changeimg").css('width','110%');
			$(".pageword1").css('width','50%');
			$('.pageimage3').css('display','none');
			$('.pageword3').css('width','80%');
			$('.pageword3').css('top','10%');
			$('.pageword3').css('left','15%');
			$(".pageword3").css('font-size','110%');
			$(".text1").css('line-height','35px');
			$('.pageword4').css('width','80%');
			$('.pageword4').css('top','10%');
			$('.pageword4').css('left','15%');
			$(".pageword4").css('font-size','100%');
			$(".text2").css('line-height','25px');
			$(".left_team").css('width','100%');
			$(".left_team").css('height','13%');
			$(".left_team").css('padding-top','11%');
			$(".left_team img").css('left','28%');
			$(".left_team img").css('top','8%');
			$(".left_team img").css('float','left');
			$(".right_team").css('width','100%');
			$(".right_team").css('height','87%');
			$(".tstyle").css('width','50%');
			$(".tstyle").css('height','130px');
			$(".img_hover img").css('width','80px');
			$(".img_hover img").css('height','80px');
			$(".in_text").css('left','25%');
			$(".team_title").attr('src','img/font/team_title_mobile.svg');
			$(".team_title").css('width','50%');
			$('.team_cc').css('font-size','8pt');
			$('.team_cc').css('padding-top','5px');
			$('.prevBtn').css('font-size','45pt');
			$('.prevBtn').css('left','1%');
			$('.nextBtn').css('font-size','45pt');
			$('.nextBtn').css('right','1%');
		}
	}
	
    //計算導覽列垂直置中的高度
    function center() {
        var pos = $(window).height()*2 / 5;
        $(".nav").css("top", pos);
    }
});