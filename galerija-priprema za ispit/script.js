$(document).ready(function(){
var slike=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpeg"];
$("#overlay").hide();
for(var urls in slike){
  
    var url=slike[urls];
    var img=$("<img width='300' height='200' class='img'>").attr("src",url);
    $(".row").append(img);
}

$(".img").mouseenter(function(){
    $(this).addClass("hovers");
});
$(".img").mouseleave(function(){
    $(this).removeClass("hovers");
});
$(".img").click(function(){
    var clickedurl=$(this).attr("src");
    $("#overlay").show();
    $(".clickedImg").attr("src",clickedurl);
});


$(".clickedImg, #overlay").click(function(){
    $("#overlay").hide();
});












});