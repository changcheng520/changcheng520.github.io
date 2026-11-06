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
var bodyWidth = document.documentElement.clientWidth;
var bodyHeight = document.documentElement.clientHeight;
var screnWidth = window.screen.width;
var screnHeight = window.screen.height;
var showNavSelect =$.cookie("navNowC"); //导航高亮
var ChkNavSelectIndex = $.cookie("navNowCIndex");

//初始化
$(document).ready(function(){  
    //前后按钮
    $("#secFrame_updown").css("display","none");

});

$(function () {
	
	
	//------------------底部创意图片的网址链接
	$("#f-idea-1").attr("href",MyrootPath_Temp + "phone/index/"); //手机版地址
	$("#f-idea-2").attr("href",MyrootPath_Temp);//首页
	$("#f-idea-3").attr("href",MyrootPath_Temp + "list/showcase_default.html");//案例作品
	
	
	//--------------------removeLoading
	$("#ds-loading").fadeOut(500);
	
	//--------------------updown
	$("#secFrame_updown").fadeIn(1500);
	
	
	//-------------------content
	absolutePositionCheck(".content-show");
	absolutePositionCheck(".horizontal-class");
	$(".horizontal-class").delay(aniDelay*3).fadeIn(1000);
	absolutePositionCheck("#ListPageN");
	$("#ListPageN").delay(aniDelay*3).fadeIn(1000);
	
	absolutePositionCheck("#secFrame_updown .bl");
	absolutePositionCheck("#secFrame_updown .br");
	
	//-------------------分页
	$("#ListPageN .next").html("&lt;&lt;");
	$("#ListPageN .prev").html("&gt;&gt;");

	
	
	
	//-------------------判断图片加载失败
	$(".column-list img").load(function(){ //如果不判断图片加载完成则IE会出错
		$(".column-list img").each(function(){
			if(this.fileSize<=0){
				this.src= MyrootPath_Temp + "images/nonpreview.gif";
			}
			
		});
	});
	

	
	//---------------------LOGO
	$("#logoBox").css("left",(bodyWidth - 998)/2 + "px");
	
	
	
	//-------------------for IE6
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

	}
	
	
	//------------------评论、留言提交
	$('#msgForm').attr("action", msgFastActionUrl);
	$('#commentForm').attr("action", commentNormalActionUrl);
	$("#msg-sub").click(function () {
		$('#commentForm,#msgForm').submit();
	});
	
	
    //----------------导航&二级导航
	for (var kn = 0;kn<=10;kn++){
		var knum = kn + 1;
		$("#mainNav .item:eq(" + kn + ")").prepend('<span class="nav-num nav-num' + knum + '"></span>');
	}
	
	$("#mainNav .item:eq(0)").hover(function () {$(".nav-num1").fadeIn(500);}, function () {$(".nav-num1").fadeOut(500);});
	$("#mainNav .item:eq(1)").hover(function () {$(".nav-num2").fadeIn(500);}, function () {$(".nav-num2").fadeOut(500);});
	$("#mainNav .item:eq(2)").hover(function () {$(".nav-num3").fadeIn(500);}, function () {$(".nav-num3").fadeOut(500);});
	$("#mainNav .item:eq(3)").hover(function () {$(".nav-num4").fadeIn(500);}, function () {$(".nav-num4").fadeOut(500);});
	$("#mainNav .item:eq(4)").hover(function () {$(".nav-num5").fadeIn(500);}, function () {$(".nav-num5").fadeOut(500);});
	$("#mainNav .item:eq(5)").hover(function () {$(".nav-num6").fadeIn(500);}, function () {$(".nav-num6").fadeOut(500);});
	$("#mainNav .item:eq(6)").hover(function () {$(".nav-num7").fadeIn(500);}, function () {$(".nav-num7").fadeOut(500);});
	$("#mainNav .item:eq(7)").hover(function () {$(".nav-num8").fadeIn(500);}, function () {$(".nav-num8").fadeOut(500);});
	$("#mainNav .item:eq(8)").hover(function () {$(".nav-num9").fadeIn(500);}, function () {$(".nav-num9").fadeOut(500);});
	$("#mainNav .item:eq(9)").hover(function () {$(".nav-num10").fadeIn(500);}, function () {$(".nav-num10").fadeOut(500);});
	
	$("#mainNav ul.nav li").find(".sub").each(function(e) {
		var nvw = $(this).width();
		var nvh = $(this).height() + 12;

		$(this).parent("li").prepend('<span class="nav-ul-shadow nshadow'+e+'"></span>');
		
		$(".nshadow"+e).css({
			width: nvw + "px",
			height: nvh + "px"
		});
		$("nav-ul-shadow").css({
			width: nvw + "px",
			height: nvh + "px"
		});
		

	});
	

	


	$("#mainNav").find(".item a").each(function() {
		$(this).attr("data-slider","1");
	});
	$("#mainNav").find(".sub-item a").each(function() {
		$(this).attr("data-slider","0");
	});
	
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


	//----------------导航高亮
	$("#mainNav .item").each(function(e) {
		$(this).attr("data-index",e);

	});

	$("#mainNav li").addClass("navDefault");
	$("#" + showNavSelect).addClass("navSelected");
	$("#" +showNavSelect).removeClass("navDefault");

	$('#mainNav li a').click( 
		function () {
			var thisNavC = $(this).parent("li").attr("id");
			var thisNavCIndex = $(this).parent("li").attr("data-index");
			
			var expdate=new Date();
			var ctime = 5000;//5秒
			expdate.setTime(expdate.getTime()+ ctime);
			
			$.cookie("navNowC",thisNavC, {expires: expdate}); // 5秒过期
			$.cookie("navNowCIndex",thisNavCIndex, {expires: expdate}); // 5秒过期
			
		    
			//点击后样式
			var classAddNowIndex = parseInt(thisNavCIndex)+1;
			$(".nav-num").fadeOut(500);	
			$("#mainNav li a[data-slider='1']").css("color","#fff");
			$(this).css("color","#31656f");
			$(".nav-num"+ classAddNowIndex).fadeIn(500);	
			$("#mainNav .item:eq(" + thisNavCIndex + ")").hover(function () {$(".nav-num"+classAddNowIndex).fadeIn(500);}, function () {$(".nav-num"+classAddNowIndex).fadeIn(500);});
		
		
			
	
	
		}
	);
	
	
	if (showNavSelect != null && showNavSelect != "undefined" && showNavSelect != ""){
		var showNavSelectIndex = parseInt($("#" + showNavSelect).attr("data-index")) + 1;
		$(".nav-num"+showNavSelectIndex).fadeIn(500);	
	}
	
	//高亮导航hover无效化
	var ChkNavSelectIndexClass = parseInt(ChkNavSelectIndex) + 1;
	if (!isNaN(ChkNavSelectIndexClass)){
		$("#mainNav .item:eq(" + ChkNavSelectIndex + ")").hover(function () {$(".nav-num"+ChkNavSelectIndexClass).fadeIn(500);}, function () {$(".nav-num"+ChkNavSelectIndexClass).fadeIn(500);});
		
	}
	
	
	//-------------parallax
	$('#vg1').floatingBackground({
		parent:'magicBG',
		stage:'magicBG',
		stageLeft: $('#magicBG').position().left,
		stageTop: $('#magicBG').position().top,
		scale: 0.1,
		xOffset: -100,
		yOffset: -220,
		blur: false
	});
	$('#vg2').floatingBackground({
		parent:'magicBG',
		stage:'magicBG',
		stageLeft: $('#magicBG').position().left,
		stageTop: $('#magicBG').position().top,
		scale: 0.2,
		xOffset: -110,
		yOffset: -280,
		blur: true
	});
	$('#vg3').floatingBackground({
		parent:'magicBG',
		stage:'magicBG',
		stageLeft: $('#magicBG').position().left,
		stageTop: $('#magicBG').position().top,
		scale: 0.3,
		xOffset: -90,
		yOffset: -240,
		blur: false
	});

	
	
	
	//--------------内容区域

	//显示文章插件

	$(".content-show .close-c").click(function () {
		var closeThisID = $(this).attr("data-ID");
		$(closeThisID).animate({marginLeft: -bodyWidth*2 + "px"},{duration: 500,easing:"easeInOutCirc"});
		
		//显示文章插件
		$("#home-diary-box").fadeIn(aniDelay);
		
	});
	
	//--------------hash导航		
	var $nav_home = $("#ZGVmYXVsdC5o"); //首页
	var $nav_art = $("#bGlzdGFydGlj"); //文章动态
	var $nav_works = $("#bGlzdGNhc2Vf"); //作品
	var $nav_contact = $("#bWVzc21lc3Nf"); //留言
	var $nav_about = $("#c2VsZmluZm8u"); //关于我们
	var $nav_links = $("#Y2F0bGlua3Mu"); //友情链接
	var $nav_mood = $("#bW9vZG1vb2Rf"); //微博
	var $nav_search = $("#c2VhcmNoLmh0"); //搜索
	
	
	//判断是否为首页
	if (DS_Home == true){
		$nav_contact.find("a[data-slider='1']").attr("href","#!/contact");
		$nav_about.find("a[data-slider='1']").attr("href","#!/about");
		
		$("#footer .link1").find("a:eq(0)").attr("href","#!/about");
		$("#footer .link1").find("a:eq(1)").attr("href","#!/contact");

	}else{
		$nav_contact.find("a[data-slider='1']").attr("href", "index.html#!/contact");
		$nav_about.find("a[data-slider='1']").attr("href", "index.html#!/about");
		
		$("#footer .link1").find("a:eq(0)").attr("href","index.html#!/about");
		$("#footer .link1").find("a:eq(1)").attr("href","index.html#!/contact");
		
		//隐藏关闭按钮
		$(".content-show .close-c").css("display","none");
	
	}

	
	
	var $nav = $("#mainNav .item a");
	var DS_changeTo = true;
	var DS_valueH;
	var aniDelay = 500;
	var navClass = "selected";

    if (DS_Home == true){
		if (location.hash.indexOf("#!/") == -1) {
		   window.location.href =  "#!/home";
		}	
	}


	$("a").click( 
		function () {
			//初始化状态
			DS_changeTo = true;

	
		}
	);

	$(window).hashchange( function(){
		var hash = location.hash;
	
		//导航样式改变
		$nav.each(function(){
			var that = $(this);
			that[ that.attr( 'href' ) === hash ? 'addClass' : 'removeClass' ](navClass);
			
			//---------------------------------
			//rewrite
			DS_valueH = location.hash.replace( /^#!\//,'');	
			
			
			//判断是否包含多个#号
			if (location.hash.indexOf("#right_content") >= 0) {
				var DS_valueH_new=DS_valueH.split("#!/");
				DS_valueH = DS_valueH_new[1];
			}	

		
			//内容容器
			if(DS_changeTo == true){
				
				var $container = $(".content-show_" + DS_valueH);
				
				if (DS_valueH != "about" && DS_valueH != "contact"){
					DS_valueH = "common";
					$container = $(".content-show_" + DS_valueH);
				}
		

                if (DS_valueH != "" && DS_valueH != null && DS_valueH != "#"){
					$(".content-show").animate({marginLeft: -bodyWidth*2 + "px"},{duration: aniDelay,easing:"easeInOutCirc"});
					$container.stop().delay(aniDelay).animate({marginLeft: "-67px"},{duration: aniDelay,easing:"easeInOutCirc"});
				}
				
				//隐藏文章插件
				if (DS_valueH == "about" || DS_valueH == "contact"){
				    $("#home-diary-box").fadeOut(aniDelay);
				}
								
				
		    	
				
				//改变状态
				DS_changeTo = false;
				
			}
			
			
			//---------------------------------
			
		})

		

	});
	
	$(window).hashchange();	
	

	
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
	if(theForm.userName.value=="" || theForm.userName.value=="您的称呼")
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
	if (theForm.Email.value!="" && theForm.Email.value.search(exp2) == -1)
	{
		theForm.Email.focus();
		$("#tip").html("<div class=tipsFloatWin>×&nbsp;请认真填写您的电子邮箱！</div>").slideDown(500);
		setTimeout('$("#tip").slideUp(500);',1000);
		return  false;  	
	}
	    $("#msg-sub").css("display","none");
		return true;
}


//调用快捷管理导航(需要cat_js/shortCut.js文件)
top_shortCut();