$(document).ready(function(){
	$('main').hide();

	$(window).on({
		load: function(){
			$('.preloader').fadeTo("slow", 0);
			$('main').fadeTo("slow", 1);
		}
	})
})