window.onscroll = function() {

  var navbar = $('#navbarMenu');
  if (document.body.scrollTop > 132 || document.documentElement.scrollTop > 132) {
    navbar.addClass('scrollBarAnimation');
  } else {
    navbar.removeClass('scrollBarAnimation');
  }

};

$(function () {
  $num = $('.my-card').length;
  $even = $num / 2;
  $odd = ($num + 1) / 2;

  if ($num % 2 == 0) {
    $('.my-card:nth-child(' + $even + ')').addClass('active');
    $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $even + ')').next().addClass('next');
  } else {
    $('.my-card:nth-child(' + $odd + ')').addClass('active');
    $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
  }

  $('.my-card').click(function() {
    $slide = $('.active').width();
    console.log($('.active').position().left);

    if ($(this).hasClass('next')) {
      $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
    } else if ($(this).hasClass('prev')) {
      $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
    }

    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');

    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
  });


  // Keyboard nav
  $('html body').keydown(function(e) {
    if (e.keyCode == 37) { // left
      $('.active').prev().trigger('click');
    }
    else if (e.keyCode == 39) { // right
      $('.active').next().trigger('click');
    }
  });
});

// $(document).ready(function(){
//   $('#phone').inputmask("(99) 9 9999-9999");
// });


// $(function () {
//
//   $(".field-wrapper .field-placeholder").on("click", function () {
//       $(this).closest(".field-wrapper").find("input").focus();
//   });
//   $(".field-wrapper input").on("keyup", function () {
//       var value = $.trim($(this).val());
//       if (value) {
//           $(this).closest(".field-wrapper").addClass("hasValue");
//       } else {
//           $(this).closest(".field-wrapper").removeClass("hasValue");
//       }
//   });
//
// });
