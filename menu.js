/**
 * Created by Li on 29/01/2018.
 */


// $('#verticalTitle').hide();
// $('#menu').hide();
//
// $(document).ready(function () {
//
//     $('#verticalTitle').fadeIn();
//     $('#menu').fadeIn();
//
// });


$('#verticalTitle').mouseenter(function () {

    $(this).find('.selectLine').fadeIn(200)

});

$('#verticalTitle').mouseleave(function () {

    $(this).find('.selectLine').fadeOut(200)

});

$('#verticalTitle').click(function () {

    $('#verticalTitle').animate({left:'-30%'},2000);
    $('#menu').animate({top:'-10%'},2000);
    setTimeout(function () {

        window.location.replace('index.html')

    },1000)

});


$('.menu').mouseenter(function () {

    $(this).find('.selectLine').fadeIn(200)

});

$('.menu').mouseleave(function () {

    $(this).find('.selectLine').fadeOut(200)

});

$('#about').click(function () {

    $('#verticalTitle').animate({left:'-30%'},2000);
    $('#menu').animate({top:'-10%'},2000);
    setTimeout(function () {

        window.location.replace('about.html')

    },1000)

});

$('#work').click(function () {

    $('#verticalTitle').animate({left:'-30%'},2000);
    $('#menu').animate({top:'-10%'},2000);
    setTimeout(function () {

        window.location.replace('work.html')

    },1000)

});