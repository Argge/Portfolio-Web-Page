const slider = document.getElementById("slider")
const imageLeft = document.getElementById("image-work-left");
const imageMidle = document.getElementById("image-work-midle");
const imageRight = document.getElementById("image-work-right");
const slideLeft = document.getElementById("slide-left");
const slideRight = document.getElementById("slide-right");

let leftIndex = 1;
let midleIndex = 2;
let rightIndex = 3;

const worksGallary = {
    modelling: {
        work1: {
            1: "../../../img/work-preview/3d/work_1/render_4_compose.png",
            2: "../../../img/work-preview/3d/work_1/render_2_compose.png",
            3: "../../../img/work-preview/3d/work_1/render_3_compose.png"
            },
        work3: {
            1: "../../../img/work-preview/3d/work_3/container_render_2.png",
            2: "../../../img/work-preview/3d/work_3/container_render_3.png",
            3: "../../../img/work-preview/3d/work_3/container_render_4.png",
            4: "../../../img/work-preview/3d/work_3/container_render_5.png",
        }
    }
};

const classes = Array.from(slider.classList);
const categoryName = classes.find(className => worksGallary[className]);
const workName = classes.find(className => worksGallary[categoryName]?.[className]);

slideRight.addEventListener("click", () => {
    slideAnimation();

    const workArr = Object.keys(worksGallary[categoryName][workName]);
    const work = worksGallary[categoryName][workName];

    leftIndex = (leftIndex % workArr.length) + 1;
    midleIndex = (midleIndex % workArr.length) + 1;
    rightIndex = (rightIndex % workArr.length) + 1;

    imageLeft.src = work[leftIndex];
    imageMidle.src = work[midleIndex];
    imageRight.src = work[rightIndex];
});

slideLeft.addEventListener("click", () => {
    slideAnimation();

    const workArr = Object.keys(worksGallary[categoryName][workName]);
    const work = worksGallary[categoryName][workName];

    leftIndex = (leftIndex - 2 + workArr.length) % workArr.length + 1;
    midleIndex = (midleIndex - 2 + workArr.length) % workArr.length + 1;
    rightIndex = (rightIndex - 2 + workArr.length) % workArr.length + 1;

    imageLeft.src = work[leftIndex];
    imageMidle.src = work[midleIndex];
    imageRight.src = work[rightIndex];
});

function slideAnimation() {
    imageMidle.style.transition = "0.1s";
    imageMidle.style.filter = "brightness(0.5)";
    setTimeout(() => {
        imageMidle.style.filter = "brightness(1)";
        imageMidle.style.transition = "0.5s";
    }, 100);
}