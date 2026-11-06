/*
' Pugins: theme.hash.js
*/
	
(function($){
	$.fn.DSNavs=function(o){
		this.each(function(){
			var th=$(this),
				data=th.data('DSNavs'),
				DS={
					enable:true,
					useHash:false,
					defHash:'#!/',
					emptyHash:'#',
					changeTo:false,
					valueH:"",
					returnNow:false,
					hashFu:function(){
						//Init
						DS.changeTo = false;
			
						//Change status
						/*
						$('a',DS.li).click( 
							function () {
								//alert(document.location.href);
							}
						);
						*/		
						
						 if (location.hash.indexOf("#!/") == -1) {
							 window.location.href="#!/home";
						 }


						  $(window).hashchange( function(){
								DS.changeTo = true;
	
								//rewrite
								
								var _tHash = location.hash.replace("#right_content","#!/home");
								location.hash = _tHash;
								DS.valueH = location.hash.replace( /^#!\//,'');		
							
								
								
								
						
								//URL Record
								$.cookie("currentURL", window.location.href);

 
							     //Ajax-page will load by URL hash
								 if (location.hash.indexOf(".html") > 0 || location.hash.indexOf(".htm") > 0 || location.hash.indexOf(".php") > 0 || location.hash.indexOf(".jsp") > 0 || location.hash.indexOf(".xhtml") > 0 || location.hash.indexOf(".jhtml") > 0 || location.hash.indexOf(".cgi") > 0 ) {

									 setTimeout(function(){
										 
										 
				
											/*-------------------Function    begin----------------------*/
										 
											 //Pportfolios detail load
											 if ( webSiteHref.indexOf("portfolios-list.html") > 0){
												 
													var _newWebWidth = document.documentElement.clientWidth;
													var _newWebHeight = document.documentElement.clientHeight;	
													var _ajaxContainerW = _newWebWidth * 0.75;
													var _ajaxContainerH = _newWebHeight * 0.75;
											
													//ajax load
													$(".ajax-load-page-container .ajax-show").DS_AjaxLoadPage({
														"operationContainerID":".portfolio-container li a", //Obtained loadURL from the "data-href" [<a href="" data-href="demo.html">here</a>]
														"operation":DS.valueH, //click,mouseover,@url
														"operationEvent": function () {
															//code
															
															$(".ajaxload-mask").fadeIn(500);
															$(".ajax-load-page-container").delay(300).fadeIn(500).css({
																"width":_ajaxContainerW+"px",
																"height":_ajaxContainerH+"px",
																"left":(_newWebWidth-_ajaxContainerW)/2+"px",
																"top":((_newWebHeight-_ajaxContainerH)/2 + (_newWebHeight-_ajaxContainerH)/2) +"px"
															});
															
															
														 },
														"TransformationCodingURL":"",
														"loadingCode": "<span class='ajax-loading-text'>Loading...</span>",
														"fileLoadCompletedEvent": function () {
												
												
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

 
										   /*-------------------Function    end----------------------*/
										   
										   
										   
										   
										 
									 },500); /*Required this timeout */
									 
										 
										 
								
					
								 }
								 
								 
								 
								 
								 
								 
								 
													
						  })
						
						  $(window).hashchange();

					}
				}
				
				
				
			data?DS=data:th.data({DSNavs:DS});
			typeof o=='object'&&$.extend(DS,o);
			
			if(typeof o=='function')
				return th.bind(DS.changeEv,function(){o(DS.param,DS);return false}).trigger(DS.changeEv)
			

			typeof o=='number'&&DS.chngFu(o)
			typeof o=='boolean'&&(DS.enable=o)
			typeof o=='string'&&(o=='prev'||o=='next'||o=='close'||o=='back'?DS[o+'Fu']():DS.useHash?o.slice(0,3)=='#!/'&&(location.hash=o)||DS.customStr(o):DS.customStr(o))
			
	
			//Call Back
			if (DS.returnNow == true){
				
				DS.hashFu();
				
			}else{
				
				
			}
		
			
			
		})
		return this;
	}
})(jQuery)



//---------------------theme.hash init 
$(document).ready(function(){  
	$("#mainNav").DSNavs({
		useHash:true,
		returnNow:true 
	})
});
