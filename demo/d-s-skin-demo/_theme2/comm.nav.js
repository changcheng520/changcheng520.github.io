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
var msgFastActionUrl = MyrootPath_Temp + "";
var msgNormalActionUrl =  MyrootPath_Temp + "";
var commentNormalActionUrl =  MyrootPath_Temp + "";
var linksSendActionUrl =  MyrootPath_Temp + "";
var bodyWidth = document.documentElement.clientWidth;
var bodyHeight = document.documentElement.clientHeight;
var screnWidth = window.screen.width;
var screnHeight = window.screen.height;


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

//二级导航
$(document).ready(function(){
	
    $("#mainNav ul.nav li.item a:even").css("background","#EAEAEA");
	$("#mainNav ul.nav li.sub-item a").css("background","#fff");
	$("#mainNav ul.nav li.item a:even").hover(function(){
		$(this).css("background","#fff");
		
	},
	function(){
		$(this).css("background","#EAEAEA");
	});	
	
	$("#mainNav ul.nav li.sub-item a").hover(function(){
		$(this).css("background","#fff");
		
	},
	function(){
		$(this).css("background","#FFF");
	});	

	
	

  $('#mainNav ul.nav li').mousemove(function () {
	  
	  var $subMenuBox = $(this).find('ul');
	  $('#mainNav ul.nav li ul').css({ "display": "none" });
	  $subMenuBox.css({ "display": "block"});

	  $subMenuBox.mouseleave(function () {
		  $subMenuBox.css({ "display": "none" });
	  })
  })
  
});



$(document).ready(function() {
	
	//--------------------微博发布按钮
	$("#mood-sub-btn").click(function(){
		moodShowHtmlEdit();
	});
	
	//------------------搜索框
	$('#search-form,#search-form-full').attr("action", searchURLActionUrl);
	$('#search-form').attr("target", "_blank");
	
	
	//------------------评论、留言、链接提交
	$('#msgForm').attr("action", msgFastActionUrl);
	$('#commentForm').attr("action", commentNormalActionUrl);
	$('#linksForm').attr("action", linksSendActionUrl);
	
	$("#msg-sub").click(function () {
		$('#commentForm,#msgForm,#linksForm').submit();
	});
	$("#msg-clear").click(function () {
		$('.input_text,.input_textarea').val("");
	});
	

	
	
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
	
	
	$("#rightMenu .t").click(function() {
		$("html,body").animate({ scrollTop: 0 }, "slow");
	});
	$("#rightMenu .b").click(function() {
		$("html,body").animate({ scrollTop: $("#scroll_b").offset().top + "px" }, "slow");

	});
	
	
	//通用
	$("#scrollBox").css("height", document.documentElement.clientHeight  + "px");
	$("#scrollBox").jscroll({W:"5px"});
	$(".jscroll-h").fadeOut(300);
	$("#sideInfo").hover(function(){
		$(".jscroll-h").fadeIn(300);
		
	},
	function(){
		$(".jscroll-h").fadeOut(300);
	});	
	
		
});
	

$(function () {
	$(window).scroll(function(){
		if ($(window).scrollTop()>236){
			$("#rightMenu").animate({ width: "42px" }, {queue:false,duration:500});
		}
		else
		{
			$("#rightMenu").animate({ width: "0px" }, {queue:false,duration:500});
		}
		
		//IE6下固定层
		//for IE6
		if ($.browser.msie && $.browser.version < 7) {
			var docWidth = document.documentElement.clientWidth;
			var docHeight = document.documentElement.clientHeight;
			document.getElementById("sideInfo").style.position="absolute";
			document.getElementById("sideInfo").style.top = parseInt(document.documentElement.scrollTop,10)+0;
			document.getElementById("boundary").style.position="absolute";
			document.getElementById("boundary").style.top = parseInt(document.documentElement.scrollTop,10)+0;
			document.getElementById("rightMenu").style.position="absolute";
			document.getElementById("rightMenu").style.top = parseInt(document.documentElement.scrollTop,10)+0;		
		}
		
	});
	$("html,body").animate({ scrollTop: 5 }, "slow"); //解决IE6下初始化定位
});


