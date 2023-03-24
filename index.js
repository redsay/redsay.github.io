var carouselWidth = $('#reviews .carousel-inner')[0].scrollWidth;
var cardWidth = $('#reviews .carouseel-item').width();

var scrollPosition = 0;

$('#reviews .carousel-control-next').on('click', function(){
    if(scrollPosition < (carouselWidth-(cardWidth*4))){
        console.log('next')
        scrollPosition = scrollPosition + cardWidth
        $('#reviews .carousel-inner').animate({scrollLeft: scrollPosition},600);
}
});
