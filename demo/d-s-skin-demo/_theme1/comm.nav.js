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

/*==============导航菜单滑动效果==============*/

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



$(document).ready(function (){
	
	
    //导航跟随
	var defaultMenuPositionX = ((document.documentElement.clientWidth - 998)/2 + 0);


    $("#mainNav ul.nav, em.slide").animate({marginLeft: defaultMenuPositionX + "px"},{queue:false,duration:200});
	$("#mainNav ul.nav").animate({marginLeft: defaultMenuPositionX + 30 + "px"},{queue:false,duration:200});
	$("em.slide").animate({marginLeft: (defaultMenuPositionX +  30 ) + "px"},{queue:false,duration:200});
	//IE
	if ($.browser.msie && $.browser.version > 6 ) {

	}
	//for IE6
	if ($.browser.msie && $.browser.version < 7) {
		defaultMenuPositionX = ((document.documentElement.clientWidth - 998)/2 + 30);
		$("#mainNav ul.nav, em.slide").animate({marginLeft: defaultMenuPositionX + 10 + "px"},{queue:false,duration:200});
		$("em.slide").animate({marginLeft: (defaultMenuPositionX + 40) + "px"},{queue:false,duration:200});
	}
	
	
	$("#mainNav ul.nav,#mainNav, em.slide").fadeIn(1000);
	
	//for IE6
	if ($.browser.msie && $.browser.version < 7) {
		$("em.slide").animate({marginLeft: (defaultMenuPositionX +  5 ) + "px"},{queue:false,duration:200});
	}
	
	
	$("#mainNav a").mouseover(function(e){ 
	    $("em.slide").animate({marginLeft: (getElementCoordinate(this,"x") ) + "px"},{queue:false,duration:200});

	
	});
	
	
	//tags随机大小
	 var tags_a = $("#sideTagsDiv a");
	 tags_a.each(function(){
		 var x = 9;
		 var y = 0;
		 var rand = parseInt(Math.random() * (x - y + 1) + y);
		 $(this).addClass("tags"+rand);
	  });
	
	
	
});


//二级导航
$(document).ready(function(){

	  $('#mainNav ul.nav li').mousemove(function () {
		  var $subMenuBox = $(this).find('ul');
		  $('#mainNav ul.nav li ul').css({ "display": "none" });
		  $subMenuBox.css({ "display": "block"});
	
		  $subMenuBox.mouseleave(function () {
			  $subMenuBox.css({ "display": "none" });
		  })
	  })
	  
	  $('#mainNav ul.nav li ul, #mainNav ul.nav li ul a').mousemove(function () {
		  $("em.slide").css({ "display": "none" });
	  })
	  $('#mainNav ul.nav li ul, #mainNav ul.nav li ul a').mouseout(function () {
		  $("em.slide").css({ "display": "block" });
	  })
  
});


//============scroll-stop-start
(function(){
    
    var special = jQuery.event.special,
        uid1 = 'D' + (+new Date()),
        uid2 = 'D' + (+new Date() + 1);
        
    special.scrollstart = {
        setup: function() {
            
            var timer,
                handler =  function(evt) {
                    
                    var _self = this,
                        _args = arguments;
                    
                    if (timer) {
                        clearTimeout(timer);
                    } else {
                        evt.type = 'scrollstart';
                        jQuery.event.handle.apply(_self, _args);
                    }
                    
                    timer = setTimeout( function(){
                        timer = null;
                    }, special.scrollstop.latency);
                    
                };
            
            jQuery(this).bind('scroll', handler).data(uid1, handler);
            
        },
        teardown: function(){
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid1) );
        }
    };
    
    special.scrollstop = {
        latency: 300,
        setup: function() {
            
            var timer,
                    handler = function(evt) {
                    
                    var _self = this,
                        _args = arguments;
                    
                    if (timer) {
                        clearTimeout(timer);
                    }
                    
                    timer = setTimeout( function(){
                        
                        timer = null;
                        evt.type = 'scrollstop';
                        jQuery.event.handle.apply(_self, _args);
                        
                    }, special.scrollstop.latency);
                    
                };
            
            jQuery(this).bind('scroll', handler).data(uid2, handler);
            
        },
        teardown: function() {
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid2) );
        }
    };
    
})();

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

$(function(){

	
	var lastScrollTop = 0;
	
	$(window).bind('scrollstop', function(e){
	
    	var scrollTop = $(window).scrollTop();
    	var st = $(this).scrollTop();
    	
    	
    	if(scrollTop > 136)
    	{
			$('#shortNavShow').fadeIn(500);
			//主导航
			
			//for IE6
			if ($.browser.msie && $.browser.version < 7) {
				//

			}else{
			$("#mainNav").css({"top":-10 + "px","position":"fixed"});
			$("em.slide").fadeOut(500);
			}

    		if (st > lastScrollTop){
	       		$('#shortNavShow').each(function(i){
		  		
			  		$(this).animate({
			    		top: scrollTop -200
			  		}, 1, function() {
		   		
		  			});
		  			
		  			$(this).delay(150*i).animate({
			    		top: scrollTop + 2
			  		}, 500, 'easeOutBack', function() {
		   		
		  			});
		  	
		  		});
	    	} else {
	    		$('#shortNavShow').each(function(i){
	      			
		  			
		  			$(this).delay(150*i).animate({
			    		top: scrollTop + 10
			  		}, 500, 'easeOutBack', function() {
		   		
		  			});
		  		});
	    	}
		  	
		  	
		  	
		  	
    	}
    	else
    	{
			//主导航
			$("#mainNav").css({"top":131 + "px","position":"absolute"});
			$("em.slide").fadeIn(500);

			
			$('#shortNavShow').fadeOut(500);
    		$('#shortNavShow').each(function(i){
		  		
		  		$(this).delay(150*i).animate({
		    		top: 65
		  		}, 500, 'easeOutBack', function() {
		   		
		  		});
		  	
		  	});
    	}
    	
    	lastScrollTop = st;
    	
    	
    });
    
    
 


});

/*==============快速导航==============*/
$(document).ready(function(){
	//for IE6
	if ($.browser.msie && $.browser.version < 7) {
	
	}else{
		$("body").prepend('<div id="shortNavShow"><a href="javascript:" onclick="$(\'body,html\').animate({scrollTop:0},500);" class="m1"></a></div>');
		$("#footer").prepend('<a class="topBtn" href="javascript:" onclick="$(\'body,html\').animate({scrollTop:0},500);"></a>');
		
	}
			
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
	
});

