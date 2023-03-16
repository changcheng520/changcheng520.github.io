/*
'=================================================================================
'
'    Theme Plugins
'
'=================================================================================
*/

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright @ 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});


/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);



/*
 - Include-Function
*/
function include(url){ document.write('<script src="js/'+ url + '"></script>'); return false ;};




/*
 - Project:jQuery.imgAutoSize
*/

(function($){var loadImg=function(url,fn){var img=new Image();img.src=url;if(img.complete){fn.call(img)}else{img.onload=function(){fn.call(img);img.onload=null}}};$.fn.imgAutoSize=function(padding){var maxWidth=this.innerWidth()-(padding||0);return this.find('img').each(function(i,img){loadImg(this.src,function(){if(this.width>maxWidth){var height=maxWidth/this.width*this.height,width=maxWidth;img.width=width;img.height=height}})})}})(jQuery);


/*
 - Check IE6
*/
function checkIe6(){$("body").html('<div style="position:absolute;width:430px;padding:30px 30px;background:#D7D7D7;border:1px solid#B4B4B4;font-size:12px;color:#797979;text-align:center;top:25%;">System detects that your browser version is too low.Recommended <a href="http://windows.microsoft.com/zh-CN/internet-explorer/downloads/ie" style="color:#333;text-decoration:underline" target="_blank">Update IE</a> or <a href="http://www.google.cn/intl/zh-CN/chrome/browser/" style="color:#333;text-decoration:underline" target="_blank">Download Chrome</a></div>');$("html").css("overflow","hidden");$("#web-wrapper").css("visibility","hidden");absolutePositionCheck("#IE6-box")};


/*
 - Project:FollowWin 1.0
 - Designed: https://www.c945.com
 - Update: 2013/11
*/
/*
Use:
followWin("#regPanelWrapper-float",500,0,".close",".open",500,"#regPanelWrapper","bottom");
*/
function followWin(fID,speed,topDis,closeID,openID,btnSpeed,cID,redirect){var bodyTop=0;var fIDHeight=$(fID).height();$(this).scroll(function(){if(typeof window.pageYOffset!='undefined'){bodyTop=window.pageYOffset}else if(typeof document.compatMode!='undefined'&&document.compatMode!='BackCompat'){bodyTop=document.documentElement.scrollTop}else if(typeof document.body!='undefined'){bodyTop=document.body.scrollTop};if(redirect=="top"){$(fID).animate({"top":topDis+bodyTop+"px"},{queue:false,duration:speed})}else{$(fID).animate({"top":document.documentElement.clientHeight+bodyTop-fIDHeight+"px"},{queue:false,duration:speed})}});$(document).ready(function(){if(redirect=="top"){$(fID).animate({"top":topDis+bodyTop+"px"},{queue:false,duration:speed})}else{$(fID).animate({"top":document.documentElement.clientHeight+bodyTop-fIDHeight+"px"},{queue:false,duration:speed})};$(openID).fadeOut(btnSpeed)});$(closeID).click(function(){$(cID).fadeOut(btnSpeed);$(this).fadeOut(btnSpeed);$(openID).fadeIn(btnSpeed)});$(openID).click(function(){$(cID).fadeIn(btnSpeed);$(this).fadeOut(btnSpeed);$(closeID).fadeIn(btnSpeed)})};

/*
 - Project:DS_inputCursorFocusInnerText
 - Designed: https://www.c945.com
 - Update: 2013/11
*/

(function($){$.fn.DS_inputCursorFocusInnerText=function(options){var settings=$.extend({"defaultValue":"data-value","focusClassName":"inputFocusStyle"},options);this.each(function(){var $this=$(this),$defaultValue=settings.defaultValue,$focusClassName=settings.focusClassName;$this.blur(function(){if(this.value.length==0){var inputV=$(this).attr($defaultValue);this.value=inputV;$(this).removeClass($focusClassName)}else{$(this).addClass($focusClassName)}});$this.keyup(function(){var inputV=$(this).attr($defaultValue);if(this.value==inputV){$(this).removeClass($focusClassName)}else{$(this).addClass($focusClassName)}});$this.click(function(){var inputV=$(this).attr($defaultValue);if(this.value==inputV){this.value="";$(this).removeClass($focusClassName)}else{$(this).addClass($focusClassName)}});$this.each(function(){$(this).attr("value",$(this).attr($defaultValue))})})}})(jQuery);


/*
 - Project:DS_marquee
 - Designed: https://www.c945.com
 - Update: 2013/11
*/

(function($){$.fn.DS_marquee=function(options){var settings=$.extend({"scrollLabel":"ul:first","scrollSubLabel":"li:first","loopTime":2000,"speed":600,"scrollLength":"-50px","direction":"top"},options);this.each(function(){var $this=$(this),$loopTime=settings.loopTime,$speed=settings.speed,$scrollLabel=settings.scrollLabel,$scrollSubLabel=settings.scrollSubLabel,$scrollLength=settings.scrollLength,$direction=settings.direction;setInterval(function(){if($direction=="top"){$this.find($scrollLabel).animate({marginTop:$scrollLength},$speed,function(){$(this).css({marginTop:"0px"}).find($scrollSubLabel).appendTo(this)})}else{$this.find($scrollLabel).animate({marginLeft:$scrollLength},$speed,function(){$(this).css({marginLeft:"0px"}).find($scrollSubLabel).appendTo(this)})}},$loopTime)})}})(jQuery);


