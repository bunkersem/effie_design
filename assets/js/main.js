---
---

$(window).on('load', function () {
    $('.grid').masonry({
        itemSelector: '.grid-item',
    });

});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

var parsleyOptions = {
    successClass: "has-success",
    errorClass: "has-error",
    classHandler: function(el) {
        return el.$element.closest(".form-group");
    },
    errorsWrapper: "<span class='help-block'></span>",
    errorTemplate: "<span></span>"
};

// "aanmelden form" validation
// $(function () {
//     $('#aanmelden-form').parsley(parsleyOptions).on('field:validated', function () {
//         var ok = $('.has-error').length === 0;
//         $('.bs-callout-info').toggleClass('hidden', !ok);
//         $('.bs-callout-warning').toggleClass('hidden', ok);
//     })
//     .on('form:submit', function () {
//         return $('.has-error').length === 0; // submit if no error
//     });
// });


// nav sticky
$(document).ready(function(){
    $("#c-nav").sticky({topSpacing:0,zIndex:1000});
});


var $images = $($('#grid-variable-content').html()).find('img');

$('.work-grid .grid-item .inner').each(function(i) {
    $(this).css('background-image', 'url(' + $images.eq(i).attr('src') + ')');
});




// my lightbox

var $modal = $('#image-modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var $img = $('.lightbox-image, .lightbox-container img');
var $modalImg = $modal.find('#image-modal-image');
var $captionText = $modal.find('#image-modal-caption');
$img.on('click', function(){
    $modal.css('display', "block");
    $modalImg.get(0).src = $(this).attr('src') || $(this).css('background-image').match(/url\(["'](.+?)["']\)/)[1];
    $captionText.html(this.alt);
});

var $close = $modal.find('.close');

$close.on('click', function() { 
    $modal.css('display', "none");
});
