/*
' Pugins: DS.switcher  (HTML5 plugins)
' 技术支持：没位道 https://www.c945.com
' Used: Designer's site program
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
					changeTo:false, //调用属性判断
					valueH:"",
					returnNow:false,
					hashFu:function(){
						//初始化状态
						DS.changeTo = false;
			
						//改变状态
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
								DS.valueH = location.hash.replace( /^#!\//,'');		
								
					
								 //加载页面
								 if (location.hash.indexOf(".html") > 0) {
									 setTimeout(function(){
										 showac_subitem(DS.valueH,'',0);
									 },2000);
					
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
			
	
			//回调参数=============
			if (DS.returnNow == true){
				
				//执行即时判断
				DS.hashFu();
				
			}else{
				
				
			}
		
			
			
		})
		return this;
	}
})(jQuery)