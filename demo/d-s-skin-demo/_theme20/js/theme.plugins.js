/*
 - Project:Floating Center 1.0
 - Designed: https://www.c945.com
 - Update: 2012/2
*/

function absolutePositionCheck(thisID){
	$(thisID).css("left",i_getLeftPos()+"px");
	i_addEvent(window,'scroll',i_handleScroll);
	i_addEvent(window,'resize',i_handleResize);
	function i_handleScroll(){
		var node=document.getElementById(thisID);
		if(!node){
			return
		}
	};
	function i_handleResize(){
		var node=document.getElementById(thisID);
		if(!node){
			return
		};
		i_handleScroll()
	};
	function i_getLeftPos(){
		var tw=$(thisID).width();
		var rp=i_getClientWidth()/2-(tw/2);
		return rp>0?rp:0
	}
};
function i_addEvent(node,type,l){
	if(node.addEventListener){
		node.addEventListener(type,l,false)
	}
	else{
		node.attachEvent('on'+type,l)
	}
};
function i_getClientWidth(){
	return i_getDocEle().clientWidth
};
function i_getDocEle(){
	return document.compatMode=='CSS1Compat'?document.documentElement:document.body
}


/*
 - Project:FollowWin 1.0
 - Designed: https://www.c945.com
 - Update: 2013/11
*/

/*
Use:
followWin("#regPanelWrapper-float",500,0,".close",".open",500,"#regPanelWrapper","bottom");
*/
function followWin(fID,speed,topDis,closeID,openID,btnSpeed,cID,redirect){
	var bodyTop=0;
	var fIDHeight=$(fID).height();
	$(this).scroll(function(){
		if(typeof window.pageYOffset!='undefined'){
			bodyTop=window.pageYOffset
		}
		else if(typeof document.compatMode!='undefined'&&document.compatMode!='BackCompat'){
			bodyTop=document.documentElement.scrollTop
		}
		else if(typeof document.body!='undefined'){
			bodyTop=document.body.scrollTop
		};
		if(redirect=="top"){
			$(fID).animate({
				"top":topDis+bodyTop+"px"
			}
			,{
				queue:false,duration:speed
			})
		}
		else{
			$(fID).animate({
				"top":document.documentElement.clientHeight+bodyTop-fIDHeight+"px"
			}
			,{
				queue:false,duration:speed
			})
		}
	});
	$(document).ready(function(){
		if(redirect=="top"){
			$(fID).animate({
				"top":topDis+bodyTop+"px"
			}
			,{
				queue:false,duration:speed
			})
		}
		else{
			$(fID).animate({
				"top":document.documentElement.clientHeight+bodyTop-fIDHeight+"px"
			}
			,{
				queue:false,duration:speed
			})
		};
		$(openID).fadeOut(btnSpeed)
	});
	$(closeID).click(function(){
		$(cID).fadeOut(btnSpeed);
		$(this).fadeOut(btnSpeed);
		$(openID).fadeIn(btnSpeed)
	});
	$(openID).click(function(){
		$(cID).fadeIn(btnSpeed);
		$(this).fadeOut(btnSpeed);
		$(closeID).fadeIn(btnSpeed)
	})
}
/*
 - Project:DS_inputCursorFocus
 - Designed: https://www.c945.com
 - Update: 2013/11
*/

(function($){
	$.fn.DS_inputCursorFocus=function(options){
		var settings=$.extend({
			"targetBox":".blur"
		}
		,options);
		return this.each(function(){
			var $this=$(this),$targetBox=settings.targetBox;
			var inputCursorFocus=(function(){
				var init=function(){
					$this.each(function(){
						var thisVal=$(this).val();
						if(thisVal!=""){
							$(this).siblings($targetBox).hide()
						}
						else{
							$(this).siblings($targetBox).show()
						};
						$(this).focus(function(){
							$(this).siblings($targetBox).hide()
						}).blur(function(){
							var val=$(this).val();
							if(val!=""){
								$(this).siblings($targetBox).hide()
							}
							else{
								$(this).siblings($targetBox).show()
							}
						})
					})
				};
				return{
					init:init
				}
			})();
			inputCursorFocus.init()
		})
	}
})(jQuery);
/*
 - Project:DS_inputCursorFocusInnerText
 - Designed: https://www.c945.com
 - Update: 2013/11
*/

