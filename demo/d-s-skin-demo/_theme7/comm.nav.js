/*
'=================================================================================
'
'    主题对应Javascript文件
'    (此js文件请勿改名，系统会自动更新根目录变量MyrootPath_Temp，您可以在页面中引用此变量)
'    (MyrootPath_Temp为您网站的绝对路径，比如：  /blog/ )
'
'=================================================================================
*/


/*★★★★★★特别注意：hash主题千万别ajax操作iframe★★★★★★★★*/

var MyrootPath_Temp="/demo/d-s-skin-demo/_theme7/"; //网站绝对路径，安装时系统自动修改，如果自己更换，请填写您安装程序的根目录，比如  /blog/ 
var searchURLActionUrl =  MyrootPath_Temp + "";
var msgFastActionUrl = MyrootPath_Temp + "";
var msgNormalActionUrl =  MyrootPath_Temp + "";
var commentNormalActionUrl =  MyrootPath_Temp + "";
var linksSendActionUrl =  MyrootPath_Temp + "";
var bodyWidth = document.documentElement.clientWidth;
var bodyHeight = document.documentElement.clientHeight;
var screnWidth = window.screen.width;
var screnHeight = window.screen.height;
var navigationIntroShow = false; //导航文字是否引用说明文字  false:屏蔽  true:显示

//内容页判断
var pageContent_case;
var pageContent_article;

//hash判断
if (turl == "" || turl == "undefined") {
	turl = "home";
}

if (location.hash.indexOf("#!/") == -1) {
   window.location.href = MyrootPath_Temp + "index.html#!/" + turl; //相应修改
}


//禁止滚动
setInterval(function(){
	$('html,body').animate({scrollTop: $('body').offset().top}, 10);
},100);
	


//-----------------初始化
$(document).ready(function(){  

	//back-btn
	$('#goBack').click(function(){
		var backURL = $.cookie('DSURLList');
		showac_subitem(backURL,'',1);
		
		if (backURL == null || backURL == ""){
			$("#mainNav").slideDown(500);
		}
	
	});
	
	
	
	if (pageContent_case == 1 || pageContent_article == 1){
		$("#secFrame_recent").fadeIn(500);
	}else{
	    $("#secFrame_recent").fadeOut(500);	
	}
	
	
	
	var arrowWDis = (bodyWidth - showBoxW) / 2 - 50;
	$("#secFrame_recent .bl").css("left", arrowWDis + "px");
	$("#secFrame_recent .br").css("right", arrowWDis + "px");


	
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
	
    
	//--------------------主导航& 二级导航
	$("#mainNav").find(".item").each(function() {
		$(this).attr("data-slider","1");
	});
	$("#mainNav").find(".sub-item").each(function() {
		$(this).attr("data-slider","0");
	});	
			

			
	//导航高亮
	$("#mainNav li").click( 
		function () {
			$("#mainNav").find("li").each(function() {
				 $(this).addClass("navDefault");
				 $(this).removeClass("navSelected");
			})
			
			$(this).addClass("navSelected");
			
		}
	);
	
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
	
	$("#mainNav .item[data-slider='1']").hover(  
	function() {  
		$(this).find(".nav-slide").addClass("s-yes");
		$(this).find(".nav-slide").removeClass("s-no");
	},   
	function() {  
		$(this).find(".nav-slide").addClass("s-no");
		$(this).find(".nav-slide").removeClass("s-yes");
	});  
		
	//二级导航
	var nav = $("#mainNav");
	nav.find("li[data-slider='1']").each(function() {
		//添加箭头
		$(this).prepend("<span class='nav-slide'></span>");
		
		//添加注释
		if (navigationIntroShow == true){
			var thisTDe = $(this).find("a").attr("title");
			$(this).prepend("<span class='nav-intro' style='font-family:Arial; font-size:10px; letter-spacing:0'>" + thisTDe + "</span>");	
		}

		

		
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



$(function () {
	
	//-------------------分页前后文字替换
	$("#ListPageN .next").html("&lt;&lt;");
	$("#ListPageN .prev").html("&gt;&gt;");
	
	//--------------------浮动居中层
	absolutePositionCheck(".？");

	



	
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