//================================================
//智能机浏览器判断
//================================================
var browser = {
    versions: function() {
        var u = navigator.userAgent,
        app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1,
            presto: u.indexOf('Presto') > -1,
            webKit: u.indexOf('AppleWebKit') > -1,
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            mobile: !!u.match(/AppleWebKit.*Mobile.*/),
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: u.indexOf('Android') > -1,
            iPhone: u.indexOf('iPhone') > -1,
            iPad: u.indexOf('iPad') > -1, //Ipad不跳转，使用原网页
            webApp: u.indexOf('Safari') == -1
        }
    } (),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};
if (browser.versions.mobile == true || browser.versions.ios == true || browser.versions.android == true || browser.versions.iPhone == true ) {
    window.location.href = MyrootPath + "phone/index/"
};



//-----------------表单(ajax加载判断，请勿使用中文)
function checkFormContact(theForm){

	exp=/[^0-9()-]/g; 
	exp2=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if(theForm.FuserName.value=="")
	{
		theForm.FuserName.focus();
		$("#tip").html("<div class=tipsFloatWin>Please provide your name.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	
	if(theForm.FContent.value=="")
	{
		theForm.FContent.focus();
		$("#tip").html("<div class=tipsFloatWin>Please provide content.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	
	if(theForm.FEmail.value=="")
	{
		theForm.FEmail.focus();
		$("#tip").html("<div class=tipsFloatWin>Please provide your email.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}	
	if (theForm.FEmail.value!="" && theForm.FEmail.value.search(exp2) == -1)
	{
		theForm.FEmail.focus();
		$("#tip").html("<div class=tipsFloatWin>Check your email.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return  false;  	
	}
	
		$("#msg-subBtn").css("display","none");
		$("#tip").html("<div class=tipsFloatWin>Successful!</div>").slideDown(500);
		return true;

		

}

function checkFormComm(theForm){
	
	exp=/[^0-9()-]/g; 
	exp2=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if(theForm.userName.value=="")
	{
		theForm.userName.focus();
		$("#tip").html("<div class=tipsFloatWin>Please provide your name.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	if(theForm.checkcode.value=="" || theForm.checkcode.value=="点击显示")
	{
		theForm.checkcode.focus();
		$("#tip").html("<div class=tipsFloatWin>Please provide checkcode.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	if(theForm.Email.value=="" || theForm.Email.value=="yourmail@host.com")
	{
		theForm.Email.focus();
		$("#tip").html("<div class=tipsFloatWin>Please provide your email.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}	
	
	if(theForm.comment.value=="")
	{
		theForm.comment.focus();
		$("#tip").html("<div class=tipsFloatWin>Please provide content.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	
	if (theForm.Email.value!="" && theForm.Email.value.search(exp2) == -1)
	{
		theForm.Email.focus();
		$("#tip").html("<div class=tipsFloatWin>Check your email.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return  false;  	
	}
		$("#subBtn").css("display","none");
		$("#tip").html("<div class=tipsFloatWin>Successful!</div>").slideDown(500);
		return true;
}

function checkFormLink(theForm){
	exp=/[^0-9()-]/g; 
	exp2=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if(theForm.title.value=="")
	{
		theForm.title.focus();
		$("#tip").html("<div class=tipsFloatWin>Please provide title.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	if(theForm.url.value=="" || theForm.url.value=="http://")
	{
		theForm.url.focus();
		$("#tip").html("<div class=tipsFloatWin>Please provide url.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	if(theForm.type.value=="")
	{
		theForm.type.focus();
		$("#tip").html("<div class=tipsFloatWin>Please provide classification.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}		
	if (theForm.email.value!="" && theForm.email.value.search(exp2) == -1)
	{
		theForm.email.focus();
		$("#tip").html("<div class=tipsFloatWin>Check your email.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}	
	if(theForm.qq.value != "" && theForm.qq.value.search(exp)  !=  -1)
	{
		theForm.qq.focus();
		$("#tip").html("<div class=tipsFloatWin>The QQ number must be numeric.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}	
	if(theForm.checkcode.value == "" )
	{
		theForm.checkcode.focus();
		$("#tip").html("<div class=tipsFloatWin>Please provide checkcode.</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	} 
		return true;
}

			
			
/*sroller*/		
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$.1u.1w({1N:9(19){J x.1t(9(){b 8=x;8.D=0;k($.1j.1v||$.1j.22){8.23=9(){8.D=1I.24;1I.20=I;19&&19.K(8)}}1b{8.1X("1Y",9(e){8.D=e.1Z>0?-1:1;e.29();19&&19.K(8)},I)}})}});$.1u.1w({w:9(j){J x.1t(9(){j=j||{};j.5=j.5||{};j.3=j.3||{};j.5.f=j.5.f||{};j.5.y=j.5.y||{};j.3.p=j.3.p||{};j.3.o=j.3.o||{};b n={W:"2a",l:"",f:"",5:{X:"1M",y:{7:"#2b",i:"#28"},f:{7:"#1n",i:"#25",r:"#26"}},3:{T:Z,p:{7:"",i:"#1n",r:"1B"},o:{7:"",i:"#1n",r:"1B"}},s:9(){}};j.W=j.W||n.W;j.l=j.l||n.l;j.f=j.f||n.f;j.5.X=j.5.X||n.5.X;j.5.y.7=j.5.y.7||n.5.y.7;j.5.y.i=j.5.y.i||n.5.y.i;j.5.f.7=j.5.f.7||n.5.f.7;j.5.f.i=j.5.f.i||n.5.f.i;j.5.f.r=j.5.f.r||n.5.f.r;j.3.T=j.3.T!=27?j.3.T:n.3.T;j.3.p.7=j.3.p.7||n.3.p.7;j.3.p.i=j.3.p.i||n.3.p.i;j.3.p.r=j.3.p.r||n.3.p.r;j.3.o.7=j.3.o.7||n.3.o.7;j.3.o.i=j.3.o.i||n.3.o.i;j.3.o.r=j.3.o.r||n.3.o.r;j.s=j.s||n.s;b 8=x;b 1d,U=0,v=0;$(8).a({11:"16",P:"1G",1m:"14"});b 1z=$(8).Y(),C=$(8).G()-1;b R=j.W?1L(j.W):21;b 1R=1z-R;b m=j.3.T==Z?R:0;k($(8).L(".w-c").G()==1S){$(8).1V("<A 15=\'w-c\' N=\'E:14;z-1H:1T;1U:1;P:1G\'></A>");$(8).L(".w-c").1W("<A N=\'G:14;11:16\'></A>");$(8).2c("<A 15=\'w-e\' 1O=\'1K\' N=\' G:1h%;E:-2t;1P:0;-1s-1y-1D:1l;P:1i;11:16;z-1H:2o;2q:2p;\'><A 15=\'w-u\' N=\'P:1i;E:14;Y:1h%;1o:0;4:1E;11:16\'></A><A 15=\'w-h\'  1O=\'1K\' N=\'4:2m;P:1i;1o:0;-1s-1y-1D:1l;V:2r 2s\'></A><A 15=\'w-d\' N=\'P:1i;2g:14;Y:1h%;1o:0;4:1E;11:16\'></A></A>")};b Q=$(8).L(".w-c");b M=$(8).L(".w-e");b F=M.L(".w-h");b S=M.L(".w-u");b O=M.L(".w-d");k($.1j.1v){H.2h("2k",I,Z)};Q.a({"1m-1P":R});M.a({Y:R,4:j.f,"4-q":j.l});F.a({E:m,4:j.5.f.7,"4-q":j.l,"V-1c":j.5.y.7,Y:R-2});S.a({G:m,4:j.3.p.7,"4-q":j.l});O.a({G:m,4:j.3.o.7,"4-q":j.l});F.1k(9(){k(v==0)$(x).a({4:j.5.f.i,"4-q":j.l,"V-1c":j.5.y.i})},9(){k(v==0)$(x).a({4:j.5.f.7,"4-q":j.l,"V-1c":j.5.y.7})});S.1k(9(){k(v==0)$(x).a({4:j.3.p.i,"4-q":j.l})},9(){k(v==0)$(x).a({4:j.3.p.7,"4-q":j.l})});O.1k(9(){k(v==0)$(x).a({4:j.3.o.i,"4-q":j.l})},9(){k(v==0)$(x).a({4:j.3.o.7,"4-q":j.l})});b 13=Q.G();b B=(C-2*m)*C/13;k(B<10){B=10};b 17=B/6;b g=0,1q=I;F.G(B);k(13<=C){Q.a({1m:0});M.a({2j:"1l"})}1b{1q=Z};k(j.5.X!="1M"){g=C-B-m;18()};F.1g("1e",9(e){j[\'s\']&&j[\'s\'].K(8);v=1;F.a({4:j.5.f.r,"4-q":j.l});b 12=e.12,t=1L($(x).a("E"));$(H).2n(9(1J){g=t+1J.12-12;18()});$(H).1p(9(){v=0;F.a({4:j.5.f.7,"4-q":j.l,"V-1c":j.5.y.7});$(H).1r()});J I});S.1g("1e",9(e){j[\'s\']&&j[\'s\'].K(8);v=1;S.a({4:j.3.p.r,"4-q":j.l});8.1f("u");$(H).1p(9(){v=0;S.a({4:j.3.p.7,"4-q":j.l});$(H).1r();1Q(1d);U=0});J I});O.1g("1e",9(e){j[\'s\']&&j[\'s\'].K(8);v=1;O.a({4:j.3.o.r,"4-q":j.l});8.1f("d");$(H).1p(9(){v=0;O.a({4:j.3.o.7,"4-q":j.l});$(H).1r();1Q(1d);U=0});J I});8.1f=9(d){b 1x=x;k(d=="u"){g-=17}1b{g+=17};18();U+=2;b t=2i-U*2l;k(t<=0){t=0};1d=2e(9(){1x.1f(d)},t)};M.1g("1e",9(e){j[\'s\']&&j[\'s\'].K(8);g=g+e.12-F.2d().E-B/2;1F();J I});9 1F(){k(g<m){g=m};k(g>C-B-m){g=C-B-m};F.1C().1A({E:g},1h);b 1a=-((g-m)*13/(C-2*m));Q.1C().1A({E:1a},2f)};9 18(){k(g<m){g=m};k(g>C-B-m){g=C-B-m};F.a({E:g});b 1a=-((g-m)*13/(C-2*m));Q.a({E:1a})};$(8).1N(9(){k(1q!=Z)J;j[\'s\']&&j[\'s\'].K(8);k(x.D>0){g-=17}1b{g+=17};18()})})}});',62,154,'|||Btn|background|Bar||Out|_self|function|css|var||||Bg|curT||Hover||if|BgUrl|bw|jun|dBg|uBg|image|Focus|Fn|||Isup|jscroll|this|Bd||div|sh|dh||top|jscrollh|height|document|false|return|call|children|jscrolle|style|jscrolld|position|jscrollc|sw|jscrollu|btn|Sp|border||Pos|width|true||overflow|pageY|sch|0px|class|hidden|wh|setT|Func|scT|else|color|Stime|mousedown|timeSetT|bind|100|absolute|browser|hover|none|padding|fff|left|mouseup|allowS|unbind|moz|each|fn|msie|extend|self|user|dw|animate|orange|stop|select|blue|asetT|relative|index|event|e2|on|parseInt|up|mousewheel|unselectable|right|clearTimeout|sl|null|9999|zoom|wrapInner|prepend|addEventListener|DOMMouseScroll|detail|returnValue||safari|onmousewheel|wheelDelta|91afd6|afc7e9|undefined|ccc|preventDefault|15px|5b79a3|append|offset|setTimeout|1000|bottom|execCommand|500|display|BackgroundImageCache|50|green|mousemove|10000|pointer|cursor|1px|solid|4px'.split('|'),0,{}));



// jQuery.imgAutoSize
(function($){var loadImg=function(url,fn){var img=new Image();img.src=url;if(img.complete){fn.call(img)}else{img.onload=function(){fn.call(img);img.onload=null}}};$.fn.imgAutoSize=function(padding){var maxWidth=this.innerWidth()-(padding||0);return this.find('img').each(function(i,img){loadImg(this.src,function(){if(this.width>maxWidth){var height=maxWidth/this.width*this.height,width=maxWidth;img.width=width;img.height=height}})})}})(jQuery);
