$( document ).ready(function() {
  $( ".main" ).on( "click", function() {
    var isTrue = $("#circle").hasClass("move-circle-left-to-right");
    if(isTrue) {
      $( "#circle" ).removeClass( "move-circle-left-to-right" );
    } else {
      $( "#circle" ).addClass( "move-circle-left-to-right" );
    }
  });
});

function clicked1(active) {
  const items = $( ".main-container" ).children();
  items.each((index, item) => {
    const id = $(item).attr('id');
    if(active === id) {
      $(item).show();
    } else {
      $(item).hide();
    }
  });

} 