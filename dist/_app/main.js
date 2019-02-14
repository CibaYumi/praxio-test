window.onscroll = function() {
  var navbar = $('#navbarMenu');
  if (document.body.scrollTop > 132 || document.documentElement.scrollTop > 132) {
    navbar.addClass('scrollBarAnimation');
  } else {
    navbar.removeClass('scrollBarAnimation');
  }
};
