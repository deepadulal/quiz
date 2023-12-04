$(document).ready(function(){
    $("button").click(function(){
      $("p").hide();
    });
  });
  
  $(document).ready(function(){
    var a = $(".question");
    a.each(function(index) {
      var flip = $(this).find(".flip");
      var panel = $(this).find(".panel");
      flip.click(function(){
        panel.slideDown("slow");
      });
    });
  });