(function($){
	$.fn.DS_inputCursorFocusInnerText=function(options){
		var settings=$.extend({
			"defaultValue":"data-value","focusClassName":"inputFocusStyle"
		}
		,options);
		this.each(function(){
			var $this=$(this),$defaultValue=settings.defaultValue,$focusClassName=settings.focusClassName;
			$this.blur(function(){
				if(this.value.length==0){
					var inputV=$(this).attr($defaultValue);
					this.value=inputV;
					$(this).removeClass($focusClassName)
				}
				else{
					$(this).addClass($focusClassName)
				}
			});
			$this.keyup(function(){
				var inputV=$(this).attr($defaultValue);
				if(this.value==inputV){
					$(this).removeClass($focusClassName)
				}
				else{
					$(this).addClass($focusClassName)
				}
			});
			$this.click(function(){
				var inputV=$(this).attr($defaultValue);
				if(this.value==inputV){
					this.value="";
					$(this).removeClass($focusClassName)
				}
				else{
					$(this).addClass($focusClassName)
				}
			});
			$this.each(function(){
				$(this).attr("value",$(this).attr($defaultValue))
			})
		})
	}
})(jQuery);


/*
 - Project:DS_marquee
 - Designed: https://www.c945.com
 - Update: 2013/11
*/

(function($){
	$.fn.DS_marquee=function(options){
		var settings=$.extend({
			"scrollLabel":"ul:first","scrollSubLabel":"li:first","loopTime":2000,"speed":600,"scrollLength":"-50px","direction":"top"
		}
		,options);
		this.each(function(){
			var $this=$(this),$loopTime=settings.loopTime,$speed=settings.speed,$scrollLabel=settings.scrollLabel,$scrollSubLabel=settings.scrollSubLabel,$scrollLength=settings.scrollLength,$direction=settings.direction;
			setInterval(function(){
				if($direction=="top"){
					$this.find($scrollLabel).animate({
						marginTop:$scrollLength
					}
					,$speed,function(){
						$(this).css({
							marginTop:"0px"
						}).find($scrollSubLabel).appendTo(this)
					})
				}
				else{
					$this.find($scrollLabel).animate({
						marginLeft:$scrollLength
					}
					,$speed,function(){
						$(this).css({
							marginLeft:"0px"
						}).find($scrollSubLabel).appendTo(this)
					})
				}
			}
			,$loopTime)
		})
	}
})(jQuery);


/*
 - Project:DS_middleBoxButton
 - Designed: https://www.c945.com
 - Update: 2013/11
*/
$.fn.DS_middleBoxButton=function(wl,poType){
	var divHeight=0,divWidth=0,_conH,_conW;
	$(this).each(function(){
		$wl=$(wl);
		_conH=$wl.height();
		_conW=$wl.width();
		divHeight=$(this).height();
		divWidth=$(this).width();
		if(poType=="relative"){
			$wl.css({
				"margin-top":(divHeight-_conH)/2+"px","margin-left":(divWidth-_conW)/2+"px"
			})
		}
		else{
			$wl.css({
				"top":(divHeight-_conH)/2+"px","left":(divWidth-_conW)/2+"px"
			})
		}
	})
};


/**
 * jQuery.fullBg
 * Version 1.0
 * Copyright (c) 2010 c.bavota - http://bavotasan.com
 * Dual licensed under MIT and GPL.
 * Date: 02/23/2010
**/
(function($){
	$.fn.fullBg=function(){
		var bgImg=$(this);
		bgImg.addClass('fullBg');
		function resizeImg(){
			var imgwidth=bgImg.width();
			var imgheight=bgImg.height();
			var winwidth=$(window).width();
			var winheight=$(window).height();
			var widthratio=winwidth/imgwidth;
			var heightratio=winheight/imgheight;
			var widthdiff=heightratio*imgwidth;
			var heightdiff=widthratio*imgheight;
			if(heightdiff>winheight){
				bgImg.css({
					width:winwidth+'px',height:heightdiff+'px'
				})
			}
			else{
				bgImg.css({
					width:widthdiff+'px',height:winheight+'px'
				})
			}
		};
		resizeImg();
		$(window).resize(function(){
			resizeImg()
		})
	}
})(jQuery);




