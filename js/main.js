$(function() { 
    $(".header__menubtn").on('click', function(e){
        e.preventDefault;
        $(this).toggleClass("header__menubtn_active");
        $('.header__menu').slideToggle(0500);
    })

});