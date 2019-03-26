$(document).ready(function() {


	// $(".one").click(function() { // when the first button group is clicked, then it gets replaced by the second button group
	// 	$(this).fadeOut("slow");
	// 	$(".two").delay(500).fadeIn();
	// });

	$(".popular").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(".one").fadeOut("slow");
		$(".two-popular").delay(500).fadeIn();
	});

	$(".nonconformist").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(".one").fadeOut("slow");
		$(".two-nonconformist").delay(500).fadeIn();
	});	

	$(".underdog").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(".one").fadeOut("slow");
		$(".two-underdog").delay(500).fadeIn();
	});	





	$(".two-nonconformist").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(this).fadeOut("slow");
		$(".three-nonconformist").delay(500).fadeIn();
	});

	$(".two-popular").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(this).fadeOut("slow");
		$(".three-popular").delay(500).fadeIn();
	});

	$(".two-underdog").click(function() { // when the second button group is clicked, then it gets replaced by the third button group
		$(this).fadeOut("slow");
		$(".three-underdog").delay(500).fadeIn();
	});





	$(".three-nonconformist").click(function() { // when the third button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$('.four-nonconformist').delay(500).fadeIn('slow');
	});

	$(".three-popular").click(function() { // when the third button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$('.four-popular').delay(500).fadeIn('slow');
	});

	$(".three-underdog").click(function() { // when the third button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$('.four-underdog').delay(500).fadeIn('slow');
	});






	$(".four-nonconformist").click(function() { // when the fourth button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$(".final").fadeTo("slow", 1); // this line makes sure that the answer group, in its final filtered result, gets displayed by setting its opacity to 100%
	});

	$(".four-popular").click(function() { // when the fourth button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$(".final").fadeTo("slow", 1); // this line makes sure that the answer group, in its final filtered result, gets displayed by setting its opacity to 100%
	});

	$(".four-underdog").click(function() { // when the fourth button group is clicked, then it dissapears, making way for the final result to appear.
		$(this).fadeOut("slow");
		$(".final").fadeTo("slow", 1); // this line makes sure that the answer group, in its final filtered result, gets displayed by setting its opacity to 100%
	});





	// Making the Reset Button to Refresh the Page
	$('.reset').click(function() {
    	location.reload();
	});

});