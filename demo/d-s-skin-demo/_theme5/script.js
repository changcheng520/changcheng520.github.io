//back-top
if (bktop != 1){
	$(function () {
		$("#back-to-top").animate({marginRight: "-100px"},{queue:false,duration:500});
		$(window).scroll(function(){
			if ($(window).scrollTop()>100){
				$("#back-to-top").animate({marginRight: "4px"},{queue:false,duration:500});
				$("#back-to-top").fadeIn(500);
			}
			else
			{
				$("#back-to-top").animate({marginRight: "-100px"},{queue:false,duration:500});
			}
			});
	
			
	});
}

