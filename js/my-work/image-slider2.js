const images = Array.from(document.querySelectorAll(".image-work"));
const slideLeft = document.getElementById("slide-left");
const slideRight = document.getElementById("slide-right");

let currentIndex = 0;
let offset = 650;
let step = 650;

let check = false;
images.forEach((image, i) => {
    image.addEventListener("click", () => {
        if (currentIndex === i) {
            check = !check;
            images[currentIndex].style.zIndex = 1;
            images[currentIndex].style.transform = `translateX(${offset}px) scale(${check ? 2 : 1.2})`;
            if (check) images[currentIndex].style.cursor = "zoom-out";
        }
    });
});

updateSlider();

slideRight.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
    offset -= step;
    updateSlider();
});

slideLeft.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length - 1;
    offset += step;
    updateSlider(); 
});

function updateSlider() {
    check = false;

    images.forEach((image, i) => {
        image.style.transition = "1s";
        image.style.transform = `translateX(${offset}px) scale(${i === currentIndex ? 1.2 : 1})`;
        image.style.margin = "0 40px 0 40px";
    });

    if (offset < -650) {
        offset = 650;
        setTimeout(() => {
            images.forEach((image, i) => {
                image.style.transition = "none";
                image.style.transform = `translateX(${offset}px) scale(${i === currentIndex ? 1.2 : 1})`;
                image.style.margin = "0 40px 0 40px";
            });
        }, 10);
    }
    else if (offset > 650) {
        offset = -650;
        setTimeout(() => {
            images.forEach((image, i) => {
                image.style.transition = "none";
                image.style.transform = `translateX(${offset}px) scale(${i === currentIndex ? 1.2 : 1})`;
                image.style.margin = "0 40px 0 40px";
            });
        }, 10);
    }
}

addEventListener("")