
document.getElementById('button1').addEventListener('click', function() {
    window.scrollTo({
      top: 800,
      behavior: 'smooth'
    });
  });
const display_text = document.getElementById("display_text")
const wrong_answer = document.getElementById("wrong_answer")
let is_answer_correct= false
function checkCity(city){
    if(is_answer_correct===false){
    if(city.id === "rome_button"){
        display_text.style.display = "block"
        is_answer_correct = true
        wrong_answer.style.display = "none"
    }
    else{
        wrong_answer.style.display = "block"
    }
}
}
const preloader = document.getElementById("preloader")
window.addEventListener('load', fullyLoaded)
function fullyLoaded(){
  preloader.style.display = "none"
}
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(n > slides.length) {
    slideIndex = 1
  }
  if(n < 1) {
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
