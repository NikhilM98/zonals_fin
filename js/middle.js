$(document).ready(function(){
  $("#fame").click(function(){
    swap("#fameInfo", 1000);
  });
  $("#creative").click(function(){
    swap("#creativeInfo", 1000);
  });
  $("#mrthomso").click(function(){
    swap("#mrthomsoInfo", 1000);
  });
});

function swap(naya, time) {
  if ($("#fameInfo").hasClass("animated fadeInRight") && naya != "#fameInfo" ) {
    $("#fameInfo").removeClass( "animated fadeInRight");
    $("#fameInfo").addClass( "animated fadeOutRight");
    setTimeout(function(){
      $("#fameInfo").addClass("gayab");
      $(naya).removeClass("gayab");
      $(naya).addClass( "animated fadeInRight");
      $("#fameInfo").removeClass("animated fadeOutRight");
    }, time);    
  } else if ($("#creativeInfo").hasClass("animated fadeInRight") && naya != "#creativeInfo") {
    $("#creativeInfo").removeClass( "animated fadeInRight");
    $("#creativeInfo").addClass( "animated fadeOutRight");
    setTimeout(function(){
      $("#creativeInfo").addClass("gayab");
      $(naya).removeClass("gayab");
      $(naya).addClass( "animated fadeInRight");
      $("#creativeInfo").removeClass("animated fadeOutRight");
    }, time);    
  } else if ($("#mrthomsoInfo").hasClass("animated fadeInRight") && naya != "#mrthomsoInfo" ) {
    $("#mrthomsoInfo").removeClass( "animated fadeInRight");
    $("#mrthomsoInfo").addClass( "animated fadeOutRight");
    setTimeout(function(){
      $("#mrthomsoInfo").addClass("gayab");
      $(naya).removeClass("gayab");
      $(naya).addClass( "animated fadeInRight");
      $("#mrthomsoInfo").removeClass("animated fadeOutRight");
    }, time);    
  } else if ($("#bakwaasInfo").hasClass("animated fadeInRight")) {
    $("#bakwaasInfo").removeClass("animated fadeInRight");
    $("#bakwaasInfo").addClass( "animated fadeOutRight");
    setTimeout(function(){
      $("#bakwaasInfo").addClass("gayab");
      $(naya).removeClass("gayab");
      $(naya).addClass( "animated fadeInRight");
      $("#bakwaasInfo").removeClass("animated fadeOutRight");
    }, time);    
  } else {
    $(naya).removeClass("animated fadeInRight");
    $(naya).addClass( "animated fadeOutRight");
    setTimeout(function(){
      $(naya).addClass("gayab");
      $("#bakwaasInfo").removeClass("gayab");
      $("#bakwaasInfo").addClass( "animated fadeInRight");
      $(naya).removeClass("animated fadeOutRight");
    }, time);
  };
}