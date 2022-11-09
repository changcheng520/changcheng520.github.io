/*
'===============================================
'    Designer's site Program 全站静态系统
'    xizon@c945.com
'    www.c945.com

'///////////// 酷站欣赏 ////////////
'===============================================
*/
function include(path) 
{ 
      var scripts = document.getElementsByTagName("script"); 
      if(!scripts) return;
      var jsPath = scripts[0].src;      
      jsPath=jsPath.substring(0,jsPath.lastIndexOf('/')+1);
      var sobj = document.createElement('script'); 
      sobj.type = "text/javascript"; 
      sobj.src = jsPath+path; 
      var headobj = document.getElementsByTagName('head')[0]; 
      headobj.appendChild(sobj); 
}

include('commConfig.js');
var MyrootPath;


//================================================
// 模板更新
//================================================
function upTemp_coolsite(name){


}
