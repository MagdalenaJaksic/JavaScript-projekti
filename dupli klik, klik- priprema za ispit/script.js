var heart=document.querySelector(".normal");
var broj=document.querySelector(".broj");
var br=0;
heart.addEventListener("dblclick",function () {

    heart.classList.remove("normal");
    heart.classList.add("liked");
    broj.innerText="1";


});
heart.addEventListener("click",function () {
  if(heart.classList.contains("liked")){

        heart.classList.remove("liked");
        heart.classList.add("normal");
        broj.innerText="0";

  }
})
