$( document ).ready(function() {
  $( "#main" ).on( "click", function() {
    var isTrue = $("#circle").hasClass("move-circle-left-to-right");
    if(isTrue) {
      $( "#circle" ).removeClass( "move-circle-left-to-right" );
    } else {
      $( "#circle" ).addClass( "move-circle-left-to-right" );
    }
  });
});