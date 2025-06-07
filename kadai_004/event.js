$(window).on("load", function(){
  console.log("loadイベントが発生しました");
});

$(function(){
  $(window).scroll(function(){
      console.log("scrollイベントが発生しました");
  });
});