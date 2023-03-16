
function getQueryStringRegExp(name) {     var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");       if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " ")); return ""; }; 

$(function(){
	
	if (getQueryStringRegExp("preImgURL") == 0){
		$(".manageUse").animate({right:'170px'});
	}
	

			
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$("#advanced").css({
				position:'relative'
			});
		}
		else {
			$("#advanced").css({
				position:'relative'
			});
		}
	});
				$("#advanced").css({
		marginTop:'0px'
	}).removeClass('closed');
	$("#advanced .trigger").toggle(function(){
		$(this).find('em').parent().parent('#advanced').addClass('closed').animate({
			marginTop:'-53px'
		}
		,"fast",function(){
			calcHeight();
		});
		
		$(".manageUse").animate({top:'-53px'});
		
		
		strCookies2=$.cookie("panel2",null);
		strCookies=$.cookie("panel",'boo');
	}
	,
	function(){
		$(this).find('em').parent().parent('#advanced').removeClass('closed').animate({
			marginTop:'0px'
		}
		,"fast",function(){
			calcHeight();
		})
		
		$(".manageUse").animate({top:'12px'});
		strCookies2=$.cookie("panel2",'opened');
		strCookies=$.cookie("panel",null);
	});
	if ($(window).scrollTop() > 0) {
		$("#advanced").css({
			position:'relative'
		});
	}
	else {
		$("#advanced").css({
			position:'relative'
		});
	}
			  
	
		
});

//function to fix height of iframe!
var calcHeight = function() {
var headerDimensions = $('#headerlivedemo').height();
var selector = '#iframelive';
   if($('#advanced').hasClass('closed')) {
	   $(selector).height($(window).height());
   } else {
	   $(selector).height($(window).height() - headerDimensions);
   }
}
$(document).ready(function() {
calcHeight();
});
$(window).resize(function() {
calcHeight();
}).load(function() {
calcHeight();
});

/* responsive-views script-selector */
$(document).ready(function() {
	
	var _thisName = $(".name_template").html();
	var _NewthisName = _thisName.replace("Designers Site Program","");
	$(".name_template").html(_NewthisName);
	$("#downSoftURL").text("2.0");
	


	$('ul#responsivator').show();

	$('ul#responsivator li.response').click(function () {

		$('ul#responsivator li').removeClass('active');
		$(this).addClass('active');
		var device = $(this).attr('id');
		$('#iframelive').removeClass().addClass(device);
			
		loadIframe.window.location.reload()
		
	});


	$('.responsive-block').css('left',(($(window).width()/2)-100)+'px').show();


	$(window).resize(function(){
		$('.responsive-block').css('left',(($(window).width()/2)-100)+'px');

	});

	
});

function DSOutput(){
	var NewWords;
	NewWords = unescape(Words);
	document.write(NewWords);
} 

