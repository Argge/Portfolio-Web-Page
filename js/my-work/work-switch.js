const modellingBtn = document.getElementById("set-modelling-btn");
const editingBtn = document.getElementById("set-editing-btn");
const pixelartBtn = document.getElementById("set-pixelart-btn");

const worksSec = document.getElementById("works-section");

let checkStatus = {
    modelling: true,
    editing: false,
    pixelart: false
};

function switchAnimation() {
    const works = document.querySelectorAll(".work-block");
    const topics = document.querySelectorAll(".topic");

    let delay = 0;
    for (let i = 0; i < works.length; i++) {
        if (delay === 0) {
            works[i].style.transition = "0.5s ease-in-out";
            works[i].style.opacity = "0.2";
            setTimeout(() => {
                works[i].style.transition = "0.5s ease-in-out";
                works[i].style.transform = `translateY(1000px)`;
                topics[i].style.transition = "0.5s ease-in-out";
                topics[i].style.transform = `translateY(1000px)`;
            }, delay)
            delay += 1;
        }
        else {
            delay += 150;
            works[i].style.transition = "0.5s ease-in-out";
            works[i].style.opacity = "0.2";
            setTimeout(() => {
                works[i].style.transition = "0.5s ease-in-out";
                works[i].style.transform = `translateY(1000px)`;
                topics[i].style.transition = "0.5s ease-in-out";
                topics[i].style.transform = `translateY(1000px)`;
            }, delay)
        }
    }

    setTimeout(() => { worksSec.innerHTML = ""; }, 1000)
}

if (!checkStatus.modelling)
modellingBtn.addEventListener("click", () => switchAnimation());

if (!checkStatus.editing)
editingBtn.addEventListener("click", () => switchAnimation());

if (!checkStatus.pixelart)
pixelartBtn.addEventListener("click", () => switchAnimation());