$(function () {
  $('#modal_open').click(function () {
    $('#modal').fadeIn();
  });
  $('#modal_close , #modal_bg').click(function () {
    $('#modal').fadeOut();
  });
  $('#sidenav_toggle').click(function () {
    $('.main--2col').toggleClass('active');
  });
});