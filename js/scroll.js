$(function(){
  $('html, body').hide();
  // URLのアンカー（#以降の部分）を取得
  var urlHash = location.hash;
  var offset = 0;
  // URLにアンカーが存在する場合
  if(urlHash){
    $('html, body').show();
    var speed = 500;
    var position = $(urlHash).offset().top - offset;
    $("html, body").animate({scrollTop:position}, speed, "swing");
  }
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - offset;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
  $('html, body').show();
});
