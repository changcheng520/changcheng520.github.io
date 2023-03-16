var bodyWidth = document.documentElement.clientWidth;
var bodyHeight = document.documentElement.clientHeight;
var screnWidth = window.screen.width;
var screnHeight = window.screen.height;
var $webBox = $(window);
var webSiteHref = window.location.protocol+"//"+window.location.hostname+window.location.pathname;
var currentURL = $.cookie("currentURL");
var webScrollTop;


$(document).ready(function(){  

    //Portfolios
    $(".list-hover-hidden").animate({opacity: 0},100);

	//ajax close
	$(".ajax-load-page-container .ajax-close").click(function(){
		$(".ajax-load-page-container,.ajaxload-mask").fadeOut(500);
		$(this).fadeOut(500);
	});		

	
	//------------------Comment,Contact Form Submit
	$("#msg-sub").click(function () {
		$('#commentForm,#msgForm,#linksForm').submit();
	});
	$("#msg-clear").click(function () {
		$('.input_text,.input_textarea').val("");
	});
	
	
});



$(function () {
	
	//img autosize
	$('.sub-side-content').imgAutoSize(10);
	
	//Remove Loading
	$("#loading").fadeOut(500);
	$("#body-mask").delay(500).fadeOut(1000);
	
	//mask
	$(".list-mask-1").css("height",$(document).height()+"px");
	
	
	//Content show
	$("#content-loading").fadeOut(500);
	$(".sub-page .portfolio-container").css("visibility","visible");



	//Back-top
	$("#toTop,#toTop-2").click(function(){
		$("html,body").animate({scrollTop:0}, 700); 
		return false; 
	});
			


	$webBox.scroll(function(){
		webScrollTop = $webBox.scrollTop();
		if ( webScrollTop >= 120 ){
			$("#toTop").fadeIn(500);
		
		}else{
			
			$("#toTop").fadeOut(500);
		}
		
	
		if ( webScrollTop >= 45){
			$("#mainNav").css({"top":"2px","position":"fixed"});
			$("#logo-img").css({"height":  "50px", "margin-top":  "1px","position":"fixed"});
		}else{
			$("#mainNav").css("top","50px");
			$("#logo-img").css({"height":  "61px", "margin-top":  "40px"});
			
		}
	

	});

    //Footer Social
    var footerSocialLI = $(".footer-social li").length;
	$(".sub-page #sub-footer .footer-social ul").css("width", 87*footerSocialLI + "px");
	
	

	//Portfolios Hover
	$('.portfolio-container .img-box').hover(function(){
		
		  
		  $(this).find(".list-mask-big").animate({opacity: 0.9} , 300 );
		  $(this).find(".list-hover-arrow-big").delay(400).animate({opacity: 1} , 300 );
			


			},function(){
				
		  $(this).find(".list-mask-big").animate({opacity: 0} , 300 );
		  $(this).find(".list-hover-arrow-big").delay(400).animate({opacity: 0} , 300 );
				
		}
	); 
	
	$(".img-box").DS_middleBoxButton(".list-hover-arrow-big","absolute");

    //Team Hover
	$('.team-container dl').hover(function(){
	
		  $(this).find(".job-hover-bg").animate({width: "90%"} , 600 );
		  $(this).find(".show").delay(600).addClass("font-active");
		  

			},function(){
				
		      $(this).find(".job-hover-bg").animate({width: "0"} , 600 );
			  $(this).find(".show").delay(600).removeClass("font-active");
				
		}
	); 



	//---------------------Responsive Resize Init
	function resizeInitWeb(){
		
		
		var _newWebWidth = document.documentElement.clientWidth;
		var _newWebHeight = document.documentElement.clientHeight;	
		var _ajaxContainerW = _newWebWidth * 0.75;
		var _ajaxContainerH = _newWebHeight * 0.75;



		//ajax load
		$(".ajax-load-page-container .ajax-show").DS_AjaxLoadPage({
			"operationContainerID":".portfolio-container li a", //Obtained loadURL from the "data-href" [<a href="" data-href="demo.html">here</a>]
			"operation":"click", //click,mouseover,@url
			"operationEvent": function () {
					//code
					
					$("#loading").fadeIn(500);
					$("#body-mask").fadeIn(300);
					
					if (webScrollTop == undefined){webScrollTop = (_newWebHeight-_ajaxContainerH)/2}
					$(".ajaxload-mask").fadeIn(500);
					$(".ajax-load-page-container").delay(300).fadeIn(500).css({
						"width":_ajaxContainerW+"px",
						"height":_ajaxContainerH+"px",
						"left":(_newWebWidth-_ajaxContainerW)/2+"px",
						"top":((_newWebHeight-_ajaxContainerH)/2 + webScrollTop) +"px"
					});
				
				
			 },
			"TransformationCodingURL":"",
			"loadingCode": "<span class='ajax-loading-text'>Loading...</span>",
			"fileLoadCompletedEvent": function () {
				
					//Remove Loading
					$("#loading").fadeOut(500);
					$("#body-mask").delay(500).fadeOut(1000);
					
					
					//ajax page
					$(".ajax-load-page-container .code .ajax-close").fadeIn(500);
					
					$(".ajax-body-content .sub-col2,.ajax-body-content .portfolio-detail .scroller").css("height",_ajaxContainerH - 50 + "px");
					$(".ajax-body-content .sub-col1").css("height",_ajaxContainerH + "px");
					$(".ajax-body-content .sub-col1").css("width",_ajaxContainerW*0.72 + "px");
					$(".ajax-body-content .sub-col2").css("width",_ajaxContainerW*0.23 - 30 + "px");
					$(".ajax-body-content .slider").css({"width":_ajaxContainerW*0.72 + "px","height":_ajaxContainerH - 60 + "px"});
					$(".ajax-body-content .slider .items li").css({"width":_ajaxContainerW*0.72 - 16 + "px","height":_ajaxContainerH - 60 -16 + "px"});
					$(".ajax-body-content .slider .items li img").css({"width":(_ajaxContainerW*0.72) + "px"});
			
					//Portfolios Ajax-page Detail
					$(".ajax-body-content .slider").scrollable({ 
						vertical: false, 
						speed: 700, 
						circular: true
						
					}).navigator({
						navi: ".slider-dots",
						activeClass:"active"
					}).autoscroll({ 
						autoplay: true, 
						loop:true,
						interval: 3000
					});
		
	
					setTimeout(function(){
						$(".ajax-body-content .portfolio-detail .scroller").jscroll({W:"10px"});   
					},1500);
					
				
		
	
	
			 },
			"imgLoadCompletedEvent": function () {
				
			 }
		});


		
		
	}


	resizeInitWeb();

	$(window).resize(function(){

		resizeInitWeb();
	})
	



});
