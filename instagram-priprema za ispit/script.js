$(document).ready(function(){
    var br=0;
    var numberofLikes=$(".likesNumber");//ovde je broj lajkova
    
    var postBtn=$(".postBtn");//dugme za dodavanje komentara
    var likeImg=$(".likeImg"); //kad se klikne lajkuje se
    var commentsContainer=$(".commentsContainer");//ovde idu divovi sa komentarima
$("#overlay").hide();
var mainPic=$(".mainImg");
    likeImg.click(function(){
     if(likeImg.attr("src")=="images/like.PNG"){
         br++;
         numberofLikes.text(br);
         likeImg.attr("src","images/liked.jpg");
         likeImg.css("width","30", "height","30");
     } else {
         br--;
         likeImg.attr("src","images/like.PNG");
         numberofLikes.text(br);
     }
    });

    postBtn.click(function(e){
        var inputComment=$(".inputComment").val();//ovde se unosi komentar
        console.log(inputComment);
        e.preventDefault();
  var commentDiv=$("<div class='commentDiv'>");
  commentDiv.text(inputComment);
  commentsContainer.append(commentDiv);
  $(".inputComment").val("");
    });
    mainPic.click(function(){
        $("#overlay").show();
        $(".overlayImg").attr("src","images/mainpic.jpg");
    });
    $("#overlay").click(function(){
       $("#overlay").hide(); 
    });
});