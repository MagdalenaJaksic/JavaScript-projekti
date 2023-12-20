$(document).ready(function(){
    $("img").on("mouseenter",function(){
        $(this).css("opacity","0.4");
    })
    $("img").on("mouseout",function(){
        $(this).css("opacity","1");
    })
    $("#contact").on("click",function(e){
        
        $(this).attr("href","contact.html");
        
    });
    $("img").on("click",function(){
       
    })

  /*  $("#btn").on("click",function(e){
e.preventDefault();
      const email=$("#email").val();
      const name=$("name").val();
      const txt=$("#txt").val();

      $.ajax({
          url:"slanje.php",
          method:"POST",
          data:{
              email:email,
              name:name,
              txt:txt
          },
          success: function(){
              alert("poslato");
            },
            error: function(){
                alert("nije poslato");
            }
      })
    });*/
})