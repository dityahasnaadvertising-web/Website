// ======================
// NAVBAR SCROLL EFFECT
// ======================
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.background = "rgba(40,40,40,0.95)";
    nav.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  } else {
    nav.style.background = "rgba(71,71,71,0.92)";
    nav.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
  }
});

// ======================
// ANIMASI PRODUK
// ======================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".produk").forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// ======================
// BACK TO TOP BUTTON
// ======================
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ======================
// POPUP GAMBAR PRODUK
// ======================

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const images = document.querySelectorAll(".produk img");
const closeBtn = document.querySelector(".close");

images.forEach((img) => {

  img.addEventListener("click", function () {

    popup.style.display = "block";
    popupImg.src = this.src;

  });

});

// tombol close
closeBtn.addEventListener("click", function () {

  popup.style.display = "none";

});

// klik luar gambar
popup.addEventListener("click", function (e) {

  if (e.target === popup) {
    popup.style.display = "none";
  }

});

// ======================
// SEARCH PRODUK
// ======================

const search = document.getElementById("search");

search.addEventListener("keyup", function(){

  const keyword = search.value.toLowerCase();

  const produk = document.querySelectorAll(".produk");

  produk.forEach((item)=>{

    const text = item.innerText.toLowerCase();

    if(text.includes(keyword)){
      item.style.display = "block";
    }else{
      item.style.display = "none";
    }

  });

});

// ======================
// LOADING SCREEN
// ======================

window.addEventListener("load", function(){

  const loader = document.getElementById("loader");

  loader.style.opacity = "0";

  setTimeout(() => {

    loader.style.display = "none";

  }, 500);

});

// ======================
// DARK MODE
// ======================

const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", function(){

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    darkBtn.innerHTML = "☀️";
  }else{
    darkBtn.innerHTML = "🌙";
  }

});