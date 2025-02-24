
const padlOrel = Math.random() < 0.5;

const vysledekEl = document.querySelector(".vysledek");
const minceElement = document.querySelector('.mince');

if(padlOrel){
    vysledekEl.textContent = "Padl orel";
    minceElement.classList.add('mince--orel');
} else {
    vysledekEl.textContent= "Padla panna";
    minceElement.classList.add('mince--panna');
} 



