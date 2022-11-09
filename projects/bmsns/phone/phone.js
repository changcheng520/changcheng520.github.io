
$(document).ready(function(){


	$('#m-open').click(function() {
	  $('#menu').slideDown();
	  $('.menuswitch').show();
	  $(this).hide();
	  
	});
	
	

	$('#m-close').click(function() {
	  $('#menu').slideUp();
	  setTimeout(function(){
		  $('.menuswitch').show();
	  },700);
	  
	  $(this).show();
	  
	});

	//init
	animBgLoop();
	setInterval('animBgLoop()', 6000); 

	
});



var animBgLoop_i = 0; //排序序号
var animBgLoop_s_arr = 0;
var animBgLoop_s_num = 0; // 统计数量并减 1 处理
	
function animBgLoop() {
	if(animBgLoop_s_arr==0){
	animBgLoop_s_arr = $("#switch_bg").children("div");
	animBgLoop_s_num = animBgLoop_s_arr.length - 1; // 统计数量并减 1 处理
	}
	if (animBgLoop_i > animBgLoop_s_num) {animBgLoop_i = 0;} // 如果计数器（排序）大于 animBgLoop_s_num 时归零
	$('#switch_bg div:eq('+animBgLoop_i+')').fadeIn(1500); //渐显效果显示第 animBgLoop_i 个img
	setTimeout(function() {$('#switch_bg div:eq('+animBgLoop_i+')').fadeOut(1500);animBgLoop_i++;},5000);
};