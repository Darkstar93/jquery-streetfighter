$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  })
  .mousedown(function() {
  	console.log('mousedown');
  	//play hadouken sound
  	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').show();
  	// show hadouken an animate it to the right of the screen
  })
.mouseup(function() {
console.log('mouseup');
	//ryu goes back to his ready position
	$('.ryu-throwing').hide();
	$('.ryu-ready').show();
  });
});