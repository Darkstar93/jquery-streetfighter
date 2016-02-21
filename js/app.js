var $poses = $('.ryu div');
function changePose(poseToShow){
	$poses.hide()
	$('.ryu-' + poseToShow).show();
}
$('.ryu').mouseenter(function(){
    changePose('ready');
})
.mouseleave(function() {
    changePose('still');
    
})
.mousedown(function(){
    playHadouken();
   	changePose('throwing')
    $('.hadouken').finish().show().animate(
        {'left': '1020px'},
        500,
        function(){
            $(this).hide();
            $(this).css('left', '520px');
        });
})
.mouseup(function(){
  changePose('ready');
});
/**************
 * Key Events
 * 88 = x
 */

$(document).keydown(function(e) {
    if(e.which == 88) {
       changePose('cool');
        
    }
});

$(document).keyup( function(e) {
    if(e.which == 88) {
        changePose('still');
    }
});


function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
