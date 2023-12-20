$(document).ready(function(){
    $(".moduo2, .moduo3, .moduomanage").hide();

    $("#newRecipeBtn").click(function(e){
        e.preventDefault();
        $("main").hide();
        $(".moduo3").show();
    });

    $("#saveBtn").click(function(e){
        
        e.preventDefault();
        var nameRecipe=$(".nameRecipe").val();
        var recipe=$(".recipe").val();
        
        
        var card="";
        card += "<div class='card'><div class='card-header'><div class='card-title'>"+nameRecipe+"</div></div><div class='card-body'>"+recipe+"</div><div class='card-footer'><button class='btn btn-primary' id='manageRecipeBtn'>Manage recipe</button></div></div>";
        $(".card-container").append(card);
        $(".moduo3").hide();
        $("main").show();

    });

    $("#shoppingBtn").click(function(e){
        e.preventDefault();
        $("main").hide();
        $(".moduo2").show();
        $(this).addClass("active");
        $("#recipesBtn").removeClass("active");
        

    });
    $("#recipesBtn").click(function(e){
        e.preventDefault();
        $("main").show();
        $(".moduo2").hide();
        $(this).addClass("active");
        $("#shoppingBtn").removeClass("active");
        

    });
    $("#addBtn").click(function(e){
        e.preventDefault();
        var name=$(".nameInput").val();
        var amount=$(".amountInput").val();
        var row="";
        row +="<tr><td>"+name+"</td><td>"+amount+"</td></tr>";
        $(".tbody").append(row);
        $(".nameInput").val("");
        $(".amountInput").val("");
        
    });
    $("#deleteBtn").click(function(e){
        e.preventDefault();
        $(".tbody").find("*").remove();
    });
  $(document).on("click","#manageRecipeBtn", function(e){
e.preventDefault();
var card=$(this).closest(".card");
var nameRecipe=card.find(".card-title").text();
var recipe=card.find(".card-body").text();

$(".nameRecipeManage").val(nameRecipe);
$(".recipeManage").val(recipe);
$(".moduomanage").data("managedCard",card);
$(".moduomanage").show();
$("main").hide();
  });

  $(document).on("click","#saveBtnManage",function(e){
      e.preventDefault();
      var updatedName=$(".nameRecipeManage").val();
      var updatedRecipe=$(".recipeManage").val();

      var card=$(".moduomanage").data("managedCard");
      card.find(".card-title").text(updatedName);
      card.find(".card-body").text(updatedRecipe);
      $(".moduomanage").hide();
      $("main").show();

  });
});