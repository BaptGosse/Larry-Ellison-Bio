let currentSlide = 0;
const paragraphes = document.querySelectorAll("main section#whois article div p");
function leftButton() {
    currentSlide -= 1;
    if(currentSlide<0){
        currentSlide = paragraphes.length-1;
    }
    paragraphes.forEach(paragraphe => {
        paragraphe.style.transform = `translateX(-${currentSlide * 100}%)`
    });
}
function rightButton() {
    currentSlide += 1;
    if(currentSlide>=paragraphes.length){
        currentSlide = 0;
    }
    paragraphes.forEach(paragraphe => {
        paragraphe.style.transform = `translateX(-${currentSlide * 100}%)`
    });
}