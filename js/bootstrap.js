$(function(){
  $("#footer").load("footer.html");
  $("#header").load("header.html", function(){
    $("#menupd li").hover(function() {
        $("ul:not(:animated)", this).slideDown();
    }, function() {
        $(this).children('ul').slideUp();
    });
  });
});
