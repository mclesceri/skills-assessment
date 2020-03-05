$('.table-striped tbody tr').on('click', function () {

    'use strict';
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');

    if ( $(this).hasClass('active') ) {

        $('.content').addClass('active');
        $('.content tr').addClass('removeborder');

    } else {

        $('.content').removeClass('active');
        $('.content tr').removeClass('removeborder');
    }
});

$('#ph-em').on('change', function() {
    var value = this.value;

    $('.item .content .email .' + value).removeClass('hide').siblings().addClass('hide');
        
});