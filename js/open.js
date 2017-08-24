
$(function(){


  //$("#d_Member").load('./member.html');


  var isOpen = false;
  /*
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
  */

  function close(){

    //閉じる対象をサーチ
    var opened_shutter = $('[stat="opened"]');

    //シャッター閉じ中は(z-index:1003)
    opened_shutter.css("z-index", "1003");


    var dir = opened_shutter.attr("dir");
    switch(dir){
      case "right":
        opened_shutter.css({transform: 'translate(0px, 0px)'}, 800);
      break;
      case "left":
        opened_shutter.css({transform: 'translate(0px, 0px)'}, 800);
      break;

    }

    //シャッターが閉じ終わった時に呼ばれる
    opened_shutter.on('transitionend', function(){
       //閉じた状態(通常状態)のシャッターは(z-index:1000)
       opened_shutter.css("z-index", "1000");
       /*
       開き終わった後と閉じた後に実行する処理を分けたいのでその都度イベントを消去
       */
       opened_shutter.off('transitionend');
    });
    isOpen = false;
    opened_shutter.attr("stat", "closed");

  }

  function open(shutter, url){
    //開いたり閉じたりするときのレイヤーの調整
    if($('[stat="opened"]').length){
        shutter.css("z-index", "1004");
        close();
    } else {
        shutter.css("z-index", "1002");
    }

    var dir = shutter.attr("dir");
    switch(dir){
      case "right":
        //shutter.animate({'left': shutter.width() + 'px'},400);
        shutter.css({transform: 'translate('+ shutter.width() + 'px, 0px)'}, 800);
      break;
      case "left":
        //shutter.animate({'right': shutter.width() + 'px'},400);
        shutter.css({transform: 'translate( -'+ shutter.width() + 'px, 0px)'}, 800);
      break;
    }
    shutter.children('img').css('display', 'inline');
    //シャッターが開き終わった時に呼ばれる
    shutter.on('transitionend', function(){
       //開いた状態のシャッターは(z-index:1001)
       shutter.css("z-index", "1001");
       /*
       開き終わった後と閉じた後に実行する処理を分けたいのでその都度イベントを消去
       */
       setTimeout(function(){
      		window.location.href = url;
        },500);

       shutter.off('transitionend');

    });
    //$('html,body').animate({scrollTop:$("#title").offset().top + $("#title").height()}, 200);
    shutter.attr("stat", "opened");
  }

  /*
  $('.trigger').click(function(){
    if(isOpen){
      return;
    }
    isOpen = true;

    //if($(this).attr("stat") == "opened"){
      //close();
    //  return;
    //}


    var id = $(this).attr("to");
    var select = '#' + id;
    var url = $(this).attr("goto");
    //$(this).attr("stat", "opened");
    $("html,body").animate({scrollTop:$('#container').offset().top - $("#header").height() * 2}, 300, function(){
      open($(select), $(this), url);
    });
  });
  */
  $('.shutter').click(function(){

    var id = $(this).attr("id");
    var url = $(this).attr("to");
    if($(this).attr("stat") == "opened"){
      close();
      return;
    }
    $(this).attr("stat", "opened");
    if(isOpen){
      return;
    }
    isOpen = true;
    open($(this), url);



  });

  /*
  $( ".dialog" ).dialog({
　　　	autoOpen: false,
　　　	modal: true,
      draggable: false,
      width: "90%",
      height: 500,
      dialogClass: 'noTitleDialog',

　　　	buttons: {
　　　　	"CLOSE": function(){
          $(this).dialog('close');
          close();
　　　　	}
      },
      open: function(){
        $("body").css("overflow", "hidden");
        $(".ui-dialog-titlebar-close").hide();
      },
      close: function(){
        $("body").css("overflow", "auto");
      }

  });
  $( document ).on( "click", ".ui-widget-overlay", function(){
      $(this).prev().find(".ui-dialog-content").dialog("close");
      close();
  } );
*/

});
