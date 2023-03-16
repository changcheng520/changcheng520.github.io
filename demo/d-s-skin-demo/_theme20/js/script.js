/*
 - Template Main Javascript
 - Designed: https://www.c945.com
 - Update: 2013/12/16
*/


var bodyWidth = document.documentElement.clientWidth;
var bodyHeight = document.documentElement.clientHeight;
var screnWidth = window.screen.width;
var screnHeight = window.screen.height;
var $webBox = $('#web-wrapper');
var webSiteHref = window.location.protocol+"//"+window.location.hostname+window.location.pathname;
var currentURL = $.cookie("currentURL");
var _oT1,_oT2,_oT3,_oT4,_oT5,_oT6,_oT7;
var _activeLiL = $(".sf-menu li:eq(1)").offset().left,_activeLiW = $(".sf-menu li:eq(1)").width();
var _nspeed = 300;
var ServicesM = false; //Services Marquee

//---------------------URL Hash Check
if (turl == "" || turl == undefined) {
	turl = "home";
}

//---------------------Page redirection & URL format
if (location.hash.indexOf("#!/") == -1) {
   window.location.href = "#!/" + turl;  //【Do not include ".html,.asp,.php,.jsp" files. Starting with #】
}



$(document).ready(function(){  
    
	//---------------------Forbit
	$(document).bind('selectstart',function(){return false;}); 


    //---------------------Init Screen 
	$webBox.stop().animate({scrollTop: "5px"}, 500); 
	
	
	//---------------------back-top
	$("#toTop,#toTop-2").click(function(){
		$webBox.animate({scrollTop:0}, 1500); 
		return false; 
	});
			

	$webBox.scroll(function(){
		if ( $webBox.scrollTop() >= 120 ){
			$("#toTop").fadeIn(500);
		
		}else{
			
			$("#toTop").fadeOut(500);
		}
	

	});


	
	
    //---------------------Support Mousewheel
	$("#mouseWheelTxt").DS_parallax({
		"scrollWarpper": $webBox,//Parallax wrapper id
		"scrollDistance":75,  //The height of each roll,when the "mouseWheelTo" value is "true"
		"mouseWheelTo": true //Whether to use the wheel to scroll the page 【Scroll the page】

	});



	//---------------------input focus
	$(".form-style input").DS_inputCursorFocus({ 
		targetBox : ".blur" 
	}); 
	$(".input_text,.input_textarea").DS_inputCursorFocusInnerText({
	    focusClassName:"inputFocusStyle"	
	}); 
	


	//------------------Comment,Contact Form Submit
	$("#msg-sub").click(function () {
		$('#commentForm,#msgForm,#linksForm').submit();
	});
	$("#msg-clear").click(function () {
		$('.input_text,.input_textarea').val("");
	});
	
	
	
	/*★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
	                                                 Parallax Event
	★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★*/
	
	
	//Parallax & Scroll Animation
	$("#main1 .bgimage").DS_parallax({
		"scrollWarpper": $webBox, //Parallax wrapper id
		"moveDirectionNum": 1, //On the contrary parallax then the value is "-1"
		"speed":2.8, //Value: 0 ～ 10  （The smaller,the faster）
		"animDuration":1000,  //Move speed
		"scrollType":"vertical",  // Value: vertical,horizontal
		"moveDirection":"top",  //Value: top,left,top-left
		"easing":"easeOutCubic",
		"mouseWheelTo": false //Whether to use the wheel to scroll the page 【Scroll the page】

	});


	$("#main3 .bg-text").DS_parallax({
		"scrollWarpper": $webBox, //Parallax wrapper id
		"moveDirectionNum": -1, //On the contrary parallax then the value is "-1"
		"speed":3.8, //Value: 0 ～ 10  （The smaller,the faster）
		"animDuration":1000,  //Move speed
		"scrollType":"vertical",  // Value: vertical,horizontal
		"moveDirection":"top",  //Value: top,left,top-left
		"easing":"easeOutCubic",
		"mouseWheelTo": false //Whether to use the wheel to scroll the page 【Scroll the page】

	});
	
	
	$("#main4 .service-bg1").DS_parallax({
		"scrollWarpper": $webBox, //Parallax wrapper id
		"moveDirectionNum": 1, //On the contrary parallax then the value is "-1"
		"speed":7.8, //Value: 0 ～ 10  （The smaller,the faster）
		"animDuration":1000,  //Move speed
		"scrollType":"vertical",  // Value: vertical,horizontal
		"moveDirection":"top",  //Value: top,left,top-left
		"easing":"easeOutCubic",
		"mouseWheelTo": false //Whether to use the wheel to scroll the page 【Scroll the page】

	});
	
	$("#main4 .service-bg2").DS_parallax({
		"scrollWarpper": $webBox, //Parallax wrapper id
		"moveDirectionNum": 1, //On the contrary parallax then the value is "-1"
		"speed":4.8, //Value: 0 ～ 10  （The smaller,the faster）
		"animDuration":1000,  //Move speed
		"scrollType":"vertical",  // Value: vertical,horizontal
		"moveDirection":"top",  //Value: top,left,top-left
		"easing":"easeOutCubic",
		"mouseWheelTo": false //Whether to use the wheel to scroll the page 【Scroll the page】

	});
	
	$("#main4 .service-bg3").DS_parallax({
		"scrollWarpper": $webBox, //Parallax wrapper id
		"moveDirectionNum": 1, //On the contrary parallax then the value is "-1"
		"speed":2.2, //Value: 0 ～ 10  （The smaller,the faster）
		"animDuration":1000,  //Move speed
		"scrollType":"vertical",  // Value: vertical,horizontal
		"moveDirection":"top",  //Value: top,left,top-left
		"easing":"easeOutCubic",
		"mouseWheelTo": false //Whether to use the wheel to scroll the page 【Scroll the page】

	});
	
	$("#main4 .service-bg4").DS_parallax({
		"scrollWarpper": $webBox, //Parallax wrapper id
		"moveDirectionNum": 1, //On the contrary parallax then the value is "-1"
		"speed":2.5, //Value: 0 ～ 10  （The smaller,the faster）
		"animDuration":1000,  //Move speed
		"scrollType":"vertical",  // Value: vertical,horizontal
		"moveDirection":"top",  //Value: top,left,top-left
		"easing":"easeOutCubic",
		"mouseWheelTo": false //Whether to use the wheel to scroll the page 【Scroll the page】

	});
	



	
	
	
	
	/*★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
	                                                  Scene Event
	★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★*/
	
	
	
	
	//-----------------------------------------------------------------------------------Init scene-1    begin

	//-----------------------------------------------------------------------------------Init scene-1    end
	
	




	//-----------------------------------------------------------------------------------Init scene-2    begin
	$("#main2-service-icon").css("margin-top",bodyHeight + "px");
	$("#main2-intro").addClass("sceneEffect-scale-default");
	
	//-----------------------------------------------------------------------------------Init scene-2    end
	
	
	
	
	
	
	//-----------------------------------------------------------------------------------Init scene-3   begin
	
	$(".portfolio-container").addClass("sceneEffect-scale-default");
	//Portfolios ISOTOPE
	var $container = $('#portfolio-stage');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});

	$('#main3 .categories-list li a').click(function(){
		$('#main3 .categories-list li .current').removeClass('current');
		$(this).addClass('current');
 
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 1250,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	}); 
	
	//Portfolios Hover
	$(".list-hover-hidden").animate({opacity: 0},100);
	$('.portfolio-container .img-box').hover(function(){
		
		  
		  $(this).find(".list-mask-1").animate({opacity: 1} , 300 );
		  $(this).find(".list-mask-2").delay(150).animate({opacity: 1} , 300 );
		  $(this).find(".list-mask-3").delay(300).animate({opacity: 1} , 300 );
		  $(this).find(".list-mask-4").delay(450).animate({opacity: 1} , 300 );
		  $(this).find(".list-hover-arrow").delay(600).animate({opacity: 1} , 300 );
			


			},function(){
				
			  $(this).find(".list-mask-1").animate({opacity: 0} , 300 );
			  $(this).find(".list-mask-2").delay(150).animate({opacity: 0} , 300 );
			  $(this).find(".list-mask-3").delay(300).animate({opacity: 0} , 300 );
			  $(this).find(".list-mask-4").delay(450).animate({opacity: 0} , 300 );
			  $(this).find(".list-hover-arrow").delay(600).animate({opacity: 0} , 300 );
				
		}
	); 
	
	
	//-----------------------------------------------------------------------------------Init scene-3    end
	
	
	

	//-----------------------------------------------------------------------------------Init scene-4    begin
	$(".service-content").addClass("sceneEffect-scale-default");
	
	 function serviceHover(id){
		$('#main4 .service-show-container' + id).hoverDelay({  
			hoverDuring: 500,
			hoverEvent: function(){
				  $(".service-bg-mask" + id).animate({top: "0"} , 1000 );
				  $(".service-title" + id).addClass("title-active");
			},
			
			outEvent: function(){
				  $(".service-bg-mask" + id).animate({top: "-100%"} , 1000 );
				  $(".service-title" + id).removeClass("title-active");
			}
		});
 
	  };
	  
	  serviceHover(1);
	  serviceHover(2);
	  serviceHover(3);
	  serviceHover(4);
				
				
	
	//-----------------------------------------------------------------------------------Init scene-4    end

	

	//-----------------------------------------------------------------------------------Init scene-5    begin
	$("#main5-scroller-container").addClass("sceneEffect-scale-default");
	$('#main5-scroller-container .article-post .post-content img').hover(function(){
		 $(this).animate({opacity: 0.9} , 300 );
			
			},function(){
				
			  $(this).animate({opacity: 1} , 300 );
				
		}
	); 
	
	
	
	//-----------------------------------------------------------------------------------Init scene-5    end
	
	
	//-----------------------------------------------------------------------------------Init scene-6    begin
	
	
	//-----------------------------------------------------------------------------------Init scene-6    end
	
	
	//-----------------------------------------------------------------------------------Init scene-7    begin

	
	
	//-----------------------------------------------------------------------------------Init scene-7    end	
	
	
	
	
	
	
	
});



