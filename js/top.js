/*document.getElementById("one").style.zIndex="10";
document.getElementById("two").style.zIndex="1";
while(true){
    setTimeout(function() {
        document.getElementById("two").style.zIndex="10";
        document.getElementById("one").style.zIndex="1";
        document.getElementById("two").classList.add("fadeInLeft");
    }, 1000);
    setTimeout(function() {
        document.getElementById("two").style.zIndex="1";
        document.getElementById("one").style.zIndex="10";
        document.getElementById("one").classList.add("fadeInLeft");
        document.getElementById("two").classList.remove("fadeInLeft");
    }, 1000);
    document.getElementById("one").classList.remove("fadeInLeft");
};
*/

/*
    document.getElementById("one").style.zIndex="10";
    document.getElementById("two").style.zIndex="1";
    $("#one").addClass( "animated fadeInRight");
    setInterval(function() {
        setTimeout(function() {
            $("#two").css("z-index", "10");
            $("#one").css("z-index", "1");
            $("#two").addClass( "animated fadeInRight" );
            $("#one").removeClass( "animated fadeInRight");
        }, 1000);
        setTimeout(function() {
            $("#one").css("z-index", "10");
            $("#two").css("z-index", "1");
            $("#one").addClass( "animated fadeInRight" );
            $("#two").removeClass( "animated fadeInRight");
        }, 1000);
    }, 0);

    */
/*
function init() {
    $("#one").css("z-index", "10");
    $("#two").css("z-index", "1");
    $("#one").addClass( "animated fadeInRight");
}

function fadeone() {
    if ($("#one").hasClass("fadeInRight")) {
        $("#two").css("z-index", "10");
        $("#one").css("z-index", "1");
        $("#two").addClass( "animated fadeInRight" );
        $("#one").removeClass( "animated fadeInRight");
    }
    else {
        fadetwo();
    };
}

function fadetwo() {
    if ($("#two").hasClass("fadeInRight")) {
        $("#one").css("z-index", "10");
        $("#two").css("z-index", "1");
        $("#one").addClass( "animated fadeInRight" );
        $("#two").removeClass( "animated fadeInRight");
    }
    else {
        fadeone();
    };
}

init();
setInterval(function() {
    fadeone();
    setTimeout(fadetwo, 1000);
}, 1000);

*/




var
    images = [ "img/b-1.png", "img/b-2.png", "img/b-3.png" ] //the list of images
   imgToCHange = document.getElementById( 'one' )
  , interval = 5000 //in ms
  ;

setInterval( function(){
  images.unshift( images.pop() );
  imgToCHange.src = images[0];
 }, interval );






/*

var colour=["#2c9977", "#CE635D", "#E29C45","#2980b9"];
var counter = 0;

init();

function init() {
    $("#one").css("z-index", "2");
    $("#two").css("z-index", "1");
    $("#one").addClass( "animated fadeInRight");
}

function fade() {

    if ($("#one").hasClass("fadeInRight")) {
        $("#two").css("z-index", "2");
        $("#one").css("z-index", "1");
        $("#two").css("background-color", colour[counter]);
        $("#two").addClass( "animated fadeInRight" );
        $("#one").removeClass( "animated fadeInRight");

    }
    else if ($("#two").hasClass("fadeInRight")) {
        $("#two").css("z-index", "1");
        $("#one").css("z-index", "2");
        $("#one").css("background-color", colour[counter]);
        $("#one").addClass( "animated fadeInRight" );
        $("#two").removeClass( "animated fadeInRight");
    }
    else {
        console.log('Error');
    };
    if ( counter < 3 ) {
        counter += 1;
    }
    else {
        counter = 0;
    };
}

setInterval(fade, 5000);


*/
