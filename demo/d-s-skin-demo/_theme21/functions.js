$(function() {
	
	$('#partners-slider .slider-holder2').carouFredSel({
		align: 'center',
	    items: {
			visible: "variable",
			width: "variable"
		},
		scroll: 1,
		prev: ".prev-arr",
		next: ".next-arr"
	});



	$('#navigation a.nav-btn').click(function(){
		$(this).closest('#navigation').find('ul').stop(true,true).slideToggle()
		$(this).find('span').toggleClass('active')
		return false;
	})

	// homepage carousel auto time
	var carousel_auto = 8000;
	$('#carousel').carouFredSel({
		align: 'center',
		scroll: 1,
		prev: "#prev",
		next: "#next",
		pagination	: ".pagination"
		
	});
	
	
	
});