// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

$(function() {
	$(document).scroll(function() {
		var $nav = $("nav");
		$nav.toggleClass('navScrolled', $(this).scrollTop() > $nav.height());
	});
});