/*
'=================================================================================
'
'    主题对应Javascript文件
'    (此js文件请勿改名，系统会自动更新根目录变量MyrootPath_Temp，您可以在页面中引用此变量)
'    (MyrootPath_Temp为您网站的绝对路径，比如：  /blog/ )
'
'=================================================================================
*/

var MyrootPath_Temp="/"; //网站绝对路径，安装时系统自动修改，如果自己更换，请填写您安装程序的根目录，比如  /blog/ 

//获得元素坐标
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



$(document).ready(function(){
	
	//LOGO
	absolutePositionCheck("#logo");
	absolutePositionCheck("#sub-title");
	
	//content container
	absolutePositionCheck(".cbox-top");
	
	//icon btn
	absolutePositionCheck(".ac-comBtn");
	absolutePositionCheck(".ac-backBtn");

    //导航跟随
	/*Develop:没位道 www.c945.com*/
	$("#mainNav").find(".item a").each(function() {
		$(this).attr("data-slider","1");
	});
	$("#mainNav").find(".sub-item a").each(function() {
		$(this).attr("data-slider","0");
	});
	
	
	$(".nav-slide").animate({marginLeft: getElementCoordinate("#mainNav ul a","x") -20 + "px"},{queue:false,duration:200});
	setTimeout('$(".nav-slide").fadeIn(1000);',200);
	$("#mainNav .item a[data-slider='1']").mouseover(function(e){ 
	    $(".nav-slide").animate({marginLeft: (getElementCoordinate(this,"x") - 20 ) + "px"},{queue:false,duration:500});

	});
	//for < IE8
	if ($.browser.msie && ($.browser.version < 8)) {
		$(".nav-slide").animate({marginLeft: getElementCoordinate("#mainNav ul a","x") +20 + "px"},{queue:false,duration:200});
		$("#mainNav .item a[data-slider='1']").mouseover(function(e){ 
			$(".nav-slide").animate({marginLeft: (getElementCoordinate(this,"x") +20 ) + "px"},{queue:false,duration:500});
	
		});
	}
	
	//搜索UI提交
	$("#searchPost").click(function () {
		$('#searchUi').submit();
	});
	
	
	
	//tags随机大小
	 var tags_a = $("#sideTagsDiv a");
	 tags_a.each(function(){
		 var x = 9;
		 var y = 0;
		 var rand = parseInt(Math.random() * (x - y + 1) + y);
		 $(this).addClass("tags"+rand);
	  });
	  
	/*前后按钮*/
	var $PN = $(".btnPrev,.btnNext,#secFrame_recent .bl a,#secFrame_recent .br a");
	$PN.animate({opacity: 0.2},{queue:false,duration:100});
	$PN.hover(  
	function() {  
		$(this).animate({opacity: 1},{queue:false,duration:200});
	},   
	function() {  
		$(this).animate({opacity: 0.2},{queue:false,duration:200});
	});  
	
	//like
	$(".voteBtn").hover(  
	function() {  
		$(".voteBtn #attitudeinfo0").html("like");
	}); 
	
	//icon btn
	$('.ac-comBtn').click( 
		function () {
			showcommentForm();
			$("html,body").animate({scrollTop: $("#secFrame_formArea").offset().top}, 500);	
		}
	);
	$('.ac-backBtn').click( 
		function () {
			history.back(-1);
		}
	);
	
	


	//---导航高亮
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
	$('#mainNav ul.nav li').mousemove(function () {
	  
	  var $subMenuBox = $(this).find('ul');
	  $('#mainNav ul.nav li ul').css({ "display": "none" });
	  $subMenuBox.css({ "display": "block"});
	
	  $subMenuBox.mouseout(function () {
		  $subMenuBox.css({ "display": "none" });
	  })
	})
	
	$('#footer .copy span').click(function () {
	  $('body,html').animate({scrollTop:0},500);
	})
	  	  

		
	
});


/*jquery.easing-1.3.min*/
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a+c;return-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){if((a/=d/2)<1)return b/
2*a*a*a+c;return b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a+c;return-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a*a+c;return b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,
a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return a==0?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){if(a==0)return c;if(a==d)return c+b;if((a/=d/2)<1)return b/2*Math.pow(2,10*(a-1))+c;return b/2*(-Math.pow(2,-10*--a)+2)+c},
easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){if((a/=d/2)<1)return-b/2*(Math.sqrt(1-a*a)-1)+c;return b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,
a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d/2)==2)return c+b;f||(f=d*0.3*1.5);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);if(a<1)return-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c;return g*Math.pow(2,-10*(a-=1))*Math.sin((a*
d-e)*2*Math.PI/f)*0.5+b+c},easeInBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;if((a/=d/2)<1)return b/2*a*a*(((f*=1.525)+1)*a-f)+c;return b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=
d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){if(a<d/2)return jQuery.easing.easeInBounce(e,a*2,0,b,d)*0.5+c;return jQuery.easing.easeOutBounce(e,a*2-d,0,b,d)*0.5+b*0.5+c}});
