$(document).ready(function(){
	var moving = 0;
	var num_li = $(".nav li").length;
    var n = 1;
	var height=screen.height;
	var width=screen.width;
	var dir; // 水平捲動方向：-1表示向左；1表示向右
	var duration;// 水平捲動速度
	var count;// 計次數
	var x;//抓變動後頁面的寬度
	var data;
	var gotop=0;
	$(".prevBtn").hide();//預設隱藏按鈕
	$(".nextBtn").hide();
	$('.menu').hide();
	
	//重新整理自動回第一頁
	jQuery("html,body").animate({
			scrollTop:0
		},1000);

	//上方童玩list hover
	$('.play_li').hover(function(){
		console.log("YES");
		$(this).find('.play_ul').stop().fadeIn("slow");
	},function(){
		$(this).find('.play_ul').stop().fadeOut("slow");
	});
	
	//點擊背景懸浮視窗消失
	$('body').click(function(evt) {
		if($(evt.target).find(".menu").length==0 && 
			evt.target.id != "listbar" && evt.target.class != "menu") {
			$('.menu').hide();
		}
	});
	
	//右側邊顯示hover
	var li_nav;
	$(".nav li").hover(
		function(){
			li_nav = '#'+ $(this).attr('id') + '_nav';
			$(this).find('span').fadeIn(300).css('display','block');
		}, function() {
			$(this).find('span').css('display','none');
	});
	
	//按下top回第一頁
	$("#gotop").click(function(){
		$('#gotop').stop().fadeOut(500);
		if($(window).width()>425){
			logoIn();
		}
		else{
			$('.logo').stop().fadeOut(800);
		}
		
		//$('.navbar').fadeIn(500);
		jQuery("html,body").animate({
			scrollTop:0
		},1000);
		n=1;
	});
	
	//滑動換頁
	$(window).bind("mousewheel", function(e) {
		$('.menu').hide();
		$("html, body").stop();
        if (moving == 0) {
			/* if ( $(this).scrollTop() > 200){
				$('#gotop').fadeIn("fast");
			} else {
				$('#gotop').stop().fadeOut("fast");
			} */
           /*  moving = 1; */
            if (e.deltaY == -1) {
                if (n < num_li) {
                    n++;
                }
            } else {
                if (n > 1) {
                    n--;
                }
            }
        }
		if($(window).width()>425){
			if(n==1){
				logoIn();
			}
			else{
				logoOut();
			}
		}
		else{
			if(n==1){
				$('.logo').stop().fadeOut(800);
			}
			else{
				$('.logo').stop().fadeIn(800);
			}
		}
		
		
		if(gotop==0){
			if(n==1){
				$('#gotop').stop().fadeOut(500);
			}
			else{
				$('#gotop').stop().fadeIn(500);
			}
		}
		
        //console.log(n);
        $("html, body").animate({
            "scrollTop": $(".p0" + n).offset().top
        },1000, function(){
           /*  moving = 0; */
        });
    });
	
	//點選右方導覽列時會到指定div
    for (var i = 0; i <= num_li; i++) {
        $(".nav li:eq(" + i + ")").click({
            id: i
        }, function(e) {
			if(e.data.id==0){
				if($(window).width()>425){
					logoIn();
					$('#gotop').stop().fadeOut(500);
				}
				else{
					$('.logo').stop().fadeOut(800);
					$('#gotop').stop().fadeOut(500);
				}
				//console.log(i);
				
				$(".nav li").css("background-color", "#FFF");
				var page = e.data.id + 1;
				$("html,body").animate({
					"scrollTop": $(".p0" + page).offset().top
				},1000);
				$(this).css("background-color", "#B53F45");
				n = e.data.id +1;
			}
			else{
				logoOut();
				$('#gotop').stop().fadeIn(500);
				$(".nav li").css("background-color", "#FFF");
				var page = e.data.id + 1;
				$("html,body").animate({
					"scrollTop": $(".p0" + page).offset().top
				},1000);
				$(this).css("background-color", "#B53F45");
				n = e.data.id +1;
			}
        });
    }

    //右側bar滑動顯示
    $(window).scroll(function() {
        if ($(window).scrollTop() >= $(".p01").offset().top && $(window).scrollTop() < $(".p02").offset().top) {
            $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(0)").css("background-color", "#B53F45")
        } else if ($(window).scrollTop() >= $(".p02").offset().top && $(window).scrollTop() < $(".p03").offset().top) {
            $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(1)").css("background-color", "#B53F45")
        } else if ($(window).scrollTop() >= $(".p03").offset().top && $(window).scrollTop() < $(".p04").offset().top) {
            $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(2)").css("background-color", "#B53F45")
        } else if ($(window).scrollTop() >= $(".p04").offset().top && $(window).scrollTop() < $(".p05").offset().top) {
            $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(3)").css("background-color", "#B53F45")
        } else if ($(window).scrollTop() >= $(".p05").offset().top && $(window).scrollTop() < $(".p06").offset().top)	{
            $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(4)").css("background-color", "#B53F45")
        }else if ($(window).scrollTop() >= $(".p06").offset().top) {
            $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(5)").css("background-color", "#B53F45")
        }
    });
	
	//上方list點擊跳頁
	$(".about_li").click(function(){
		n=2;
		$("html,body").animate({
			"scrollTop": $(".p0" + n).offset().top
		},800);
		logoOut();
		$('#gotop').stop().fadeIn(500);
		
	});
	$(".diabolo_li").click(function(){
		n=3;
		$("html,body").animate({
			"scrollTop": $(".p0" + n).offset().top
		},800);
		logoOut();
		$('#gotop').stop().fadeIn(500);
	});
	$(".ggro_li").click(function(){
		n=3;
		$("html,body").animate({
			"scrollTop": $(".p0" + n).offset().top
		},800);
		logoOut();
		$('#gotop').stop().fadeIn(500);
	});
	$(".shuttle_li").click(function(){
		n=4;
		$("html,body").animate({
			"scrollTop": $(".p0" + n).offset().top
		},800);
		logoOut();
		$('#gotop').stop().fadeIn(500);
	});
	$(".kendama_li").click(function(){
		n=4;
		$("html,body").animate({
			"scrollTop": $(".p0" + n).offset().top
		},800);
		logoOut();
		$('#gotop').stop().fadeIn(500);
	});
	$(".bamboo_li").click(function(){
		n=5;
		$("html,body").animate({
			"scrollTop": $(".p0" + n).offset().top
		},800);
		logoOut();
		$('#gotop').stop().fadeIn(500);
	});
	$(".marbles_li").click(function(){
		n=5;
		$("html,body").animate({
			"scrollTop": $(".p0" + n).offset().top
		},800);
		logoOut();
		$('#gotop').stop().fadeIn(500);
	});
	$(".team_li").click(function(){
		n=6;
		$("html,body").animate({
			"scrollTop": $(".p0" + n).offset().top
		},800);
		logoOut();
		$('#gotop').stop().fadeIn(500);
	});
	
	//點擊進入
	$(".page_open").click(function(){
		moving = 1;
		dir=-1;
		duration = 700;
		count=1;
		gotop=1;
		x=$(this).parents('.slide-page').width();
		console.log(x);
		/* $(this).parents('.slide').find('ul').prepend($(this).find("li:last-child")); // 修改頁面順序(將頁面3改為第1頁)
		$(this).parents('.slide').find('ul').css("left",-x); */// 修改頁面位置(偏移1個頁面的寬度)
		/* console.log("A"); */
		$(this).parents('.slide').find('.changeword').animate({top:"10%"},500);
		$(this).parents('.slide').find('.center').animate({padding:"0 20%"},500);
		if($(window).width()>425){
			$(this).parents('.slide').find('.changeimg').animate({top:"25%",width:"110%"},500);
		}
		else{
			$(this).parents('.slide').find('.changeimg').animate({top:"45%",width:"110%"},500);
		}
		$(this).parents('.slide').find('.nextBtn').show('normal');
		$('.nav').hide('normal');
		$(this).parents('.slide').animate({height:"100%"},1000);
		$(this).parents('.slide').siblings().hide('normal');
		$('#gotop').hide('normal');
		$(".page_open").stop().fadeOut("slow");
		$(this).parents('.page').find('.page_back').stop().fadeIn("slow");
	});
	
	//open hover變色
	$('.page_open').hover(function(){
		$(this).attr('src','img/btn_logo/enter_hover.png');
	},function(){
		$(this).attr('src','img/btn_logo/enter.png');
	});
	
	
	// 上一頁
	$(".prevBtn").click(function(){
		// 切換水平捲動的方向(向右)
		data='#'+$(this).attr('data');
		dir = 1;
		slidepage();
		
		//計數頁數控制是否隱藏按鈕
		count--;	
		if(count == 1)
		{
			$(this).parents('.slide').find('.prevBtn').hide('normal');
		}else{
			$(this).parents('.slide').find('.nextBtn').show('normal');
		}
	});
	
	// 下一頁
	$(".nextBtn").click(function(){
		// 切換水平捲動的方向(向左)
		data='#'+$(this).attr('data');
		dir = -1;
		slidepage();
		
		//計數頁數控制是否隱藏按鈕
		count++;	
		console.log($(this).next('ul').find('li').length,count);
		if(count == 4)
		{
			$(this).parents('.slide').find('.nextBtn').hide('normal');
		}else{
			$(this).parents('.slide').find('.prevBtn').show('normal');
		}
	});
	
	//返回
	$(".page_back").click(function(){
		$(this).siblings('.slide').find('.width').css("left",0);
		$(this).siblings('.slide').find('.changeword').animate({top:"0"},500);
		if($(window).width()>768){
			$(this).siblings('.slide').find('.changeimg').animate({top:"15%",width:"80%"},500);
			$(this).siblings('.slide').find('.center').animate({padding:"0 30%"},500);
		}
		else if(($(window).width()<=768)&&($(window).width()>425)){
			$(this).siblings('.slide').find('.changeimg').animate({top:"25%",width:"80%"},500);
			$(this).siblings('.slide').find('.center').animate({padding:"0 30%"},500);
		}
		else if ($(window).width()<=425){
			$(this).siblings('.slide').find('.changeimg').animate({top:"35%",width:"100%"},500);
			$(this).siblings('.slide').find('.center').animate({padding:"0 20%"},500);
		}
		moving = 0;
		gotop=0;
		$('.slide').show('normal');
		$(".prevBtn").hide('normal');
		$(".nextBtn").hide('normal');
		$(".slide").animate({height:"50%"},1000);
		$('.nav').show('normal');
		$('#gotop').show('normal');
		$(".page_open").stop().fadeIn("slow");
		$(".page_back").stop().fadeOut("slow");
		$("html, body").stop();
	});
	
	//back hover變色
	$('.page_back').hover(function(){
		$(this).attr('src','img/btn_logo/back_hover.png');
	},function(){
		$(this).attr('src','img/btn_logo/back.png');
	});
	
	$('.list_btn').click(function(){
		if($(".menu").css('display')=='none'){
			$(".menu").show('slow');
		}
		else{
			$(".menu").hide('slow');
		}
	});
	
	function slidepage(){
		if(dir == -1){
			//向左移1個頁面的寬度
			$(data).animate({"left" : "-="+x+"px" }, duration, function(){
				//修改頁面順序(first-child : ul中的第一個子節點)
				/* $(this).append($(this).find("li:first-child")); */
				//修改頁面位置
				/* $(this).css("left", -x); */
			});
		}else{
			$(data).animate({"left" : "+="+x+"px" }, duration, function(){
				/* $(this).prepend($(this).find("li:last-child")); */
				/* $(this).css("left", -x); */
				/* dir = -1; */
			});
		}
	}
	
	function logoIn(){
		$('.navbar').stop().fadeIn(2000);
		$('.logo').stop().fadeOut(800);
	}
	function logoOut(){
		$('.navbar').stop().fadeOut(800);
		$('.logo').stop().fadeIn(800);
	}
});