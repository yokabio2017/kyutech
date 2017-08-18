$(function(){

  var at = $(".agenda").offset().top; // boxのページ上からの距離を取得

  var ds =　0;

  $(document).scroll(function(){ // スクロール発生時の処理の記述を開始
    ds = $(this).scrollTop(); // ユーザのスクロールした距離を取得

    if (at <= ds) {  // スクロール距離がboxの位置を超えたら、
        $(".agenda").addClass('followAgenda'); // 「follow」というclassを追加する
        $(".agenda").css('top', $("#header").height());
    } else if (at >= ds) { // スクロールがページ上まで戻ったら、
        $(".agenda").css('top', '');
        $(".agenda").removeClass('followAgenda'); // classを削除

    }
  });

});
