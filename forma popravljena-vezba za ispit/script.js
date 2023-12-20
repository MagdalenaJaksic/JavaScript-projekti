$(document).ready(function() {
    $(".ime").attr("placeholder", "Vase ime...");
    $(".prezime").attr("placeholder", "Vase prezime...");
    $("#utisci").attr("placeholder", "Vasi utisci...");
    
    var predmeti = ["E poslovanje", "Matematika", "Programiranje"];
    var selectOpt = $(".select-opt");
    selectOpt.hide();
    $("#overlay").hide();
    $(".prikazano").hide();
    for (var predmet of predmeti) {
        var opcija = $("<div class='option'>");
        opcija.text(predmet);
        selectOpt.append(opcija);
    }

    $(".select").click(function() {
        selectOpt.toggle();
        $("#overlay").show();
        
    });

    $(document).on("click", ".option", function() {
        var text = $(this).text();
        $(".select-text").text(text);
        selectOpt.hide();
        $("#overlay").hide();
    });
    $(".option").mouseenter(function(){
        $(this).addClass("hovers");
    });
    $(".option").mouseleave(function(){
        $(this).removeClass("hovers");
    });
    $(".btn").mouseenter(function(){
        $(this).addClass("btnhover");
    });
    $(".btn").mouseleave(function(){
        $(this).removeClass("btnhover");
    });
    $("#prikazi").click(function(e){
        e.preventDefault();
        $(".prikazano").show();
        var ime=$(".ime").val();
        var prezime=$(".prezime").val();
        var predmet=$(".select-text").text();
        var utisci=$("#utisci").val();
        if(ime !="" && prezime !="" && predmet != "" && utisci != ""){
        var info="<div class='info'>Ime: "+ime+"<br>Prezime: "+prezime+"<br>Predmet: "+predmet+"<br>Utisci: "+utisci+"</div>";
        $(".prikazano").append(info);
        } else {
            var greska="<div role='alert' class='alert alert-danger'>niste uneli sve informacije</div>";
            $(".prikazano").append(greska);
        }
    });
});