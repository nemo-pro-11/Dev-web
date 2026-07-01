const buy = document.querySelectorAll(".js-buy");
const bigCont = document.getElementById("big");
const Cbuy = document.getElementById("Cbuy");
const cont = document.getElementsByClassName("cont")[0];
// const par = document.getElementsByClassName("cont")[1];
const mode = document.getElementsByClassName("mode")[0]
const body = document.getElementsByTagName("body")[0]
const Add = document.querySelector(".Add")
const secCord = document.querySelector(".sec-card")


Add.addEventListener("click" , (eo) => {
  const AddE = `
  
  
          <div class="card myCard" style="width: 18rem;">
          <img src="/img/amg_1.webp" class="card-img-top" alt="card">
          <div class="card-body">
            <h4 class="card-title">BMW F16</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" id="buy" class="js-buy btn btn-primary">Buy</a>
          </div>
        </div>
  `

  secCord.innerHTML += AddE
  
})
secCord.addEventListener("click" , (eo) => {
    if (eo.target.className == "js-buy btn btn-primary"){
        bigCont.style.display = "block";
        cont.style.display = "block";
        eo.preventDefault();
}
})



// Cbuy.addEventListener("click", (eo) => {
//   cont.style.display = "none";
//   eo.preventDefault();
//   par.style.display = "block";
//   setTimeout((e0) => {
//     par.style.display = "none";
//     bigCont.style.display = "none";
    
//   }, 2000);
// });





const par = document.querySelectorAll(".par");

mode.addEventListener("click" , (eo) => {
    body.classList.toggle("dark")
})


 
Cbuy.addEventListener("click", (eo) => {
  eo.preventDefault();

  cont.style.display = "none";

  // اخفى كل الرسائل الاول
  par.forEach(item => {
    item.style.display = "none";
  });

  // اختار رسالة عشوائية
  const randomIndex = Math.floor(Math.random() * par.length);

  par[randomIndex].style.display = "block";

  setTimeout(() => {
    par[randomIndex].style.display = "none";
    bigCont.style.display = "none";
  }, 3000);
});





