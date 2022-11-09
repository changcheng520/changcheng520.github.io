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

var searchURLActionUrl =  MyrootPath_Temp + "";
var menuHover_bg = "img/menu-hover.JPG";
var msgFastActionUrl = MyrootPath_Temp + "";


$(function () {
	//面包屑导航
	$(window).scroll(function(){
		if ($(window).scrollTop()>316){
			$(".navClass").addClass("breadcrumbsClass-fix");
		}
		else
		{
			$(".navClass").removeClass("breadcrumbsClass-fix");
		}
	});
	
	
});


$(document).ready(function(){
	
	//li style
	$("#shortNavLink li:eq(1)").css("display","none");
	$("#mainNav ul.nav li.item:first").css("border-left","none");
	$("#mainNav ul.nav li.item:last").css("border-right","none");
	$(".worksList li .btnLine span:odd").css("margin-top","-75px");

	$("#mainNav ul.nav li.item").hover(  
		function() {  
		    $(this).css("background","url(" + menuHover_bg + ") repeat-x");
			$("li.navNone").css("background","none");
		},   
		function() {  
		    $(this).css("background","none");
			$("#" + showNavSelect).css("background","url(" + menuHover_bg + ") repeat-x");
	}); 


	//tags随机大小
	 var tags_a = $("#sideTagsDiv a");
	 tags_a.each(function(){
		 var x = 9;
		 var y = 0;
		 var rand = parseInt(Math.random() * (x - y + 1) + y);
		 $(this).addClass("tags"+rand);
	  });


    //评论框
	
	//for IE6
	if ($.browser.msie && $.browser.version < 7) {
		$("#commentForm").css("display","block");
	}
	
	//---back-top
	$(document).UItoTop({ easingType: 'easeOutQuart' });
			
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
	$(document).ready(function(){
		
	
	  $('#mainNav ul.nav li').mousemove(function () {
		  
		  var $subMenuBox = $(this).find('ul');
		  $('#mainNav ul.nav li ul').css({ "display": "none" });
		  $subMenuBox.css({ "display": "block"});
	
		  $subMenuBox.mouseleave(function () {
			  $subMenuBox.css({ "display": "none" });
		  })
	  })
	  
	});
		
	
});


//底部留言
function checkForm_foot(theForm){

exp=/[^0-9()-]/g; 
exp2=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
if(theForm.FuserName.value=="" || theForm.FuserName.value=="姓名")
{
	theForm.FuserName.focus();
	$("#ftip").html("<div class=tipsFloatWin>×&nbsp;用户昵称不能为空！</div>").slideDown(500);
	setTimeout('$("#ftip").slideUp(500);',1000);
	return false;
}
if(theForm.FEmail.value=="" || theForm.FEmail.value=="电子邮箱")
{
	theForm.FEmail.focus();
	$("#ftip").html("<div class=tipsFloatWin>×&nbsp;电子邮箱不能为空！</div>").slideDown(500);
	setTimeout('$("#ftip").slideUp(500);',1000);
	return false;
}	
if (theForm.FEmail.value!="" && theForm.FEmail.value.search(exp2) == -1 && theForm.FEmail.value!="电子邮箱")
{
	theForm.FEmail.focus();
	$("#ftip").html("<div class=tipsFloatWin>×&nbsp;请认真填写您的电子邮箱！</div>").slideDown(500);
	setTimeout('$("#ftip").slideUp(500);',1000);
	return  false;  	
}
if(theForm.FContent.value.length < 6 || theForm.FContent.value=="留言内容")
{
	theForm.FContent.focus();
	$("#ftip").html("<div class=tipsFloatWin>×&nbsp;留言内容不能少于6个字符！</div>").slideDown(500);
	setTimeout('$("#ftip").slideUp(500);',1000);
	return false;
}
	$("#ftip").html("<div class=tipsFloatWin>发送成功...</div>").slideDown(500);
	$("#footer .sub").fadeOut(500);
	setTimeout('$("#ftip").slideUp(500);',2000);
	return true;
}

