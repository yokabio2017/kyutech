
$(function(){

  $('.shutter').css("display", "none");

  var selecter = "#header";
  var bt = $("#header").offset().top; // boxのページ上からの距離を取得
  var ds = 0;

  $(document).scroll(function(){ // スクロール発生時の処理の記述を開始
      ds = $(this).scrollTop(); // ユーザのスクロールした距離を取得

      if (bt <= ds) {  // スクロール距離がboxの位置を超えたら、
          $("#header").addClass('follow'); // 「follow」というclassを追加する
      } else if (bt >= ds) { // スクロールがページ上まで戻ったら、
          $("#header").removeClass('follow'); // classを削除

      }
  });

  $('.trigger').click(function(){
    var id = $(this).attr("to");
    selecter = '#' + id;
    var w = $(window).width();
    $('.shutter-y').animate({top:$(selecter).offset().top + $(selecter).height()}, 500);
    //$('html,body').animate({scrollTop:$(select).offset().top - $('#header').height()}, 200);

  });

});
