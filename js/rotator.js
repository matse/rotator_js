// Rotator
// preload images
$(images).each(function() {
    $('<img />').attr('src', this);
});

function changeImage( source ) {
    $(document.start).fadeTo('slow',0, function() {
        $(this).eq(0).attr('src', source);
        $(this).fadeTo('slow', 1);
    });
}

function stopRotator(){
    clearInterval(interID);
}

function rotateImage() {
    var imageSource = $(document.start);
    var imagesLength = images.length - 1;
    for (var i = imagesLength; i >= 0; i--) {
        if (images[i] == imageSource.attr('src')) {
            changeImage(images[i == imagesLength ? 0 : i+1]);
            if (i == imagesLength) {
                stopRotator();
            }
            return;
        }
    }
}