function msgHtml(){

    document.write('<form target="msgF" action="' + msgFastActionUrl + '" method="post" onSubmit="return checkForm_foot(this);">');
    document.write('                     <input type="text" name="FuserName" class="ft nofocus focusJS" data-value="姓名" value=""><br>');
    document.write('                     <input type="text" name="FEmail" class="ft nofocus focusJS" data-value="电子邮箱" value=""><br>');
    document.write('                     <textarea class="fe nofocus focusJS" name="FContent" data-value="留言内容"></textarea>');
    document.write('                    <br>');
    document.write('                    <input type="submit" class="sub" value="提交">');
    document.write('                   <span id="ftip">loading...</span> ');             
    document.write('</form><iframe name="msgF" style="display:none"></iframe>');
			 	
}

function searchBoardHtml(){
	
    document.write('<div class="comm-searchBoard">');
    document.write('    <div class="d">');
    document.write('        <form target="_blank"  name="searchForm" method="post" action="' + searchURLActionUrl + '" class="searchFormS">');
    document.write('            <input name="stable" value="article" type="hidden"><input name="keywords" type="text"  class="searchTxtBox nofocus"  placeholder="Search..."  value="" />');
    document.write('        </form>');
    document.write('    </div>');
    document.write('</div>');
}




/*jquery.easing-1.3.min*/
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a+c;return-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){if((a/=d/2)<1)return b/
2*a*a*a+c;return b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a+c;return-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a*a+c;return b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,
a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return a==0?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){if(a==0)return c;if(a==d)return c+b;if((a/=d/2)<1)return b/2*Math.pow(2,10*(a-1))+c;return b/2*(-Math.pow(2,-10*--a)+2)+c},
easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){if((a/=d/2)<1)return-b/2*(Math.sqrt(1-a*a)-1)+c;return b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,
a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d/2)==2)return c+b;f||(f=d*0.3*1.5);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);if(a<1)return-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c;return g*Math.pow(2,-10*(a-=1))*Math.sin((a*
d-e)*2*Math.PI/f)*0.5+b+c},easeInBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;if((a/=d/2)<1)return b/2*a*a*(((f*=1.525)+1)*a-f)+c;return b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=
d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){if(a<d/2)return jQuery.easing.easeInBounce(e,a*2,0,b,d)*0.5+c;return jQuery.easing.easeOutBounce(e,a*2-d,0,b,d)*0.5+b*0.5+c}});


/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);

