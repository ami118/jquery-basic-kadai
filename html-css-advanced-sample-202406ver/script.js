$(function() {
  // マウスカーソルが「もっとみる」ボタンに重なると、「もっとみる」ボタンが右に移動して半透明になる
  // ボタンアニメーション
  $('.button-more').on('mouseover',function (){
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });
  // マウスカーソルがボタンから離れると、位置と不透明度が元に戻る
  $('.button-more').on('mouseout',function (){
    $(this).animate({
      opacity: 1,
      marginLeft: 0,
    }, 100);
  });

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });
	
  
});