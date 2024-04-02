/* Document   : ${name}
   Created on : ${date}, ${time}
   Author     : ${user} @eikonEMF
   Description: Yago Art Jquery
*/

$(document).ready(function(){

$(".boutonSec").each(function(){
    $(this).height($(this).height());
    $(this).hide();
})

$("li").hover(function(){
        $(this).find('.boutonSec').slideDown(500); // monter/descendre
    },function(){
        $(this).find('.boutonSec').slideUp(500);  // monter/descendre
});

// Menu survole*****************************************************************


$("#photo").hover(function(){
        $('#menu').addClass("photoOn");
        $('#menu').removeClass("photoOff");
    },function(){
        $('#menu').removeClass("photoOn");
        $('#menu').addClass("photoOff");
});

$("#graphic").hover(function(){
        $('#menu').addClass("graphicOn");
        $('#menu').removeClass("photoOff");
    },function(){
        $('#menu').removeClass("graphicOn");
        $('#menu').addClass("photoOff");
});

$("#dimension").hover(function(){
        $('#menu').addClass("dimensionOn");
        $('#menu').removeClass("photoOff");
    },function(){
        $('#menu').removeClass("dimensionOn");
        $('#menu').addClass("photoOff");
});

$("#dessin").hover(function(){
        $('#menu').addClass("dessinOn");
        $('#menu').removeClass("photoOff");
    },function(){
        $('#menu').removeClass("dessinOn");
        $('#menu').addClass("photoOff");
});

$("#video").hover(function(){
        $('#menu').addClass("videoOn");
        $('#menu').removeClass("photoOff");
    },function(){
        $('#menu').removeClass("videoOn");
        $('#menu').addClass("photoOff");
});

$("#cv").hover(function(){
        $('#menu').addClass("cvOn");
        $('#menu').removeClass("photoOff");
    },function(){
        $('#menu').removeClass("cvOn");
        $('#menu').addClass("photoOff");
});


//Menu actif********************************************************************


$('#photoActive').mouseover(function(){
        $('#menu').find('span').html('<img src="images/photo_active.png" alt="photo active" />');
});

$('#graphicActive').mouseover(function(){
        $('#menu').find('span').html('<img src="images/graphic_active.png" alt="grahpic active" />');
});

$('#dimActive').mouseover(function(){
        $('#menu').find('span').html('<img src="images/3d_active.png" alt="dim active" />');
});

$('#dessinActive').mouseover(function(){
        $('#menu').find('span').html('<img src="images/dessin_active.png" alt="dessin active" />');
});

$('#videoActive').mouseover(function(){
        $('#menu').find('span').html('<img src="images/video_active.png" alt="video active" />');
});

$('#cvActive').mouseover(function(){
        $('#menu').find('span').html('<img src="images/cv_active.png" alt="cv active" />');
});


//Feature list******************************************************************


$.featureList(
        $("#tabs li a"),
        $("#output li"), {
                start_item	:	1
        }
);


//Fancy box*********************************************************************


$("a.example_group").fancybox({
            'transitionIn'	:	'elastic',
            'transitionOut'	:	'elastic',
            'speedIn'           :	600,
            'speedOut'          :	200,
            'overlayShow'	:	false
    });


$("a.example_group, a.iframe").fancybox();

$('#sousNews').hide();
    $('h2').append('<span>+</span>');
    $('h2').css('cursor','pointer');
    $('h2').toggle(function(){
        $(this)
        $(this).parent().find('#sousNews').slideDown('500');
        $(this).find('span').html('-');
    },function(){
        $(this).parent().find('#sousNews').slideUp('500');
        $(this).find('span').html('+');
    });

})



