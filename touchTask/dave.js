/**
 * Created by LIMBUSCORP on 8/12/15.
 */

window.addEventListener("load", function(){
    var section = $('.mnr-c');
    section.addClass('ui-widget-content');
    section.hammer().on("swipeleft swiperight", swipeHandler);
    function swipeHandler(ev){console.log(ev.type);
        console.log('distance: ' + ev.gesture.distance);
        console.log('delta x: ' + ev.gesture.deltaX);
        console.log('direction: ' + ev.gesture.direction);
    section.draggable({revert: true, axis: "x"});}

    $(".main").prepend("<div class='innerCarousel'></div>");
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: "500px",
            tagmode: "any",
            format: "json"
        },
        function (data) {
            var myJson = data;
            var lastItem = myJson.items.length;
            for (var i = 0; i < lastItem; i++) {
                $('.innerCarousel').append("<div><img src='" + myJson.items[i].media.m + "'/></div>");
            }
            var slide =  $('.innerCarousel');
            slide.slick({
                dots: false,
                infinite: false,
                speed: 100,
                slidesToShow: 1,
                centerMode: false,
                variableWidth: true,
                swipeToSlide:true,
                accessibility:false,
                arrows:false,
                mobileFirst:true,
                touchThreshold:10
            });
           slide.on('swipe', function(event, slick, direction){
                console.log(direction);
                           });
        });
}, true);




