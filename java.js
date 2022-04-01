$('.icon').on('mouseover', function() {
    $('.tooltip').addClass('tooltip-hover');
    $('.tooltip').removeClass('tooltip-out');
  });
  
  $('.icon').on('mouseout', function() {
    $('.tooltip').removeClass('tooltip-hover');
    $('.tooltip').addClass('tooltip-out');
  });