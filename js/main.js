$( document ).ready(function() {

    var speed = 100;
    var picIndex = 0;
    var picCount = 8;

    function drawImage() {
        $("#image-container").fadeOut(speed,function () {
            $(".thumb.active").removeClass('active');
            $(".thumb" + picIndex).addClass('active');
            // makeActive();
            $("#image-container").css('background-image', ('url(images/pic' + picIndex + '.jpg)'));
            $("#image-container").fadeIn();
        });
    }

    drawImage();

    $("#next").click(function(event){
        event.preventDefault();
        if (picIndex == 7) {
            picIndex = 0;
            drawImage();
        } else {
            picIndex++;
            drawImage();
        }
    });

    $("#prev").click(function(event){
        event.preventDefault();
        if (picIndex == 0) {
            picIndex = 7;
            drawImage();
        } else {
            picIndex--;
            drawImage();
        }
    });

    for (var i = 0; i <= picCount; i++) {
        $("#thumbs-container").append('<div data-index=' + i + ' class="thumb thumb' + i + '"></div>');
        $(".thumb" + i).css('background-image', ('url(images/pic' + i + '.jpg)'));
        if (i == 3) {
            $("#thumbs-container").append('<br>');
        }
    }
    $(".thumb0").addClass('active');
    $(".thumb").width(80).height(80);
    $(".thumb").css("display","inline-block").css("background-size","cover").css("margin-left","8px");

    // var makeActive = function () {
    //     $(".active").css("opacity","0.5");
    // };

    $(".thumb").on("click", function(){
        picIndex = $(this).data('index');
        drawImage();
    });


});