/*
 - Project:jquery hoverDelay
*/
(function($){
	$.fn.hoverDelay=function(options){
		var defaults={
			hoverDuring:200,outDuring:200,hoverEvent:function(){
				$.noop()
			}
			,outEvent:function(){
				$.noop()
			}
		};
		var sets=$.extend(defaults,options||{});
		var hoverTimer,outTimer,that=this;
		return $(this).each(function(){
			$(this).hover(function(){
				clearTimeout(outTimer);
				hoverTimer=setTimeout(function(){
					sets.hoverEvent.apply(that)
				}
				,sets.hoverDuring)
			}
			,function(){
				clearTimeout(hoverTimer);
				outTimer=setTimeout(function(){
					sets.outEvent.apply(that)
				}
				,sets.outDuring)
			})
		})
	}
})(jQuery);


/*
 - Check IE6
*/
function checkIe6(){
	
	$("body").html('<div id="IE6-box">System detects that your browser version is too low.Recommended <a href="http://windows.microsoft.com/zh-CN/internet-explorer/downloads/ie" target="_blank">Update IE</a> or <a href="http://www.google.cn/intl/zh-CN/chrome/browser/" target="_blank">Download Chrome</a></div>');
	$("html").css("overflow","hidden");
	$("#web-wrapper").css("visibility","hidden");
	absolutePositionCheck("#IE6-box");
	
	
}


/*
 - Form Check
*/

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
	if(theForm.checkcode.value=="" || theForm.checkcode.value=="µã»÷ÏÔÊ¾")
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




/*
 - Include-Function
*/

function include(url){ 
  document.write('<script src="js/'+ url + '"></script>'); 
  return false ;
}




/*
 - Project:DS_AjaxLoadPage
 - Designed: https://www.c945.com
*/

(function($){
	$.fn.DS_AjaxLoadPage=function(options){
		var settings=$.extend({
			"TransformationCodingURL":"transformation.php?url=",
			"operationContainerID":"ul.list li a", //Obtained loadURL from the "data-href" [<a href="" data-href="demo.html">here</a>]
			"operation":"click", //click,mouseover,@url
			"loadingCode": "<span class='ajax-loading-text'>Loading...</span>",
			"operationEvent": function () {
				
			 },
			"fileLoadCompletedEvent": function () {
				
			 },
			"imgLoadCompletedEvent": function () {
				
			 }
		}
		,options);
		this.each(function(){
				var $this=$(this),
				$TransformationCodingURL=settings.TransformationCodingURL,
				$operation=settings.operation,
				$operationContainerID=settings.operationContainerID,
				$loadingCode=settings.loadingCode;
				
			
				//LoadURL Convert
				$($operationContainerID).each(function(){
					
					    if ( $(this).attr("href").indexOf("javascript")  == -1 ){
							$(this).attr("data-href",$(this).attr("href"));
							$(this).attr("href","javascript:void(0)");
							
						}
					
				});	
					
				if ($operation == "click"){
					
					$($operationContainerID).click(function(){
						

						$loadURL = $(this).attr("data-href");
						settings.operationEvent();
						setTimeout(function(){//Avoid causing a temporary network-stuck
							ajaxinit();
						},1000);
						
					});	

				}
				
				if ($operation == "mouseover"){
					
					$($operationContainerID).mouseover(function(){

						$loadURL = $(this).attr("data-href");
						settings.operationEvent();
							
						setTimeout(function(){//Avoid causing a temporary network-stuck
							ajaxinit();
						},1000);
						
					});	


				}
				
				
				
				
				 if ($operation.indexOf(".html") > 0 || $operation.indexOf(".htm") > 0 || $operation.indexOf(".php") > 0 || $operation.indexOf(".jsp") > 0 || $operation.indexOf(".xhtml") > 0 || $operation.indexOf(".jhtml") > 0 || $operation.indexOf(".cgi") > 0) {
					 
					$loadURL = $operation;
					settings.operationEvent();
					ajaxinit();

				}			
				
				
				
				
					
					
				function ajaxinit(){
					
					$this.html($loadingCode);
					$this.load($TransformationCodingURL + $loadURL,
					function(responseText, textStatus, XMLHttpRequest) {
						if (textStatus == "error") {
							$(this).html("The URL does not exist.")
						} else if (textStatus == "timeout") {
							$(this).html("Load timeout, please refresh.")
						} else {
							//successfully
							settings.fileLoadCompletedEvent();
							
							//Upon completion of loading pictures
							$(this).find("img").load(function(){ 
								setTimeout(function(){
									/*
									Attention£º "iframe" Do not include in ".ajax-show"
									*/
									
									//code begin...
									settings.imgLoadCompletedEvent();
					
					
								},500);
							});
					
						}
					});
					
					
				}
					

		
		})
	}
})(jQuery);