$(function () {

			
		
		

	
	//---------------------Responsive Resize Init
	function resizeInitWeb(){
		
		var _newWebWidth = document.documentElement.clientWidth;
		var _newWebHeight = document.documentElement.clientHeight;
		
		
		//---------------------Init Full-screen Background images
		$(".bgimage").fullBg();	
		
			
		//---------------------Navigation Slider
		$("li.back").css({width: _activeLiW + "px",left: _activeLiL + "px"}); 


		//Web init
		$(".web-screen,#slider-box,.banner ul li,#logo-wrapper,#main2-service-icon,.scroller-container,.service-show-container,.service-bg-mask").css("height",_newWebHeight + "px");
		$(".mask-scene,.banner ul li").css({"height":_newWebHeight + "px","width":_newWebWidth + "px"});
		$(".slider-dots").css("margin-left", (_newWebWidth - $(".slider-dots").width())/2 + "px");
		$("#main4 .service-show").css("height",_newWebHeight*4 + "px");
		$("#main5 #main5-left-bg").css({"height":_newWebHeight + "px","width": (parseInt(_newWebWidth) - parseInt($(".col1").width()))/2 + 121 + "px"});
		$("#main7").css("height",_newWebHeight-130+ "px");
		
		
		
		
		

		
		//Floating Habitat middle
		absolutePositionCheck("#footer .footer-social ul");
	
	
	
		//Remove Loading
		$("#loading").fadeOut(500);
		$("#body-mask").delay(500).fadeOut(1000);
		
		
		
		
		//Section scene offsetTop
		_oT1 = $("#main1").offset().top;
		_oT2 = $("#main2").offset().top;
		_oT3 = $("#main3").offset().top;
		_oT4 = $("#main4").offset().top;
		_oT5 = $("#main5").offset().top;
		_oT6 = $("#main6").offset().top;
		_oT7 = $("#main7").offset().top;
		
		
		
		//Navigation Index judgment
		 if (location.hash.indexOf("about") > 0 ) $webBox.stop().animate({scrollTop: _oT2 +"px"}, 500); 
		 if (location.hash.indexOf("portfolios") > 0 ) $webBox.stop().animate({scrollTop: _oT3 +"px"}, 500); 
		 if (location.hash.indexOf("services") > 0 ) $webBox.stop().animate({scrollTop: _oT4 +"px"}, 500); 
		 if (location.hash.indexOf("blog") > 0 ) $webBox.stop().animate({scrollTop: _oT5 +"px"}, 500); 
		 if (location.hash.indexOf("contact") > 0 ) $webBox.stop().animate({scrollTop: _oT6 +"px"}, 500); 
		 if (location.hash.indexOf("bottom") > 0 ) $webBox.stop().animate({scrollTop: _oT7 +"px"}, 500); 
		
		$webBox.scroll(function(){
			
			var _eT = $webBox.scrollTop();
			

		
			//Scroll Animation
			if (_eT > 30){
				$(".slider-dots").css("z-index","-1");
			}
			if (_eT == 0 || _eT < 30){
				$(".slider-dots").css("z-index","10");
			}
			if (_eT > _newWebHeight/3){
				$(".slider-btn").css("z-index","-1");
			}
			
	
			if (_eT == 0 || _eT < _newWebHeight/3){
				$(".slider-btn").css("z-index","10");
			}
			
			if (_eT >= _newWebHeight - 84){
				$("#mainNav").css("top","2px");
				$("#logo-img").css({"height":  "50px", "margin-top":  "1px"});
			}else{
				$("#mainNav").css("top","50px");
				$("#logo-img").css({"height":  "61px", "margin-top":  "40px"});
				
			}
			
			
			if (_eT >= _newWebHeight/2){
				$("#main2-intro").removeClass("sceneEffect-scale-default");
				$("#main2-intro").addClass("sceneEffect-scale-loaded");
			}
			
			if (_eT >= _newWebHeight  + _newWebHeight/2){
				$(".portfolio-container").removeClass("sceneEffect-scale-default");
				$(".portfolio-container").addClass("sceneEffect-scale-loaded");
			}
			
			
			if (_eT >= _newWebHeight*2  + _newWebHeight/2){
				$(".service-content").removeClass("sceneEffect-scale-default");
				$(".service-content").addClass("sceneEffect-scale-loaded");
			}			
			
			if (_eT >= _newWebHeight - 150){
				$("#main2-service-icon").animate({marginTop:  "0px"},{duration: 500});
				ServicesM = true;	
			}		
		
		
			if (_eT >=( _newWebHeight*2 + _newWebHeight/2) - 450){
				$("#main3 .bg-left").css("left","0");
			}else{
				$("#main3 .bg-left").css("left","-300px");
			}
	
	
			if (_eT >= _newWebHeight*3  + _newWebHeight/2){
				$("#main5-scroller-container").removeClass("sceneEffect-scale-default");
				$("#main5-scroller-container").addClass("sceneEffect-scale-loaded");
				$("#main5 #main5-left-bg").css("background","#fff");
			}	
			
	
			
			if (_eT > _newWebHeight*4){
				$("#main6 .bgimage").css("visibility","visible");
			}else{
			    $("#main6 .bgimage").css("visibility","hidden");	
			}		
			
			if (_eT >= (_newWebHeight*4 + _newWebHeight/2)){
				$("#main6 .google-map").css("margin-left","0");
				$("#main6 .contact-info").css("margin-left","60px");
				
			}	
			



			
			
			function nacClassActive(index){
				var _ni = "_oT" + index;
				if ( _eT >= eval(_ni) ){
				   //Remove all active style
					$(".sf-menu").find("li").each(function() {
						$(" a",this).removeClass("active");
					});
					//Current button style
					$(".sf-menu #a" + index).addClass("active");	
					
					_activeLiL = $(".sf-menu li:eq(" + index + ")").offset().left;
					_activeLiW = $(".sf-menu li:eq(" + index + ")").width();
	
					if (index == 7){
					_activeLiL = $(".sf-menu li:eq(6)").offset().left;
					_activeLiW = $(".sf-menu li:eq(6)").width();
	
					}
					
					
					
					//Scene Index Box
					$("#mouseWheelTxt").text(index);
	
		
		
				}	
			}
	
			
			nacClassActive(1);
			nacClassActive(2);
			nacClassActive(3);
			nacClassActive(4);
			nacClassActive(5);
			nacClassActive(6);
			nacClassActive(7);
			
			//Active Hash
			$(".sf-menu").find("li a").each(function() {
				if ($(this).hasClass("active") == true){
					window.location.hash = "#!/" + $(this).attr("data-hash");
		
					
				}
			});
		});
		
	  	
	
	};
	
	
	resizeInitWeb();

	$(window).resize(function(){

		resizeInitWeb();
	})
	
	
	setInterval(function(){
		$("li.back").stop().animate({width: _activeLiW + "px", left: _activeLiL + "px"},{duration: _nspeed});
	},_nspeed*2);
	
	
	
	
	
	
	
	/*★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
	                                                  Scene Event
	★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★*/
	
	
	//---------------------DS_scrollNavigation
	$(".sf-menu").DS_scrollNavigation({
		"navScrollToBox":"#web-wrapper", //can disable navigation【Here you do not set the wheel can not be used to switch】
		"speed":800,  //ScrollTo Speed
		"cursor": "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize",
		"moveY": true, //You can drag the Y-axis,when the "sceneDrag" value is "true"
		"moveX": false, //You can drag the X-axis,when the "sceneDrag" value is "true"
		"sceneDrag":false, //If you enable kinetic, must be true 【Required: jquery.kinetic v1.8.2】
		"navLabel":"li a",  //The navigation child label
		"boxIndexID":"#main",  //Target switch scene ID (don't include index-number)
		"activeClass":".active", //The current navigation class
		"mouseWheelUse":false, //Whether to use the wheel to control navigation 【Control Navigation】
		"initClass":true, //Initialization navigation style
		"scrollType":"vertical",  //Rolling basis (Value: vertical,horizontal)
		"moveScrollNumShowID":"#mouseWheelTxt"//Roller dynamic variables, using the index number indicates
	});
	
	
	
	//-----------------------------------------------------------------------------------Init scene-1    begin
	//banner (Image width exceeds the resolution, the jquery.tools will result in failure of the picture)
	$(".banner li").each(function() {
		$(this).prepend('<div class="mask-scene"></div>');
		if (parseInt($(" a img",this).width()) > parseInt(bodyWidth)){
			$(" a img",this).css("width",bodyWidth - 100 + "px");
		}
		
		$(" a img",this).width();
		$(".mask-scene").css({"height":bodyHeight + "px","width":bodyWidth + "px"});
	
	});
	
	//slider
	$(".banner").scrollable({ 
		next:".slider-btn-next",
		prev:".slider-btn-prev",
		vertical: false, 
		speed: 700, 
		circular: true
		
	}).navigator({
		navi: ".slider-dots",
		activeClass:"active"
	}).autoscroll({ 
		autoplay: true, 
		loop:true,
		interval: 5000
	});
	
	//-----------------------------------------------------------------------------------Init scene-1    end
	
	
	//-----------------------------------------------------------------------------------Init scene-2    begin
	//Scroller
	$("#main2-scroller-container").jscroll({W:"7px"});
	$("#main3-scroller-container").jscroll({W:"7px"});
	$("#main5-scroller-container").jscroll({W:"7px"});
	
	
			
	//Services Marquee
	_sm = setInterval(function(){
		if (ServicesM == true){
			$("#main2-service-icon").DS_marquee({ 
				scrollLabel:"ul:first",
				scrollSubLabel:"li:first",
				loopTime:3000,
				speed:600,
				scrollLength:"-211px",
				direction:"top"  //  top/left
				
			})
			
			clearInterval(_sm);
		}

	},200);
	
	//Member Marquee
	$("#main2-member").scrollable({ 
		next:".content-arrow-next",
		prev:".content-arrow-prev",
		vertical: true, 
		items:".mem-items",
		speed: 700, 
		circular: false
		
	})
	
	
	//-----------------------------------------------------------------------------------Init scene-2    end
	
	
	//-----------------------------------------------------------------------------------Init scene-3    begin
	$(".img-box").DS_middleBoxButton(".list-hover-arrow","absolute");
	
	
	//-----------------------------------------------------------------------------------Init scene-3    end
	
	

	//-----------------------------------------------------------------------------------Init scene-4    begin
	$(".service-show-container").DS_middleBoxButton("#main4 .service-content1","absolute");
	$(".service-show-container").DS_middleBoxButton("#main4 .service-content2","absolute");
	$(".service-show-container").DS_middleBoxButton("#main4 .service-content3","absolute");
	$(".service-show-container").DS_middleBoxButton("#main4 .service-content4","absolute");
	$(".service-show-container").DS_middleBoxButton("#main4 .service-content5","absolute");
	
	
	
	//-----------------------------------------------------------------------------------Init scene-4    end

	

	//-----------------------------------------------------------------------------------Init scene-5    begin


	
	//-----------------------------------------------------------------------------------Init scene-5    end
	
	
	//-----------------------------------------------------------------------------------Init scene-6    begin
	
	
	//-----------------------------------------------------------------------------------Init scene-6    end
	
	
	//-----------------------------------------------------------------------------------Init scene-7    begin
	
	
	//-----------------------------------------------------------------------------------Init scene-7    end	
	
	
	
	

	


});
