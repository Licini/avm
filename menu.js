/**
 * Created by Li on 29/01/2018.
 */

$(document).ready(function () {

    setTimeout(function () {
        $('.load').fadeOut(500)
    },2000);


});



$('.titleContainer').click(function () {

    $('#menu').animate({top:'-10%'},2000);
    setTimeout(function () {

        window.location.replace('index.html')

    },1000)

});


$('.selectLine').each(function () {

    var thisLine = $(this);

    thisLine.show();
    thisLine.css({width:0});

    thisLine.parent().mouseenter(function () {

        // thisLine.fadeIn(200)
        thisLine.animate({width:'100%'},200)

    });


    thisLine.parent().mouseleave(function () {

        // thisLine.fadeOut(200)
        thisLine.animate({width:'0%'},200)

    });

});

function goto(url) {

    $('.load').fadeIn(500);
    $('.verticalTitle').animate({left:'-30%'},200);
    $('#menu').animate({top:'-10%'},1000);
    setTimeout(function () {

        window.location.replace(url)

    },1000)

}

$('.titleContainer').click(function () {

    goto('index.html')

});

$('#about').click(function () {

    goto('about.html')

});

$('#work').click(function () {

    goto('work.html')

});

$('#contact').click(function () {

    goto('contact.html')

});