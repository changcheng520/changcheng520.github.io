/**
 * jPreLoader - jQuery plugin
 * Create a Loading Screen to preload images and content for you website
 *
 * Name:		jPreLoader.js
 * Author:		Kenny Ooi - http://www.inwebson.com
 * Date:		July 11, 2012		
 * Version:		2.1
 * Example:		http://www.inwebson.com/demo/jpreloader-v2/
 *              Modify by Kevin Yan - 2013.7.21
**/
(function($) {
	var items = new Array(),
		errors = new Array(),
		onComplete = function() {},
		current = 0;
	
	var jpreOptions = {
		jBar: '#jpreBar',
		autoClose: true,
		onetimeLoad: false,
		debugMode: false,
		splashFunction: function() {}
	}
	
	//cookie
	var getCookie = function() {
		if( jpreOptions.onetimeLoad ) {
			var cookies = document.cookie.split('; ');
			for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
				if ((parts.shift()) === "jpreLoader") {
					return (parts.join('='));
				}
			}
			return false;
		} else {
			return false;
		}
		
	}
	var setCookie = function(expires) {
		if( jpreOptions.onetimeLoad ) {
			var exdate = new Date();
			exdate.setDate( exdate.getDate() + expires );
			var c_value = ((expires==null) ? "" : "expires=" + exdate.toUTCString());
			document.cookie="jpreLoader=loaded; " + c_value;
		}
	}
	
	//get all images from css and <img> tag
	var getImages = function(element) {
		$(element).find('*:not(script)').each(function() {
			var url = "";

			if ($(this).css('background-image').indexOf('none') == -1 && $(this).css('background-image').indexOf('-gradient') == -1) {
				url = $(this).css('background-image');
				if(url.indexOf('url') != -1) {
					var temp = url.match(/url\((.*?)\)/);
					url = temp[1].replace(/\"/g, '');
				}
			} else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined') {
				url = $(this).attr('src');
			}
			
			if (url.length > 0) {
				items.push(url);
			}
		});
	}
	
	//create preloaded image
	var preloading = function() {
		for (var i = 0; i < items.length; i++) {
			if(loadImg(items[i]));
		}
	}
	var loadImg = function(url) {
		var imgLoad = new Image();
		$(imgLoad)
		.load(function() {
			completeLoading();
		})
		.error(function() {
			errors.push($(this).attr('src'));
			completeLoading();
		})
		.attr('src', url);
	}
	
	//update progress bar once image loaded
	var completeLoading = function() {
		current++;

		var per = Math.round((current / items.length) * 100);
		$(jpreOptions.jBar).stop().animate({
			width: per + '%'
		}, 200, 'linear');
		$("#jpreBarNum").stop().animate({
			marginLeft: per + '%'
		}, 200, 'linear');
		
		$("#jpreBarNum").text(per + '%');
		
		//if all images loaded
		if(current >= items.length) {
			current = items.length;
			setCookie();	//create cookie
			
			//fire debug mode
			if (jpreOptions.debugMode) {
				var error = debug();
			}
			
			//max progress bar
			$(jpreOptions.jBar).stop().animate({
				width: '100%'
			}, 200, 'linear', function() {
				//autoclose on
				if( jpreOptions.autoClose )
					loadComplete();
				//else
					//$(jButton).fadeIn(1000);
			});	
			
			
			
			
			
			
		}	
	}
	
	//triggered when all images are loaded
	var loadComplete = function() {
		onComplete();
	}
	
	//debug mode
	var debug = function() {
		if(errors.length > 0) {
			var str = 'ERROR - IMAGE FILES MISSING!!!\n\r'
			str	+= errors.length + ' image files cound not be found. \n\r';	
			str += 'Please check your image paths and filenames:\n\r';
			for (var i = 0; i < errors.length; i++) {
				str += '- ' + errors[i] + '\n\r';
			}
			return true;
		} else {
			return false;
		}
	}
	
	$.fn.jpreLoader = function(options, callback) {
        if(options) {
			if(typeof options == 'function') onComplete = options;//added 2013.7.21
            else $.extend(jpreOptions, options );
        }
		
		if(typeof callback == 'function') {
			onComplete = callback;
		}
		
		return this.each(function() {
			if( !(getCookie()) ) {
				if(typeof jpreOptions.splashFunction == 'function')jpreOptions.splashFunction();
				getImages(this);
				preloading();
			}
			else {	//onetime load / cookie is set
				onComplete();
			}
		});
    };

})(jQuery);
