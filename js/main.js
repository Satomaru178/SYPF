'use strict';
{
  $(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $('.menu-btn, #mask').on('click', function () {
      $('.menu-btn, #nav, #mask').toggleClass('open');
    });

    /*=================================================
    スムーススクロール
    ===================================================*/
    $('a[href^="#"]').click(function(){
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });

    /*=================================================
    スクロール後のヘッダーメニュー固定
    ===================================================*/
    var $win = $(window),
    $header = $('#header'),
    headerPos = $header.offset().top,
    fixedClass = 'fix';

    $win.on('load scroll', function () {
      var value = $(this).scrollTop();
      if (value > headerPos) {
        $header.addClass(fixedClass);
      } else {
        $header.removeClass(fixedClass);
      }
    });

    /*=================================================
    スクロール後のヘッダーメニュー変化
    ===================================================*/
    var $win = $(window),
      $header = $('#header'),
      $main = $('#main'),
      mainPos = $main.offset().top,
      changedClass = 'change';

    $win.on('load scroll', function () {
      var value = $(this).scrollTop();
      if (value > mainPos) {
        $header.addClass(changedClass);
      } else {
        $header.removeClass(changedClass);
      }
    });

    /*=================================================
    スライダー
    ===================================================*/
    // $('.slick-slider').slick({
    //   arrows: false,
    //   centerMode: true,
    //   centerPadding: '100px',
    //   slidesToShow: 3,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    //   responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         centerPadding: '50px',
    //         slidesToShow: 1
    //       }
    //     }
    //   ]
    // });

    /*=================================================
    フェードイン
    ===================================================*/
    // $(window).scroll(function (){
    //   $('.fadein').each(function(){
    //     var targetElement = $(this).offset().top;
    //     var scroll = $(window).scrollTop();
    //     var windowHeight = $(window).height();
    //     if (scroll > targetElement - windowHeight){
    //       $(this).css('opacity','1');
    //       $(this).css('transform','translateY(0)');
    //     }
    //   });
    // });
  });
}
