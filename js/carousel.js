$(document).ready(function(){

	var slideWidth = $('.slide').width(), //the size will dynamically shift based on the CSS, this is JS's purpose
		numOfSlides = $('.slide').size(),
		positionNum = 0,
		slideSpeed = 400;

	// set width of div#tray
	$('#tray').width(slideWidth * numOfSlides);

	$('a.next').click(function(event){
		// update the positionNum, calculate slide distance to shift, animate the tray
		if (positionNum === (numOfSlides - 1)) {
			positionNum = 0;
		} else {
			positionNum += 1;
		}
			var distance = positionNum * slideWidth;
			$('#tray').animate({right:distance}, slideSpeed);
		event.preventDefault();
	});

	$('a.prev').click(function(event){
		if (positionNum === 0) {
			positionNum = (numOfSlides - 1);
		} else {
			positionNum -= 1;
		}

		var distance = positionNum * slideWidth;
		$('#tray').animate({right:distance}, slideSpeed);

		event.preventDefault();
	});



});