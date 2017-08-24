$(function(){
  $("#footer").load("footer.html");
  $("header.main").load("header.html", function(){
    $("#main-nav li").hover(function() {
        $("ul:not(:animated)", this).slideDown();
    }, function() {
        $(this).children('ul').slideUp();
    });
  });
});
