/*
'=================================================================================
'
'    主题对应Javascript文件
'    (此js文件请勿改名，系统会自动更新根目录变量MyrootPath_Temp，您可以在页面中引用此变量)
'    (MyrootPath_Temp为您网站的绝对路径，比如：  /blog/ )
'
'=================================================================================
*/

var MyrootPath_Temp="/demo/d-s-skin-demo/"; //网站绝对路径，安装时系统自动修改，如果自己更换，请填写您安装程序的根目录，比如  /blog/ 
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
var $webBox = $(window);
var webSiteHref = window.location.protocol+"//"+window.location.hostname+window.location.pathname;
var mobilePageAutoJump = false; //是否自动跳转到手机网站  http://yoursite.com/phone/index/

//-----------------初始化
$(document).ready(function(){  


	//图片失链判断
	$('.portfolio-box img').each(function() {
		var thisImgSrc = $(this).attr("src");
		var thisImgObject = $(this);
		$.ajax({
			url:thisImgSrc,
			error:function(xhr, error, ex){

				if (xhr.status == "404") {
					thisImgObject.attr("src",MyrootPath_Temp + "assets-old/template_main/img/nonpreview.gif");
					
					
					
				}
			},
			success:function(){
				
				$(this).attr("src",thisImgSrc);
			}
		});
	
	});
	


	//---------------------表单焦点交互
	$(".form-chk").DS_inputCursorFocusInnerText({
	    focusClassName:"inputFocusStyle"	
	}); 
	


	//--------------------back-top1
	$(".back-top-btn").click(function(){
		$('html, body').animate({scrollTop:0}, 400); 
		return false; 
	});
	
	//---------------------back-top2
	$(document).UItoTop({ easingType: 'easeOutQuart' });
	
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
	
    
	
	
});



