const button = document.getElementById('button1')
button.addEventListener('click', function() {
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

