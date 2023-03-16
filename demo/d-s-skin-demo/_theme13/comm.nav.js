/*
'=================================================================================
'
'    主题对应Javascript文件
'    (此js文件请勿改名，系统会自动更新根目录变量MyrootPath_Temp，您可以在页面中引用此变量)
'
'=================================================================================
*/

var MyrootPath_Temp="/"; //网站绝对路径，安装时系统自动修改，如果自己更换，请填写您安装程序的根目录，比如  /blog/ 
var searchURLActionUrl =  MyrootPath_Temp + "";
var msgFastActionUrl = MyrootPath_Temp + "";
var msgNormalActionUrl =  MyrootPath_Temp + "";
var commentNormalActionUrl =  MyrootPath_Temp + "";
var loginActionUrl = MyrootPath_Temp + "";

var bodyWidth = document.documentElement.clientWidth;
var bodyHeight = document.documentElement.clientHeight;
var screnWidth = window.screen.width;
var screnHeight = window.screen.height;//获得元素坐标
function getElementCoordinate(id,type){
	
	var _thisTop =  $(id).offset().top;
	var _thisLeft =  $(id).offset().left;
	
	if (type == "x"){
	    return _thisLeft;		
	}
	if (type == "y"){
	    return _thisTop;	
	}	
	
	
}

function topEffect(){
	
    if(tE == true){
		
		$(window).scroll(function(){
				if ($(window).scrollTop()>70){
					$(".blog-info,#searchBox,#tagsList").fadeOut(500);
					$("#mainNav,#header,#searchBox,#topDeco,#leftLineLogo").animate({marginTop: "-143px"},{queue:false,duration:500});
		
				}
				else
				{
					$(".blog-info,#searchBox,#tagsList").fadeIn(500);
					$("#mainNav,#header,#searchBox,#topDeco,#leftLineLogo").animate({marginTop: "0px"},{queue:false,duration:500});
				}
		});
	
		
	}
}



$(function () {

	absolutePositionCheck("#topDeco");
	absolutePositionCheck("#mainNav");
	absolutePositionCheck(".home-links");
	topEffect();
	
	
	$('#search-form').attr("action", searchURLActionUrl);
	$("#s-btn").click(function () {
		$('#search-form').submit();
	});
	
	$("#mainNav ul.nav li.item a:last").css("border-right","none");
	

	
	$(window).scroll(function(){
		if ($(window).scrollTop()>100){
			$("#back-to-top").fadeIn(500);
		}
		else
		{
			$("#back-to-top").fadeOut(500);
		}
		});
		//当点击跳转链接后，回到页面顶部位置
		$("#back-to-top").click(function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
	});

	$("#mainNav,#header,#searchBox,#topDeco").animate({marginTop: "0px"},{queue:false,duration:1500});


	
	//返回
    $(".sub-title-list-btn").click(  
		function() {  
			history.back(-1);

	});	
	

	//滚动条
	$('.content-left .cs').jScrollbar({
        scrollStep : 45,
        position : 'right',
        showOnHover : true
    });
	
	
	//评论、留言提交
	$('#msgForm').attr("action", msgNormalActionUrl);
	$('#commentForm').attr("action", commentNormalActionUrl);
	$("#msg-sub").click(function () {
		$('#commentForm,#msgForm').submit();
	});
	
	  
	  
	//back-top
	$(document).UItoTop({ easingType: 'easeOutQuart' });
			
	//导航高亮
	var showNavSelect = MySite.Cookie.get("navNowC");
	$("#mainNav li").addClass("navDefault");
	$("#" + showNavSelect).addClass("navSelected");
	$("#" +showNavSelect).removeClass("navDefault");
	
	$('#mainNav li a').click( 
		function () {
			var thisNavC = $(this).parent("li").attr("id");
			var expdate=new Date();
			var ctime = 5000;//5秒
			expdate.setTime(expdate.getTime()+ ctime);
			MySite.Cookie.set("navNowC",thisNavC,expdate);
	
		}
	);
	
	//二级导航
	var nav = $("#mainNav");
	nav.find("li").each(function() {
		if ($(this).find("ul").length > 0) {
			//show subnav on hover
			$(this).mouseenter(function() {
				$(this).find("ul").stop(true, true).slideDown(100);
			});
			
			//hide submenus on exit
			$(this).mouseleave(function() {
				$(this).find("ul").stop(true, true).slideUp(100);
			});
		}
	});
	
	
});



//for IE6
if ($.browser.msie && $.browser.version < 7) {
	tE = false;

	function resizeDiv()
	{
		var docWidth = document.documentElement.clientWidth;
		var docHeight = document.documentElement.clientHeight;
		$("#mainNav").css({"position":"absolute","top": parseInt(document.documentElement.scrollTop,10)+ 127 + "px"});
		$("#header").css({"position":"absolute","top": parseInt(document.documentElement.scrollTop,10)+ 0 + "px"});
		$("#leftLine").css({"position":"absolute","top": parseInt(document.documentElement.scrollTop,10)+ 0 + "px"});
		$("#leftLineLogo").css({"position":"absolute","top": parseInt(document.documentElement.scrollTop,10)+ 29 + "px"});
		$("#searchBox").css({"position":"absolute","top": parseInt(document.documentElement.scrollTop,10)+ 90 + "px"});
		

	}
	//window.onresize = resizeDiv;
	window.onscroll = resizeDiv;
	
	$(document).ready(function (){
	
	   $("#leftLine").css("height",window.screen.height + "px");
		
		
	}); 
}






//调用快捷管理导航(需要assets-old/template_main/js/shortCut.js文件)
top_shortCut();

