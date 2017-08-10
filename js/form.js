function changePage(purana, naya, baharClass, andarClass, waqt = 900) {
    $(purana).addClass(baharClass);
    setTimeout(function(){
        $(purana).addClass("hidden");
        $(purana).removeClass(baharClass);
        $(naya).removeClass("hidden");
        $(naya).addClass(andarClass);
        setTimeout(function(){
            $(naya).removeClass(andarClass);
       }, waqt);
    }, waqt);
}

$(document).ready(function(){
    $("#next").click(function(){
        if (window.matchMedia("(min-width: 822px)").matches) {
            (changePage("#page1", "#page2", "animated fadeOutLeft", "animated fadeInLeft"));
        } else {
            (changePage("#page1", "#page2", "animated fadeOutUp", "animated fadeInDown"));
        };
    });

    $("#back").click(function(){
        if (window.matchMedia("(min-width: 822px)").matches) {
            (changePage("#page2", "#page1", "animated fadeOutLeft", "animated fadeInLeft"));
        } else {
            (changePage("#page2", "#page1", "animated fadeOutUp", "animated fadeInDown"));
        };
    });
});







window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});




$(window).resize(function()
{
   var vw = $(window).width();
   var vh = $(window).height();

});
