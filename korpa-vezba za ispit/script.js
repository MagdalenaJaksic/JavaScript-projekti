$(document).ready(function(){

    var data=[
        {
            "naziv":"banana",
            "kategorija":"voce",
            "opis":"banana je voce",
            "cena":200
        },
        {
            "naziv":"kupus",
            "kategorija":"povrce",
            "opis":"kupus je povrce",
            "cena":100
        },
        {
            "naziv":"zelje",
            "kategorija":"povrce",
            "opis":"zelje je povrce",
            "cena":150
        },
        {
            "naziv":"jabuka",
            "kategorija":"voce",
            "opis":"jabuka je voce",
            "cena":250
        },
    ];
    function addSerialNumber(index) {
      return index+1;
    }
    
    var proizvodi="";
    var kategorije="";
    data.forEach((proizvod,index) => {
        proizvodi+="<tr class='trw'><td>"+addSerialNumber(index)+"</td><td class='naziv'>"+proizvod.naziv+"</td><td class='kategorija'>"+proizvod.kategorija+"</td><td class='opis'>"+proizvod.opis+"</td><td class='cena'>"+proizvod.cena+"</td><td><button class='btn btn-primary dodaj'>dodaj</button></td></tr>";

        if(kategorije.indexOf("<option value='" + proizvod.kategorija + "'>" + proizvod.kategorija + "</option>") == -1){
            kategorije += "<option value='" + proizvod.kategorija + "'>" + proizvod.kategorija + "</option>";
        }
    });
    
    $(".nastanju").append(proizvodi);
    $("#kategorije").append(kategorije);

    $("#search").click(function(){
       var izabrano=$("#kategorije").val();
       console.log(izabrano);
         var itekst=$("#isearch").val();
       console.log(itekst);
       $(".trw").each(function(){
           $(this).hide();
        var kategorija = $(this).find("td").eq(2).text();
        var ime=$(this).find("td").eq(1).text();
        
          if(kategorija ==izabrano && ime.includes(itekst)){
              $(this).show();
          } else if(itekst==""&& kategorija==izabrano){
            $(this).show();
          } else if(izabrano=="all" && ime.includes(itekst)){
            $(this).show();
          } else if(izabrano=="all" && itekst==""){
$(this).show();
          }
       })
    })

        
            $(".dodaj").click(function (index) {
                var naziv = $(this).closest("tr").find(".naziv").text();
                var kategorija = $(this).closest("tr").find(".kategorija").text();
                var opis = $(this).closest("tr").find(".opis").text();
                var cena = $(this).closest("tr").find(".cena").text();
                var broj=$(".kupljeno tr").length;
                var rednibroj=broj+1;
                $(".kupljeno").append("<tr class='trw'><td>"+rednibroj+"</td><td class='naziv'>"+naziv+"</td><td class='kategorija'>"+kategorija+"</td><td class='opis'>"+opis+"</td><td class='cena'>"+cena+"</td><td><button class='btn btn-danger ukloni'>ukloni</button></td></tr>");
                updatecena();
            });
      $(".kupljeno").on("click",".ukloni", function(){
          $(this).closest("tr").remove();
          novibroj();
          updatecena();
      })
      function novibroj(){
$(".kupljeno tr").each(function(index){
$(this).find("td:first-child").text(index+1);
})
      }
      function updatecena(){
        var ukupnacena=0;
        $(".kupljeno tr").each(function(){
            var cena=parseFloat($(this).find(".cena").text());
           ukupnacena+=cena;
        })
        $(".ukupno").html('<td>Ukupno</td><td class="ukupnacena">'+ukupnacena+'</td>');
      }

$(".kupi").click(function(){
    var korpa=$(".kupljeno").find("tr .naziv").text();
    var ukupna=$(".ukupnacena").text();
    console.log(ukupna);
    $("tfoot").before("<div role='alert' class='alert alert-success'>kupljeno<br>Ukupna cena:"+ukupna+"<br>"+korpa+"</div>");
 
    $(".kupljeno").remove();
    $(".ukupno").remove();
})

    });