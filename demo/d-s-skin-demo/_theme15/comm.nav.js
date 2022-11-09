/*
'=================================================================================
'
'    主题对应Javascript文件
'    (此js文件请勿改名，系统会自动更新根目录变量MyrootPath_Temp，您可以在页面中引用此变量)
'    (MyrootPath_Temp为您网站的绝对路径，比如：  /blog/ )
'
'=================================================================================
*/

var MyrootPath_Temp="/demo/d-s-skin-demo/_theme15/"; //网站绝对路径，安装时系统自动修改，如果自己更换，请填写您安装程序的根目录，比如  /blog/ 
var searchURLActionUrl =  MyrootPath_Temp + "";
var msgFastActionUrl = MyrootPath_Temp + "";
var msgNormalActionUrl =  MyrootPath_Temp + "";
var commentNormalActionUrl =  MyrootPath_Temp + "";
var bodyWidth = document.documentElement.clientWidth;
var bodyHeight = document.documentElement.clientHeight;
var screnWidth = window.screen.width;
var screnHeight = window.screen.height;


//初始化
$(document).ready(function(){  
    //前后按钮
    $("#secFrame_updown").css("display","none");

});


$(function () {
	

	
	//------------------评论、留言提交
	$('#msgForm').attr("action", msgFastActionUrl);
	$('#commentForm').attr("action", commentNormalActionUrl);
	$("#msg-sub").click(function () {
		$('#commentForm,#msgForm').submit();
	});
	
	
	//for IE6
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
	$(".nav li").addClass("navDefault");
	$("#" + showNavSelect).addClass("navSelected");
	$("#" +showNavSelect).removeClass("navDefault");
	
	$('.nav li a').click( 
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
				$(this).find(".nav-ul-shadow").stop(true, true).slideDown(100);
			});
			
			//hide submenus on exit
			$(this).mouseleave(function() {
				$(this).find("ul").stop(true, true).slideUp(100);
				$(this).find(".nav-ul-shadow").stop(true, true).slideUp(100);
			});
		}
	});
	$("#mainNav ul.nav li").find(".sub").each(function(e) {
		var nvw = $(this).width();
		var nvh = $(this).height() + 12;

		$(this).parent("li").prepend('<span class="nav-ul-shadow nshadow'+e+'"></span>');
		
		$(".nshadow"+e).css({
			width: nvw + "px",
			height: nvh + "px"
		});
		$(".nav-ul-shadow").css({
			width: nvw + "px",
			height: nvh + "px"
		});
		

	});
	
	
});

//表单判断
function checkForm(theForm){

	exp=/[^0-9()-]/g; 
	exp2=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if(theForm.FuserName.value=="" || theForm.FuserName.value=="称呼")
	{
		theForm.FuserName.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;称呼不能为空！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	
	if(theForm.FContent.value=="" || theForm.FContent.value=="详细内容(可填写您的电话、意见建议、合作项目等)")
	{
		theForm.FContent.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;留言内容不能为空！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return false;
	}
	
	if(theForm.FEmail.value=="" || theForm.FEmail.value=="电子邮箱")
	{
		theForm.FEmail.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;电子邮箱不能为空！</div>").slideDown(500);
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
	
		$("#msg-sub").css("display","none");
		$("#tip").html("<div class=tipsFloatWin>√&nbsp;发送成功!</div>").slideDown(500);
		return true;

		

}

function checkFormComm(theForm){
	
	exp=/[^0-9()-]/g; 
	exp2=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if(theForm.userName.value=="" || theForm.userName.value=="姓名")
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
	
	if(theForm.comment.value=="")
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
		$("#msg-sub").css("display","none");
		$("#tip").html("<div class=tipsFloatWin>√&nbsp;发送成功!</div>").slideDown(500);
		return true;
}


//调用快捷管理导航(需要assets-old/template_main/js/shortCut.js文件)
top_shortCut();