const imgs=document.querySelectorAll(".imgs");
const overl=document.querySelector(".overlay");
const fullImg=document.querySelector(".fullImg");

for(let i=0;i<imgs.length;i++){
  imgs[i].addEventListener("mouseenter",function () {
    imgs[i].classList.add("effect");
  })
  imgs[i].addEventListener("mouseleave",function () {
    imgs[i].classList.remove("effect");
  })
  imgs[i].addEventListener("click",function () {
    overl.classList.remove("hidden");
    fullImg.classList.remove("hidden");
    fullImg.src=this.src;
  }

)

}
function hide() {
  overl.classList.add("hidden");
  fullImg.classList.add("hidden");
}
overl.addEventListener("click",hide);
fullImg.addEventListener("click",hide);
