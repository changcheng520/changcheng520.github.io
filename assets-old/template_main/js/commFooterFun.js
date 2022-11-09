
//-表单焦点文字-放置在表单后面
function getByteLen(val) { 
	var len = 0; 
	for (var i = 0; i < val.length; i++) { 
	if (val[i].match(/[^\x00-\xff]/ig) != null) //全角 
	len += 2; 
	else 
	len += 1; 
	} 
	return len; 
} 

function openMsgForm(){
    $("#commentForm").css("display","block");$("#commentWrite").css("display","none");	
}

$(document).ready(function(){
	
	var $DI = $(".focusJS");

	$DI.each(function(){  
		var checkV = $(this).val();
		var defaultValIn = $(this).attr("data-value");
		$(this).val(defaultValIn);
	});


	$DI.click(function () {
		var checkV = $(this).val();
		var defaultVal = $(this).attr("data-value");
		if (checkV == defaultVal) {
			$(this).val("");
		}else{
			$(this).val(checkV);
		}
	});
	$DI.blur(function () {
		var checkV = $(this).val();
		var defaultVal = $(this).attr("data-value");
		if(getByteLen(checkV) == 0) {$(this).val(defaultVal);}
		if(checkV == "") {$(this).val(defaultVal);}
	
	});


	//cookie记录评论留言信息
	var nameNowLoginName=decodeURIComponent(MySite.Cookie.get("memLoginNickname"));
	var nameNowLoginEmail=MySite.Cookie.get("memLoginEmail");
	var nameNowLoginURL=MySite.Cookie.get("memLoginURL");
	
	if (nameNowLoginURL == "http://") {MySite.Cookie.set("memLoginURL","");}
	
	var showMsgUName = decodeURIComponent(MySite.Cookie.get("msgUsername"));
	var showMsgUURL = decodeURIComponent(MySite.Cookie.get("msgURL"));
	var showMsgUEmail = decodeURIComponent(MySite.Cookie.get("msgEmail"));
	var thisSName;
	var thisSEmail;
	
	if(MySite.Cookie.get("memLoginNickname")){
		thisSName=nameNowLoginName
	}else{
		thisSName=showMsgUName
	}
	if(MySite.Cookie.get("memLoginEmail")){
		thisSEmail=nameNowLoginEmail
	}else{
		thisSEmail=showMsgUEmail
	}
	if(MySite.Cookie.get("memLoginURL")){
		thisSURL=nameNowLoginURL
	}else{
		thisSURL=showMsgUURL
	}

    if(MySite.Cookie.get("msgUsername")){openMsgForm();};
	if(MySite.Cookie.get("memLoginNickname")){openMsgForm();};
	
	//未登录
	if(MySite.Cookie.get("msgUsername")){$("#userName").val(thisSName);};
	if(MySite.Cookie.get("msgEmail")){$("#Email").val(thisSEmail);};
	if(MySite.Cookie.get("msgURL")){$("#url").val(thisSURL);};

	//已登录
	if(MySite.Cookie.get("memLoginNickname")){$("#userName").val(thisSName);};
	if(MySite.Cookie.get("memLoginEmail")){$("#Email").val(thisSEmail);};
	if(MySite.Cookie.get("memLoginURL")){$("#url").val(thisSURL);};


	
	
	
	//清空留言评论表单数据
	$(".clearMsgData").click(function () {
		MySite.Cookie.set("msgUsername","");
		MySite.Cookie.set("msgURL","");
		MySite.Cookie.set("msgEmail","");
		floatWin('温馨提示','√&nbsp;操作成功！',430,0,170,0,1,0)
	});
	

});
