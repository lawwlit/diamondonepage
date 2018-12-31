/*
	This file is part of a site template for sale at ThemeForest.net.
	See: http://themeforest.net/user/GeertDD/portfolio
	Copyright Â©2009 Geert De Deckere <geert@idoe.be>
*/

$(document).ready(function() {

	// NAVIGATION -------------------------------------------------------------

	// Main navigation
	$('#mainnav a').click(function() {
		// Activate the clicked mainnav link, and deactivate the others
		$(this).parent().addClass('active').siblings().removeClass('active');
		// Show the corresponding subnav, and hide the others
		// Note: the id of the mainnav matches the class of the subnav
		var id = $(this).parent()[0].id;
		$('#nav > .subnav').hide().filter('.' + id).show();
		// Don't follow the real link
		return false;
	});

	// When the page loads initially, show the right subnav based on the active mainnav
	$('#mainnav > .active a').click();

	// Subnavigation
	$('#nav > .subnav a').click(function() {
		// Activate the clicked subnav link, and deactivate the others
		$(this).parent().addClass('active').siblings().removeClass('active');
		// Don't follow the real link. You may want to remove it.
		return false;
	});


	// TAB BOXES --------------------------------------------------------------

	// Initially, find all tab boxes and loop over each of them
	$('div.tabs').each(function(index) {
		// Highlight the first tab
		var $first = $(this).find('div.head li a').filter(':first');
		$first.parent().addClass('active');
		// Only show the content box for the first tab
		$(this).find('div.body').hide().filter($first[0].hash).show();
	});

	// A tab from a tab box was clicked
	$('div.tabs > div.head li a').click(function() {
		// Show the correct content box
		$(this).closest('div.tabs').find('div.body').hide().filter(this.hash).show();
		// Highlight the clicked tab
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		// Don't follow the real link
		return false;
	});


	// TABLE ROW STRIPING -----------------------------------------------------

	// Saves you a lot of manual work
	$('#content tbody tr:odd').addClass('odd');
	$('#content tbody tr:even').addClass('even');

});