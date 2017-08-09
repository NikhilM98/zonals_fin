/*$(document).ready(function(){
    $("#next").click(function(){
        $("#page1").removeClass("animated fadeInLeft");
        $("#page2").removeClass("animated fadeOutLeft");
        $("#page1").addClass( "animated fadeOutLeft" );
        setTimeout(function(){
            $('#page1').addClass("hidden");
        }, 800);
        setTimeout(function(){
            $('#page2').addClass("animated fadeInLeft");
            $("#page2").removeClass("hidden");
        }, 800);
    });
    $("#back").click(function(){
        $("#page1").removeClass("animated fadeOutLeft");
        $("#page2").removeClass("animated fadeInLeft");
        $("#page2").addClass( "animated fadeOutLeft" );
        setTimeout(function(){
            $('#page2').addClass("hidden");
        }, 800);
        setTimeout(function(){
            $("#page1").removeClass("hidden");
            $('#page1').addClass("animated fadeInLeft");
        }, 800);
    });
});*/


function changePage(purana, naya, waqt = 800) {
    $(purana).addClass( "animated fadeOutLeft" );
    setTimeout(function(){
        $(purana).addClass("hidden");
        $(purana).removeClass("animated fadeOutLeft");
        $(naya).removeClass("hidden");
        $(naya).addClass("animated fadeInLeft");
        setTimeout(function(){
            $(naya).removeClass("animated fadeInLeft");
       }, waqt);
    }, waqt);
}

function changePage(purana, naya, waqt = 800) {
    $(purana).addClass( "animated fadeOutTop" );
    setTimeout(function(){
        $(purana).addClass("hidden");
        $(purana).removeClass("animated fadeOutTop");
        $(naya).removeClass("hidden");
        $(naya).addClass("animated fadeInTop");
        setTimeout(function(){
            $(naya).removeClass("animated fadeInTop");
       }, waqt);
    }, waqt);
}

$(document).ready(function(){
    $("#next").click(function(){
        (changePage("#page1", "#page2"));
    });
    $("#next1").click(function(){
        (changePageMobi("#page1", "#page2"));
    });
    $("#back").click(function(){
        (changePage("#page2", "#page1"));
    });
    $("#back1").click(function(){
        (changePageMobi("#page2", "#page1"));
    });
});

