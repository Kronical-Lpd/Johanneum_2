const bg = document.getElementById('header');
window.addEventListener('scroll', function() {
  bg.style.backgroundSize = 180 - +this.window.pageYOffset/10+'%';
  bg.style.opacity = 1 - +this.window.pageYOffset/1000+'';
});

const bg2 = document.getElementById('seccion');
window.addEventListener('scroll', function() {
  bg2.style.backgroundSize = 100 + -this.window.pageYOffset/-20+'%';
});

const bg3 = document.getElementById('seccion2');
window.addEventListener('scroll', function() {
  bg3.style.backgroundSize = 80 - +this.window.pageYOffset/-50+'%';
});

const cardClick = document.getElementById("card_main-info-title");
  function cardClicked() {
    window.location.href = "NeueWebsite.html";
  }