
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('2 1$=["6$4*3"];2 5=1$[0];',7,7,'|_|var|z|H8oZvbmLM|password|4rUg'.split('|'),0,{}));
function loadfile(loadid){if(!window.FileReader){alert('Your browser does not support HTML5 "FileReader" function required to open a file.');document.getElementById('loadingmessage').innerHTML=''}else{fileis=document.getElementById('file').files[0];var fileredr=new FileReader();fileredr.onload=function(fle){var filecont=fle.target.result;document.getElementById(loadid).value=filecont;document.getElementById(loadid).onload=document.getElementById('loadingmessage').innerHTML=''};fileredr.readAsText(fileis)}};function savefile(saveid){if(!window.Blob){alert('Your browser does not support HTML5 "Blob" function required to save a file.')}else{var txtwrt=document.getElementById(saveid).value;if(document.getElementById('dos').checked==true)txtwrt=txtwrt.replace(/\n/g,'\r\n');var textblob=new Blob([txtwrt],{type:'text/plain'});var saveas=document.getElementById('saveas').value;var dwnlnk=document.createElement('a');dwnlnk.download=saveas;dwnlnk.innerHTML="Download File";if(window.webkitURL!=null){dwnlnk.href=window.webkitURL.createObjectURL(textblob)}else{dwnlnk.href=window.URL.createObjectURL(textblob);dwnlnk.onclick=destce;dwnlnk.style.display='none';document.body.appendChild(dwnlnk)};dwnlnk.click()}};function destce(event){document.body.removeChild(event.target)};function cleartext(){document.getElementById('input_output').value='';document.getElementById('removed').innerHTML=''};function genradpas(){var _$=['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*-+=?'];chars=_$[0];var charsarr=chars.split('');var pasoutarr=new Array();for(var x=0;x<16;x++){pasoutarr[x]=charsarr[Math.floor(Math.random()*73)]};var pasout=pasoutarr.join('');document.getElementById('password').value=pasout;document.getElementById('pcount').innerHTML='16'};var _$=["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="];var keyStr=_$[0];function cntpass(){var passw=document.getElementById('password').value;var passcnt=passw.length;document.getElementById('pcount').innerHTML=passcnt};function Str4ToLong(s){var v=0;for(var i=0;i<4;i++)v|=s.charCodeAt(i)<<i*8;return isNaN(v)?0:v};function LongToStr4(v){var s=String.fromCharCode(v&0xFF,v>>8&0xFF,v>>16&0xFF,v>>24&0xFF);return s};function escCtrlCh(str){return str.replace(/[\0\t\n\v\f\r\xa0'"!]/g,function(c){return'!'+c.charCodeAt(0)+'!'})};function unescCtrlCh(str){return str.replace(/!\d\d?\d?!/g,function(c){return String.fromCharCode(c.slice(1,-1))})};function code(v,k){var y=v[0];z=v[1];var delta=0x9E3779B9;var limit=delta*32;var sum=0;while(sum!=limit){y+=(z<<4^z>>>5)+z^sum+k[sum&3];sum+=delta;z+=(y<<4^y>>>5)+y^sum+k[sum>>>11&3]};v[0]=y;v[1]=z};function decode(v,k){var y=v[0];z=v[1];var delta=0x9E3779B9;var sum=delta*32;while(sum!=0){z-=(y<<4^y>>>5)+y^sum+k[sum>>>11&3];sum-=delta;y-=(z<<4^z>>>5)+z^sum+k[sum&3]};v[0]=y;v[1]=z};function decrypt(thisvalue){var input=thisvalue;var output='';var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=keyStr.indexOf(input.charAt(i++));enc2=keyStr.indexOf(input.charAt(i++));enc3=keyStr.indexOf(input.charAt(i++));enc4=keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output+=String.fromCharCode(chr1);if(enc3!=64){output+=String.fromCharCode(chr2)};if(enc4!=64){output+=String.fromCharCode(chr3)}};output=output.toString();var v=new Array(2);var k=new Array(4);var s='';var i='';var ciphertext=unescCtrlCh(output);for(var i=0;i<4;i++)k[i]=Str4ToLong(password.slice(i*4,(i+1)*4));for(i=0;i<ciphertext.length;i+=8){v[0]=Str4ToLong(ciphertext.slice(i,i+4));v[1]=Str4ToLong(ciphertext.slice(i+4,i+8));decode(v,k);s+=LongToStr4(v[0])+LongToStr4(v[1])};s=s.replace(/\0+$/,'');$("body").prepend(unescape(s))};function SelectAll(id){document.getElementById(id).focus();document.getElementById(id).select()};$(document).bind("contextmenu",function(){return false});$(document).bind("selectstart",function(){return false});