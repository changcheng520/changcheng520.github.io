
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


//表单判断
function checkFormLogin(){
	if(document.formM.userName.value=="" || document.formM.userName.value=="帐 号"){
		$("#divCheckuser").html('&nbsp;用户名不能为空！');	
		return false;
	}
	if(document.formM.userPass.value=="" || document.formM.userPass.value=="登录密码"){
		$("#divCheckuser").html('&nbsp;登录密码不能为空！');	
		return false;
	}
	//ok
    $("#btnPost").fadeOut(500);
	$("#subStatus").html("数据验证中...");
	return true;
		
}

function openRegForm(){

}

function openLoseForm(){

}
