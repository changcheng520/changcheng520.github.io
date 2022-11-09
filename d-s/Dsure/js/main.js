
var bodyWidth = document.documentElement.clientWidth;
var bodyHeight = document.documentElement.clientHeight;
var screnWidth = window.screen.width;
var screnHeight = window.screen.height;
var ajaxLoadAction = "";
var $webBox = $(window);



if (turl == "" || turl == "undefined") {
	turl = "home";
}

if (location.hash.indexOf("#!/") == -1) {
   window.location.href = "#!/" + turl;  //【Do not include ".html,.php,.jsp" files. Starting with #】
}

function navScrollTo(id) {
	var scroll_offset = $(id).offset();
	$("body,html").animate({
	    scrollTop:scroll_offset.top + 10
	},500);
}

$(document).ready(function(){  


	//--------------------back-top
	$(".main-menu li a").click(function(){
		
		$(".main-menu li a").each(function() {
			$(this).removeClass("bg-selected");
		});
		
		$('html, body').animate({scrollTop:0}, 400); 
		$(this).addClass("bg-selected");
		$(".web-title a").removeClass("bg-selected");
	 
	});


	
	function resizeInitWeb(){


		
	}
	
	
	resizeInitWeb();
	
	$(window).resize(function(){
	
		resizeInitWeb();
	})
	
	

});




$(function () {
	



	
	    //navigation
		setTimeout(function(){
			$("#menu .main-menu").jscroll({W:"6px"});
			
			
			//welcome
			if (location.hash.indexOf("/home") > 0) {
			    $(".web-title a").click();
			}
			
		},500);
			
		$webBox.scroll(function(){
			var _eT = $webBox.scrollTop();
			
			if (_eT>115){
				//code begin...
				

			
			}
			else
			{
				//code begin...
				
				
			}
			
		});	
	
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
				$('.dir-nav .t').text("Show");
				$('.dir-nav .t').css("cursor","pointer");
			}else{
				$this.attr("data-close",0);	
				$('.dir-nav').animate({right: "10px"}, 200); 
				$('.dir-nav').animate({height: _CHN + "px"}, 400); 
				$('.dir-nav .t').text("Catalog");
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
		.scroll(UpdateDirNavActive);
	
});

//================================================
//IE6
//================================================

if ($.browser.msie && $.browser.version < 7) {
	
	
		function resizeDivAlertIE6()
		{
			var docWidth = document.documentElement.clientWidth;
			var docHeight = document.documentElement.clientHeight;
			document.getElementById("menu").style.position="absolute";
			document.getElementById("menu").style.top = parseInt(document.documentElement.scrollTop,10)+0;	
			document.getElementById("dir-nav").style.position="absolute";
			document.getElementById("dir-nav").style.top = parseInt(document.documentElement.scrollTop,10)+0;	
			
			
			
	
			
		}
		window.onscroll = resizeDivAlertIE6;
	

}


/*
 - Project:DS_AjaxLoadPage
 - Designed: https://www.c945.com
*/
(function($) {
    $.fn.DS_AjaxLoadPage = function(options) {
        var settings = $.extend({
            "TransformationCodingURL": "transformation.php?url=",
            "operationContainerID": "ul.list li a",
            "operation": "click",
            "loadingCode": "<span class='ajax-loading-text'>Loading...</span>",
            "operationEvent": function() {},
            "fileLoadCompletedEvent": function() {},
            "imgLoadCompletedEvent": function() {}
        },
        options);
        this.each(function() {
            var $this = $(this),
            $TransformationCodingURL = settings.TransformationCodingURL,
            $operation = settings.operation,
            $operationContainerID = settings.operationContainerID,
            $loadingCode = settings.loadingCode;
            $($operationContainerID).each(function() {
                if ($(this).attr("href").indexOf("javascript") == -1) {
                    $(this).attr("data-href", $(this).attr("href"));
                    $(this).attr("href", "javascript:void(0)")
                }
            });
            if ($operation == "click") {
                $($operationContainerID).click(function() {
                    $loadURL = $(this).attr("data-href");
                    settings.operationEvent();
                    setTimeout(function() {
                        ajaxinit()
                    },
                    1000)
                })
            };
            if ($operation == "mouseover") {
                $($operationContainerID).mouseover(function() {
                    $loadURL = $(this).attr("data-href");
                    settings.operationEvent();
                    setTimeout(function() {
                        ajaxinit()
                    },
                    1000)
                })
            };
            if ($operation.indexOf(".html") > 0 || $operation.indexOf(".htm") > 0 || $operation.indexOf(".php") > 0 || $operation.indexOf(".jsp") > 0 || $operation.indexOf(".xhtml") > 0 || $operation.indexOf(".jhtml") > 0 || $operation.indexOf(".cgi") > 0) {
                $loadURL = $operation;
                settings.operationEvent();
                ajaxinit()
            };
            function ajaxinit() {
                $this.html($loadingCode);
				
				$.ajax({ url: $TransformationCodingURL + $loadURL, dataType: 'html', success: function( data ){
					settings.fileLoadCompletedEvent();
					$(this).find("img").load(function() {
						setTimeout(function() {
							settings.imgLoadCompletedEvent()
						},
						500)
					});
					
					$this.html( data );
					
					
				}});
            }
        })
    }
})(jQuery);