/*scroll*/
$.fn.extend({mousewheel:function(Func){return this.each(function(){var _self=this;_self.D=0;if($.browser.msie||$.browser.safari){_self.onmousewheel=function(){_self.D=event.wheelDelta;event.returnValue=false;Func&&Func.call(_self);};}else{_self.addEventListener("DOMMouseScroll",function(e){_self.D=e.detail>0?-1:1;e.preventDefault();Func&&Func.call(_self);},false);}});}});$.fn.extend({jscroll:function(j){return this.each(function(){j=j||{};j.Bar=j.Bar||{};j.Btn=j.Btn||{};j.Bar.Bg=j.Bar.Bg||{};j.Bar.Bd=j.Bar.Bd||{};j.Btn.uBg=j.Btn.uBg||{};j.Btn.dBg=j.Btn.dBg||{};var jun={W:"15px",BgUrl:"",Bg:"",Bar:{Pos:"up",Bd:{Out:"#ccc",Hover:"#ccc"},Bg:{Out:"#fff",Hover:"#000",Focus:"#333"}},Btn:{btn:true,uBg:{Out:"",Hover:"#fff",Focus:"orange"},dBg:{Out:"",Hover:"#fff",Focus:"orange"}},Fn:function(){}}
j.W=j.W||jun.W;j.BgUrl=j.BgUrl||jun.BgUrl;j.Bg=j.Bg||jun.Bg;j.Bar.Pos=j.Bar.Pos||jun.Bar.Pos;j.Bar.Bd.Out=j.Bar.Bd.Out||jun.Bar.Bd.Out;j.Bar.Bd.Hover=j.Bar.Bd.Hover||jun.Bar.Bd.Hover;j.Bar.Bg.Out=j.Bar.Bg.Out||jun.Bar.Bg.Out;j.Bar.Bg.Hover=j.Bar.Bg.Hover||jun.Bar.Bg.Hover;j.Bar.Bg.Focus=j.Bar.Bg.Focus||jun.Bar.Bg.Focus;j.Btn.btn=j.Btn.btn!=undefined?j.Btn.btn:jun.Btn.btn;j.Btn.uBg.Out=j.Btn.uBg.Out||jun.Btn.uBg.Out;j.Btn.uBg.Hover=j.Btn.uBg.Hover||jun.Btn.uBg.Hover;j.Btn.uBg.Focus=j.Btn.uBg.Focus||jun.Btn.uBg.Focus;j.Btn.dBg.Out=j.Btn.dBg.Out||jun.Btn.dBg.Out;j.Btn.dBg.Hover=j.Btn.dBg.Hover||jun.Btn.dBg.Hover;j.Btn.dBg.Focus=j.Btn.dBg.Focus||jun.Btn.dBg.Focus;j.Fn=j.Fn||jun.Fn;var _self=this;var Stime,Sp=0,Isup=0;$(_self).css({overflow:"hidden",position:"relative",padding:"0px"});var dw=$(_self).width(),dh=$(_self).height()-1;var sw=j.W?parseInt(j.W):21;var sl=dw-sw;var bw=j.Btn.btn==true?sw:0;if($(_self).children(".jscroll-c").height()==null){$(_self).wrapInner("<div class='jscroll-c' style='top:0px;z-index:9999;zoom:1;position:relative'></div>");$(_self).children(".jscroll-c").prepend("<div style='height:0px;overflow:hidden'></div>");$(_self).append("<div class='jscroll-e' unselectable='on' style=' height:100%;top:-4px;right:0;-moz-user-select:none;position:absolute;overflow:hidden;z-index:10000;cursor:pointer;'><div class='jscroll-u' style='position:absolute;top:0px;width:100%;left:0;background:blue;overflow:hidden'></div><div class='jscroll-h'  unselectable='on' style='background:green;position:absolute;left:0;-moz-user-select:none;border:1px solid'></div><div class='jscroll-d' style='position:absolute;bottom:0px;width:100%;left:0;background:blue;overflow:hidden'></div></div>");}
var jscrollc=$(_self).children(".jscroll-c");var jscrolle=$(_self).children(".jscroll-e");var jscrollh=jscrolle.children(".jscroll-h");var jscrollu=jscrolle.children(".jscroll-u");var jscrolld=jscrolle.children(".jscroll-d");if($.browser.msie){document.execCommand("BackgroundImageCache",false,true);}
jscrollc.css({"padding-right":sw});jscrolle.css({width:sw,background:j.Bg,"background-image":j.BgUrl});jscrollh.css({top:bw,background:j.Bar.Bg.Out,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Out,width:sw-2});jscrollu.css({height:bw,background:j.Btn.uBg.Out,"background-image":j.BgUrl});jscrolld.css({height:bw,background:j.Btn.dBg.Out,"background-image":j.BgUrl});jscrollh.hover(function(){if(Isup==0)$(this).css({background:j.Bar.Bg.Hover,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Hover})},function(){if(Isup==0)$(this).css({background:j.Bar.Bg.Out,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Out})});jscrollu.hover(function(){if(Isup==0)$(this).css({background:j.Btn.uBg.Hover,"background-image":j.BgUrl})},function(){if(Isup==0)$(this).css({background:j.Btn.uBg.Out,"background-image":j.BgUrl})});jscrolld.hover(function(){if(Isup==0)$(this).css({background:j.Btn.dBg.Hover,"background-image":j.BgUrl})},function(){if(Isup==0)$(this).css({background:j.Btn.dBg.Out,"background-image":j.BgUrl})});var sch=jscrollc.height();var sh=(dh-2*bw)*dh/sch;if(sh<10){sh=10}
var wh=sh/6;var curT=0,allowS=false;jscrollh.height(sh);if(sch<=dh){jscrollc.css({padding:0});jscrolle.css({display:"none"})}else{allowS=true;}
if(j.Bar.Pos!="up"){curT=dh-sh-bw;setT();}
jscrollh.bind("mousedown",function(e){j['Fn']&&j['Fn'].call(_self);Isup=1;jscrollh.css({background:j.Bar.Bg.Focus,"background-image":j.BgUrl});var pageY=e.pageY,t=parseInt($(this).css("top"));$(document).mousemove(function(e2){curT=t+e2.pageY-pageY;setT();});$(document).mouseup(function(){Isup=0;jscrollh.css({background:j.Bar.Bg.Out,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Out});$(document).unbind();});return false;});jscrollu.bind("mousedown",function(e){j['Fn']&&j['Fn'].call(_self);Isup=1;jscrollu.css({background:j.Btn.uBg.Focus,"background-image":j.BgUrl});_self.timeSetT("u");$(document).mouseup(function(){Isup=0;jscrollu.css({background:j.Btn.uBg.Out,"background-image":j.BgUrl});$(document).unbind();clearTimeout(Stime);Sp=0;});return false;});jscrolld.bind("mousedown",function(e){j['Fn']&&j['Fn'].call(_self);Isup=1;jscrolld.css({background:j.Btn.dBg.Focus,"background-image":j.BgUrl});_self.timeSetT("d");$(document).mouseup(function(){Isup=0;jscrolld.css({background:j.Btn.dBg.Out,"background-image":j.BgUrl});$(document).unbind();clearTimeout(Stime);Sp=0;});return false;});_self.timeSetT=function(d){var self=this;if(d=="u"){curT-=wh;}else{curT+=wh;}
setT();Sp+=2;var t=500-Sp*50;if(t<=0){t=0};Stime=setTimeout(function(){self.timeSetT(d);},t);}
jscrolle.bind("mousedown",function(e){j['Fn']&&j['Fn'].call(_self);curT=curT+e.pageY-jscrollh.offset().top-sh/2;asetT();return false;});function asetT(){if(curT<bw){curT=bw;}
if(curT>dh-sh-bw){curT=dh-sh-bw;}
jscrollh.stop().animate({top:curT},100);var scT=-((curT-bw)*sch/(dh-2*bw));jscrollc.stop().animate({top:scT},1000);};function setT(){if(curT<bw){curT=bw;}
if(curT>dh-sh-bw){curT=dh-sh-bw;}
jscrollh.css({top:curT});var scT=-((curT-bw)*sch/(dh-2*bw));jscrollc.css({top:scT});};$(_self).mousewheel(function(){if(allowS!=true)return;j['Fn']&&j['Fn'].call(_self);if(this.D>0){curT-=wh;}else{curT+=wh;};setT();})});}});


