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
								
								if (location.hash.indexOf("index.html") > 0 ){
									location.hash = "!/home";
								}
								
		
							
							     //Ajax-page will load by URL hash
								 if (location.hash.indexOf(".html") > 0 || location.hash.indexOf(".htm") > 0 || location.hash.indexOf(".php") > 0 || location.hash.indexOf(".jsp") > 0 || location.hash.indexOf(".xhtml") > 0 || location.hash.indexOf(".jhtml") > 0 || location.hash.indexOf(".cgi") > 0 ) {

									 setTimeout(function(){
										 
										 
				
				
											/*-------------------Function    begin----------------------*/
											
											
											//menu
										
											$(".main-menu li a").each(function() {
												var _Ts = $(this).attr("data-href").toLowerCase();
												var _Ts2 = DS.valueH.toLowerCase();
												if (_Ts.indexOf(_Ts2) >= 0){
													
													$(this).addClass("bg-selected");
												}
											});
											
										 
											 //detail load
										
													//ajax load
													$(".ajax-load-page-container .ajax-show").DS_AjaxLoadPage({
														"operationContainerID":".main-menu li a", //Obtained loadURL from the "data-href" [<a href="" data-href="demo.html">here</a>]
														"operation": DS.valueH, //click,mouseover,@url
														"operationEvent": function () {
																//code
																$(".ajax-show").css("display","none");
																$("#loading").html("<span class='ajax-loading-text'>载入中,请稍候...</span>").fadeIn(500);
																
														
															
														 },
														"TransformationCodingURL":  ajaxLoadAction,
														"loadingCode": "<span class='ajax-loading-text'>载入中,请稍候...</span>",
														"fileLoadCompletedEvent": function () {
															
																//Remove Loading
																$("#loading").fadeOut(500);
																
																setTimeout(function(){
																	$(".ajax-show").css("display","block");
																},500);
																											
																//解决IE6加载不显示
																if ($.browser.msie && $.browser.version < 7) {
																	$('html, body').animate({scrollTop:5}, 400); 
																}
																
																//子页侧边目录导航
																setTimeout(function(){
																	var _CH = $("#dir-nav").height();
																	$("#dir-nav a.close").attr("data-box-height",_CH);
																},1200);
											
																
											
																$(".dir-nav a.close,.dir-nav .t").click(function(){
															
																	var $this = $(".dir-nav a.close");
																	var _CL = $this.attr("data-close");
																	var _CHN = $this.attr("data-box-height");
																	
													
																	
																	if (_CL == 0){
																		$this.attr("data-close",1);
																		$('.dir-nav').animate({height: "30px"}, 400); 
																		$('.dir-nav').animate({right: "-40px"}, 200); 
																		$('.dir-nav .t').text("展开");
																		$('.dir-nav .t').css("cursor","pointer");
																	}else{
																		$this.attr("data-close",0);	
																		$('.dir-nav').animate({right: "10px"}, 200); 
																		$('.dir-nav').animate({height: _CHN + "px"}, 400); 
																		$('.dir-nav .t').text("目录导航");
																		$('.dir-nav .t').css("cursor","default");
																		
																	}
																 
																});	
																
																function UpdateDirNavActive() {
																   $(".d-class-area").each(function() {
																   
																	   var el             = $(this),
																		   offset         = el.offset(),
																		   scrollTop      = $(window).scrollTop(),
																		   dirNavActiveID = el.attr("id"),
																		   BtnID = $("#b-"+dirNavActiveID)
																	   
																	   if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
																		   BtnID.addClass("dir-nav-active");
																	   } else {
																		   BtnID.removeClass("dir-nav-active");
																	   };
																   });
																}
															   
																$(".dir-nav a").click(function(){
																	UpdateDirNavActive();
																});	
															   
															   $(window)
																.scroll(UpdateDirNavActive)
																.trigger("scroll");
															
												

													
													
												
														 },
														"imgLoadCompletedEvent": function () {
															
														 }
													});		 
									

 
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
	$("#menu").DSNavs({
		useHash:true,
		returnNow:true 
	})
});