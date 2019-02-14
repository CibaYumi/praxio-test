(function () {
  'use strict';
  angular.module('FrontTest').directive('cardCarousel', function ($compile) {

    return function(scope, elem, a$trs){

      var card = $(elem).find('.my-card');
      var cardActive = $(elem).find('.active');
      var numCard = card.length;
      var even = numCard / 2;
      var odd = (numCard + 1) / 2;
      var slide = 0;

      if (numCard % 2 == 0) {
        $('.my-card:nth-child(' + even + ')').addClass('active');
        $('.my-card:nth-child(' + even + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + even + ')').next().addClass('next');
      } else {
        $('.my-card:nth-child(' + odd + ')').addClass('active');
        $('.my-card:nth-child(' + odd + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + odd + ')').next().addClass('next');
      }

      card.click(function() {
        slide = cardActive.width();
        if ($(this).hasClass('next')) {
          $('.card-carousel').stop().animate({left: '-=' + slide});
        } else if ($(this).hasClass('prev')) {
          $('.card-carousel').stop().animate({left: '+=' + slide});
        }
        $(this).removeClass('prev next');
        $(this).siblings().removeClass('prev active next');
        $(this).addClass('active');
        $(this).prev().addClass('prev');
        $(this).next().addClass('next');
      });

      $('html body #home .cards .container .card-carousel .my-car').keydown(function(e) {
        if (e.keyCode == 37) { // left
          cardActive.prev().trigger('click');
        }
        else if (e.keyCode == 39) { // right
          cardActive.next().trigger('click');
        }
      });
    };

  });
})();
