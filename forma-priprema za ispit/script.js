const select=document.querySelector(".select");//polje
const containerOpt=document.querySelector(".select-opt");//kontejner sa opcijama
const options=document.querySelectorAll(".option");
const txt=document.querySelector(".select-selected");
const btn=document.getElementById("prikazi");//dugme
const ime=document.getElementById("ime");
const prezime=document.getElementById("prezime");
const utisci=document.getElementById("utisci");
const sadrzaj=document.querySelector(".sadrzaj");

select.addEventListener("click",function(){
  containerOpt.classList.remove("hidden");
  options.forEach(option => {
    option.addEventListener("mouseenter",function(event){
      option.classList.add("hover");
  
    })
  });
  options.forEach(option => {
    option.addEventListener("mouseout",function(event){
      option.classList.remove("hover");
  
    })
  });
})
options.forEach(option => {
  option.addEventListener("click",function(event){
    event.stopPropagation();
    containerOpt.classList.add("hidden");
    txt.innerText=this.innerText;

  })
});

  btn.addEventListener("mouseenter",function(event){
    btn.classList.add("btncolor");

  })

  btn.addEventListener("mouseout",function(event){
    btn.classList.remove("btncolor");

  })
btn.addEventListener("click",function(event){
  event.preventDefault();
  sadrzaj.innerHTML="<p>"+ime.value+"<br>"+prezime.value+"<br>"+utisci.value+"<br>"+txt.innerText+"</p>";

})