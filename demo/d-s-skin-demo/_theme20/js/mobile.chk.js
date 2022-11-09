
//-----------------Mobile

$(function(){
	
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i)) {
        $('body').addClass('mobile');
    }
	
		
	// IPad/IPhone
	  var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
		ua = navigator.userAgent,
	 
		gestureStart = function () {
			viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
		},
	 
		scaleFix = function () {
		  if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		  }
		};
	scaleFix();

	
});

/* ------ fi fixed position on Android -----*/
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')