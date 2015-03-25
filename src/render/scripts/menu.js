(function(){
	$( document ).ready(function() {
		var selectedMenuItem = $('.selected-menu-item').val();

		$('.top-nav li#' + selectedMenuItem).addClass('nav-active');
	});
})();