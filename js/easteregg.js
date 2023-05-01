const buttonEasterEgg = document.querySelector("main section#cloud article p a");
const croixEasterEgg = document.querySelector("main section#cloud article aside div span");
buttonEasterEgg.addEventListener("click", easteregg)
croixEasterEgg.addEventListener("click", closegg)
function easteregg(){
    document.querySelector("main section#cloud article aside").style.display = "block";
}
function closegg() {
    document.querySelector("main section#cloud article aside").style.display = "none";
}