/*
 - Project:DS_middleBoxButton
 - Designed: https://www.c945.com
 - Update: 2013/11
*/
$.fn.DS_middleBoxButton=function(wl,poType){var divHeight=0,divWidth=0,_conH,_conW;$(this).each(function(){$wl=$(wl);_conH=$wl.height();_conW=$wl.width();divHeight=$(this).height();divWidth=$(this).width();if(poType=="relative"){$wl.css({"margin-top":(divHeight-_conH)/2+"px","margin-left":(divWidth-_conW)/2+"px"})}else{$wl.css({"top":(divHeight-_conH)/2+"px","left":(divWidth-_conW)/2+"px"})}})};


/*
 - Project:DS_AjaxLoadPage
 - Designed: https://www.c945.com
*/

(function($){$.fn.DS_AjaxLoadPage=function(options){var settings=$.extend({"TransformationCodingURL":"transformation.php?url=","operationContainerID":"ul.list li a","operation":"click","loadingCode":"<span class='ajax-loading-text'>Loading...</span>","operationEvent":function(){},"fileLoadCompletedEvent":function(){},"imgLoadCompletedEvent":function(){}},options);this.each(function(){var $this=$(this),$TransformationCodingURL=settings.TransformationCodingURL,$operation=settings.operation,$operationContainerID=settings.operationContainerID,$loadingCode=settings.loadingCode;$($operationContainerID).each(function(){if($(this).attr("href").indexOf("javascript")==-1){$(this).attr("data-href",$(this).attr("href"));$(this).attr("href","javascript:void(0)")}});if($operation=="click"){$($operationContainerID).click(function(){$loadURL=$(this).attr("data-href");settings.operationEvent();setTimeout(function(){ajaxinit()},1000)})};if($operation=="mouseover"){$($operationContainerID).mouseover(function(){$loadURL=$(this).attr("data-href");settings.operationEvent();setTimeout(function(){ajaxinit()},1000)})};if($operation.indexOf(".html")>0||$operation.indexOf(".htm")>0||$operation.indexOf(".php")>0||$operation.indexOf(".jsp")>0||$operation.indexOf(".xhtml")>0||$operation.indexOf(".jhtml")>0||$operation.indexOf(".cgi")>0){$loadURL=$operation;settings.operationEvent();ajaxinit()};function ajaxinit(){$this.html($loadingCode);$this.load($TransformationCodingURL+$loadURL,function(responseText,textStatus,XMLHttpRequest){if(textStatus=="error"){$(this).html("The URL does not exist.")}else if(textStatus=="timeout"){$(this).html("Load timeout, please refresh.")}else{settings.fileLoadCompletedEvent();$(this).find("img").load(function(){setTimeout(function(){settings.imgLoadCompletedEvent()},500)})}})}})}})(jQuery);


/*
 - Project:jquery hoverDelay
*/
/*
Use:
	$(".demo").hoverDelay({  
		hoverDuring: 700,
		hoverEvent: function(){
			 //code begin...
			     
		}
	});
*/
(function($){$.fn.hoverDelay=function(options){var defaults={hoverDuring:200,outDuring:200,hoverEvent:function(){$.noop()},outEvent:function(){$.noop()}};var sets=$.extend(defaults,options||{});var hoverTimer,outTimer,that=this;return $(this).each(function(){$(this).hover(function(){clearTimeout(outTimer);hoverTimer=setTimeout(function(){sets.hoverEvent.apply(that)},sets.hoverDuring)},function(){clearTimeout(hoverTimer);outTimer=setTimeout(function(){sets.outEvent.apply(that)},sets.outDuring)})})}})(jQuery);


/**
 * jQuery.fullBg
 * Version 1.0
 * Copyright (c) 2010 c.bavota - http://bavotasan.com
 * Dual licensed under MIT and GPL.
 * Date: 02/23/2010
**/
(function($){$.fn.fullBg=function(){var bgImg=$(this);bgImg.addClass('fullBg');function resizeImg(){var imgwidth=bgImg.width();var imgheight=bgImg.height();var winwidth=$(window).width();var winheight=$(window).height();var widthratio=winwidth/imgwidth;var heightratio=winheight/imgheight;var widthdiff=heightratio*imgwidth;var heightdiff=widthratio*imgheight;if(heightdiff>winheight){bgImg.css({width:winwidth+'px',height:heightdiff+'px'})}else{bgImg.css({width:widthdiff+'px',height:winheight+'px'})}};resizeImg();$(window).resize(function(){resizeImg()})}})(jQuery);


