$( document ).ready(function() {
  // change button color when clicked
  $('button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
  });

  //select the animation you want to play
  var activeScene = 'straight-line';
  $("#straight-line").click(function(){
    activeScene = 'straight-line';
  }); 
  $("#bounce-ball").click(function(){
    activeScene = 'bounce';
  });


  // click on the area to start or reset the animation
  $( ".main" ).on( "click", function() {
    // move in a straight line
    var isActive = $('.main-container').data('animate');

    if(!isActive && activeScene === 'straight-line') {
      $( ".main-container" ).data('animate', true);
      $( "#ball" ).addClass( "move-circle-left-to-right" );
      $( "#rotate" ).addClass( "rotate-ball" );
    }

    if(!isActive && activeScene === 'bounce') {
      $( ".main-container" ).data('animate', true);
      $( "#ball" ).addClass( "move-circle-left-to-right" );
      $( "#rotate" ).addClass( "rotate-ball" );
      $( "#bounce" ).addClass( "bounce-ball" );
    }

    if(isActive) {
      $( ".main-container" ).data('animate', false);
      $( "#ball" ).removeClass();
      $( "#rotate" ).removeClass();
      $( "#bounce" ).removeClass();
    }  
  });
});