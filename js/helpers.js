$( document ).ready(function() {
    //Sticky nav
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700, 'swing');
    });
    //Scroll-to request form
    $('.form-jumper').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('.form-anchor').offset().top
        }, 700, 'swing');
        return false;
    });

// Show search form in header on mobile
    $('.search-icon').click(function() {

    });

// Show ROI Calculations on homepage
    $('#show-money').click(function (event) {
        event.preventDefault();
        $('.roi-results').slideToggle();
    });

    // if fleet size select has a value of x, then show image x
    var fleetSelect = $('#fleet-size select');
    var fleetImage = $('#fleet-size img');

    fleetSelect.change(function () {
        fleetImage.attr('src', '/mobi-website/img/fleet-' + $(this).val() + '.png');
    });

    // if industry select has a value of x, then show image x
    var industrySelect = $('#industry select');
    var industryImage = $('#industry img');

    industrySelect.change(function () {
        industryImage.attr('src', '/mobi-website/img/' + $(this).val() + '-weeble.png');
    });

    // clicking on solutions toggles the dropdown
    var solutionsTab = $('li.solutions');
    var dropDown = $('.nav-dropdown');

    solutionsTab.click(function() {
        dropDown.slideToggle();
        $(this).toggleClass('selected');
    })

    // Form toggle
    var demoForm = $('#demo-form');
    var quoteForm = $('#quote-form');

    $('input[type="radio"]').click(function() {
        quoteForm.toggle();
        demoForm.toggle();
    });
});
