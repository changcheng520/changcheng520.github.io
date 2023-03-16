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
//var menuHover_bg = MyrootPath_Temp + "template/img/menu-hover.JPG";
var menuHover_bg = "img/nav-hover-bg.PNG";
var bodyWidth = document.documentElement.clientWidth;
var bodyHeight = document.documentElement.clientHeight;
var screnWidth = window.screen.width;
var screnHeight = window.screen.height;


$(function () {
	
	//slider arrow居中
	var sliderArrowMDis = (bodyWidth - $("#sliderContainer").width()) / 2;
	$(".rslides_nav.prev").css("left",sliderArrowMDis + "px");
	$(".rslides_nav.next").css("right",sliderArrowMDis + "px");
	
	
	//for IE6
	if ($.browser.msie && $.browser.version < 7) {
		
		//IE6固定层
		function fixedIE6()
		{
			var docWidth = document.documentElement.clientWidth;
			var docHeight = document.documentElement.clientHeight;
			$(".bar-top").css({"position":"absolute","top": parseInt(document.documentElement.scrollTop,10)+ (docHeight - 60) + "px"});
			
		}
		//window.onresize = resizeDivAlertIE6;
		window.onscroll = fixedIE6;
		
		//slider居中
		$("#sliderContainer .rslides img").css("left",sliderArrowMDis + "px");
		
		//导航hover
		$("#mainNav ul.nav li.item").hover(  
			function() {  
				$(this).css("background","url(" + menuHover_bg + ") repeat-x");
				$("li.navNone").css("background","none");
			},   
			function() {  
				$(this).css("background","none");
				$("#" + showNavSelect).css("background","url(" + menuHover_bg + ") repeat-x");
		}); 
		
		
		
	}
	
	
	
	//网站背景固定
	$(window).scroll(function(){
		var webBgValue = 200;
		if ($(window).scrollTop() > webBgValue){
			$("body").css({"background-attachment":"fixed","background-position":" 50% " + (-webBgValue) + "px"});
		}
		else
		{
			$("body").css({"background-attachment":"scroll","background-position":" 50% 0%"});
		}
	});
	
	
	//tags随机大小
	 var tags_a = $("#sideTagsDiv a");
	 tags_a.each(function(){
		 var x = 9;
		 var y = 0;
		 var rand = parseInt(Math.random() * (x - y + 1) + y);
		 $(this).addClass("tags"+rand);
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


//调用快捷管理导航(需要assets-old/template_main/js/shortCut.js文件)
top_shortCut();