$(function () {
	
   //--------------------判断主题是否包含Dsure框架
   $.get( MyrootPath_Temp + "dsure/license.txt", function (result) {}).error(function() { 
	   alert("此主题需要Dsure框架才能保证效果，您网站跟目录没有dsure/文件夹 \n请登录网站/d-s/Dsure 下载框架\n(请勿删除dsure文件夹中的license.txt文件)");
	});

	
	//--------------------浮动居中层
	absolutePositionCheck(".？");

	
	//--------------------主导航& 二级导航
		$(".dsure-nav").find(".item").each(function() {
			$(this).attr("data-slider","1");
		});
		$(".dsure-nav").find(".sub-item").each(function() {
			$(this).attr("data-slider","0");
		});	
				
				
		//导航高亮
		var showNavSelect = MySite.Cookie.get("navNowC");
		$(".dsure-nav li").addClass("navDefault");
		$("#" + showNavSelect).addClass("navSelected");
		$("#" +showNavSelect).removeClass("navDefault");
		
		$('.dsure-nav li a').click( 
			function () {
				var thisNavC = $(this).parent("li").attr("id");
				var expdate=new Date();
				var ctime = 5000;//5秒
				expdate.setTime(expdate.getTime()+ ctime);
				MySite.Cookie.set("navNowC",thisNavC,expdate);
		
			}
		);
		
		$(".dsure-nav .item[data-slider='1']").hover(  
		function() {  
			$(this).find(".nav-slide").addClass("s-yes");
			$(this).find(".nav-slide").removeClass("s-no");
		},   
		function() {  
			$(this).find(".nav-slide").addClass("s-no");
			$(this).find(".nav-slide").removeClass("s-yes");
		});  
			
		//二级导航
		var nav = $(".dsure-nav");
		nav.find("li[data-slider='1']").each(function() {
			//添加箭头
			$(this).prepend("<span class='nav-slide'></span>");
			
			//添加注释
			if (navigationIntroShow == true){
				var thisTDe = $(this).find("a").attr("title");
				$(this).prepend("<span class='nav-intro'>" + thisTDe + "</span>");	
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
	
	
	//--------------------幻灯片标题
	$(".rslides").find("li").each(function() {
		//添加注释
		var thisTDeN = $(this).find("a img").attr("alt");
		$(this).prepend('<div class="flex-caption">' + thisTDeN + '</div>');

		
	});
	
	//---------------滚动到一定高度交互效果
	$webBox.scroll(function(){
		var _eT = $webBox.scrollTop();
		
		if (_eT>120){
			//code begin...
			
			if ($.browser.msie && $.browser.version < 7) {
				
			}else{
				if (bodyWidth > 767){
					$(".dsure-nav").addClass("navScrollEffect");
				}
			}


		}
		else
		{
			//code begin...
			if (bodyWidth > 767){
				$(".dsure-nav").removeClass("navScrollEffect");

			}
			
			
		}
		
	});	
	
	//------------------for IE6
	if ($.browser.msie && $.browser.version < 7) {
		
		//IE6固定层
		function fixedIE6()
		{
			var docWidth = document.documentElement.clientWidth;
			var docHeight = document.documentElement.clientHeight;
			//$(".bar-top").css({"position":"absolute","top": parseInt(document.documentElement.scrollTop,10)+ (docHeight - 60) + "px"});
			
		}
		//window.onresize = resizeDivAlertIE6;
		window.onscroll = fixedIE6;
		

		
	}
	
	
	
	//---------------tags随机大小
	/*
	 var tags_a = $("#sideTagsDiv a");
	 tags_a.each(function(){
		 var x = 9;
		 var y = 0;
		 var rand = parseInt(Math.random() * (x - y + 1) + y);
		 $(this).addClass("tags"+rand);
	  });	
	 */

	
});


//================================================
//智能机浏览器自动跳转
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




//-----------------表单
function checkFormContact(theForm){

	exp=/[^0-9()-]/g; 
	exp2=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if(theForm.FuserName.value=="" || theForm.FuserName.value=="姓名：")
	{
		theForm.FuserName.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;姓名不能为空！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	
	if(theForm.FContent.value=="" || theForm.FContent.value=="内容：")
	{
		theForm.FContent.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;内容不能为空！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	
	if(theForm.FEmail.value=="" || theForm.FEmail.value=="邮箱：")
	{
		theForm.FEmail.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;邮箱不能为空！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}	
	if (theForm.FEmail.value!="" && theForm.FEmail.value.search(exp2) == -1)
	{
		theForm.FEmail.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;请认真填写您的电子邮箱！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return  false;  	
	}
	
		$("#msg-sub,#msg-clear").css("display","none");
		$("#tip").html("<div class=tipsFloatWin>√&nbsp;发送成功!</div>").slideDown(500);
		return true;

		

}

function checkFormComm(theForm){
	
	exp=/[^0-9()-]/g; 
	exp2=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if(theForm.userName.value=="")
	{
		theForm.userName.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;用户昵称不能为空！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	if(theForm.checkcode.value=="" || theForm.checkcode.value=="点击显示")
	{
		theForm.checkcode.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;验证码不能为空！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	if(theForm.Email.value=="" || theForm.Email.value=="yourmail@host.com")
	{
		theForm.Email.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;电子邮箱不能为空！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}	
	
	if(theForm.comment.value=="" || theForm.comment.value=="说点什么呢...")
	{
		theForm.comment.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;评论内容不能为空！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	
	if (theForm.Email.value!="" && theForm.Email.value.search(exp2) == -1)
	{
		theForm.Email.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;请认真填写您的电子邮箱！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return  false;  	
	}
		$("#msg-sub,#msg-clear").css("display","none");
		$("#tip").html("<div class=tipsFloatWin>√&nbsp;发送成功!</div>").slideDown(500);
		return true;
}

function checkFormLink(theForm){
	exp=/[^0-9()-]/g; 
	exp2=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if(theForm.title.value=="")
	{
		theForm.title.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;网站名称不能为空！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	if(theForm.url.value=="" || theForm.url.value=="http://")
	{
		theForm.url.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;网站地址不能为空！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	if(theForm.type.value=="")
	{
		theForm.type.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;链接类型不能为空！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}		
	if (theForm.email.value!="" && theForm.email.value.search(exp2) == -1)
	{
		theForm.email.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;电子邮箱格式不正确！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}	
	if(theForm.qq.value != "" && theForm.qq.value.search(exp)  !=  -1)
	{
		theForm.qq.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;您填写的QQ号码必须为数字类型！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}	
	if(theForm.checkcode.value == ""|| theForm.checkcode.value == "点击显示" )
	{
		theForm.checkcode.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;请输入验证码！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	} 
		return true;
}


/*------Record page cookie address--------*/
function goMsgUrl(){
	var thisUrl=MySite.Cookie.get("JumpRecentSite");
	thisUrl=thisUrl.replace("sendSucceed","sendSucceedOK");
	this.location.href=thisUrl;
}


/*------Get Element Coordinate--------*/
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

/*------Call Shortcuts Navigation (Required assets-old/template_main/js/shortCut.js)------*/
top_shortCut();


/*------Generic pop tips--------*/
loginAlert();
clientUserMsg();
