$(document).ready(function(){

$(document).on("click",".submitBtn",function(){
    var x=parseInt($(".xInput").val());
    var y=parseInt($(".yInput").val());
    var brojac=1;
    var tableBody=$(".matricaContainer");
    tableBody.empty();
    for(var i=0;i<x;i++){
        var tr=$("<tr>");
     for(var j=0;j<y;j++){
         var td=$("<td>");
         var vrednost=brojac*brojac;
         td.text(vrednost);
         if(vrednost%3==0){
             td.css("font-weight","bold");
         }
         tr.append(td);
         brojac++;
     } 
     tableBody.append(tr);
     $(".submitBtn").text("reset").addClass("reset");
    }
    
    $("td").mouseenter(function(){
        $(this).css("cursor","pointer");
    });
    $("td").click(function(){
        var vrednostbroja=parseInt($(this).text());
        if(vrednostbroja %3 != 0){
            $(this).css("font-weight","bold");
        } else {
            $(this).text(vrednostbroja*vrednostbroja).css("color","red");
        }
    });
    $(document).on("click",".reset",function(){
        $(".matricaContainer").empty();
        $(".xInput").val("");
        $(".yInput").val("");
        $(".submitBtn").text("submit").removeClass("reset");
    })
});
});