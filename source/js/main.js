var button = document.querySelector(".pusheen");
var modal = document.querySelector(".pusheen__container");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.toggle("pusheen__container--on-click");
});
