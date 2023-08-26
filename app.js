const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i *6}deg)">${char}</span>`
).join("")



const slideBot = document.querySelector('.slide');
const prevBtn = document.querySelector('.button-1');
const nextBtn = document.querySelector('.button-2');
let sliderIndex = 1;

function nextSlider() {
    sliderIndex = (sliderIndex + 1) % slideBot.childElementCount;
    updateSlidePosition();
}

function prevSlider() {
    sliderIndex = (sliderIndex - 1 + slideBot.childElementCount) % slideBot.childElementCount;
    updateSlidePosition();
}

function updateSlidePosition() {
    const offSet = -sliderIndex * slideBot.clientWidth;
    slideBot.style.transform = `translateX(${offSet * 0.20}px)`;
}

nextBtn.addEventListener('click', nextSlider);
prevBtn.addEventListener('click', prevSlider);

updateSlidePosition();