/*roomer*/
(function($){$.fn.Zoomer=function(b){var c=$.extend({speedView:200,speedRemove:400,altAnim:false,speedTitle:400,debug:false},b);var d=$.extend(c,b);function e(s){if(typeof console!="undefined"&&typeof console.debug!="undefined"){console.log(s)}else{alert(s)}};if(d.speedView==undefined||d.speedRemove==undefined||d.altAnim==undefined||d.speedTitle==undefined){e('speedView: '+d.speedView);e('speedRemove: '+d.speedRemove);e('altAnim: '+d.altAnim);e('speedTitle: '+d.speedTitle);return false};if(d.debug==undefined){e('speedView: '+d.speedView);e('speedRemove: '+d.speedRemove);e('altAnim: '+d.altAnim);e('speedTitle: '+d.speedTitle);return false};if(typeof d.speedView!="undefined"||typeof d.speedRemove!="undefined"||typeof d.altAnim!="undefined"||typeof d.speedTitle!="undefined"){if(d.debug==true){e('speedView: '+d.speedView);e('speedRemove: '+d.speedRemove);e('altAnim: '+d.altAnim);e('speedTitle: '+d.speedTitle)};$(this).hover(function(){$(this).css({'z-index':'10'});$(this).find('img').addClass("hover").stop().animate({marginTop:'-110px',marginLeft:'-110px',top:'50%',left:'50%',width:'175px',height:'181px',padding:'20px'},d.speedView);if(d.altAnim==true){var a=$(this).find("img").attr("alt");if(a.length!=0){$(this).prepend('<span class="title">'+a+'</span>');$('.title').animate({marginLeft:'-42px',marginTop:'90px'},d.speedTitle).css({'z-index':'10','position':'absolute','float':'left'})}}},function(){$(this).css({'z-index':'0'});$(this).find('img').removeClass("hover").stop().animate({marginTop:'0',marginLeft:'0',top:'0',left:'0',width:'100px',height:'100px',padding:'5px'},d.speedRemove);$(this).find('.title').remove()})}}})(jQuery);
