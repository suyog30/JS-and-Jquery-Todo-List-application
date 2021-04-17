window.onload = function(){

    $(document).ready(function(){

    $("#add").click(function () {
        $("#new").slideToggle();
    });
        

      $("#new").keypress(function(event){
           if(event.which === 13){
               $("ul").append('<li><span><i class="fa fa-trash"></i></span>' + $("#new").val() + '</li>');
               $("span").hide();
           }  
      });
  
      $("ul").on("click", "li", function(){
        $(this).toggleClass("done");
      });

    $("div.enterleave")
    .mouseenter(function () {
      $(this).css("border", "2px solid orange");
    })
    .mouseleave(function () {
      $(this).css("border", "0px");
    });
  
    $("span").hide();
    $("ul").on("mouseenter", "li", function () {
        $(this).find("span").show();
    });
    
    $("ul").on("click","span", function (e) {
    e.preventDefault();
    $(this).parent().remove();
    });

    $("ul").on("mouseleave", "li", function () {
    $(this).find("span").hide();
    });
  

   }); 
  
  
}


