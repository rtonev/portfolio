function showPhotoGallery(galleryNumber) {
    var pswpElement = document.querySelectorAll('.pswp')[galleryNumber];

// build items array
    var items = [
        {
            src: '../images/vs3/scenario_1.png',
            w: 1265,
            h: 1650
        },
        {
            src: '../images/vs3/scenario_2.png',
            w: 1265,
            h: 1650
        },
        {
            src: '../images/vs3/scenario_3.png',
            w: 1265,
            h: 1650
        },
        {
            src: '../images/vs3/scenario_4.png',
            w: 1265,
            h: 1650
        },
        {
            src: '../images/vs3/scenario_5.png',
            w: 1265,
            h: 1650
        },
        {
            src: '../images/vs3/scenario_6.png',
            w: 1265,
            h: 1650
        },
        {
            src: '../images/vs3/scenario_7.png',
            w: 1265,
            h: 1650
        },
        {
            src: '../images/vs3/scenario_8.png',
            w: 1265,
            h: 1650
        }
    ];

// define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

// Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

$(function() {
    new PhotoSwipe();
    $('#scenariosGallery').click(function() {
        showPhotoGallery(0);
    });
});