const modellingBtn = document.getElementById("set-modelling-btn");
const editingBtn = document.getElementById("set-editing-btn");
const pixelartBtn = document.getElementById("set-pixelart-btn");

const worksSec = document.getElementById("works-section");

function animateDown(elements) {
    let delay = 0;
    for (let i = 0; i < elements.length; i++) {
        if (delay === 0) {
            elements[i].style.transition = "0.5s ease-in-out";
            elements[i].style.opacity = "0.2";
            setTimeout(() => {
                elements[i].style.transition = "0.5s ease-in-out";
                elements[i].style.transform = `translateY(1000px)`;
            }, delay);
            delay += 1;
        }
        else {
            delay += 150;
            elements[i].style.transition = "0.5s ease-in-out";
            elements[i].style.opacity = "0.2";
            setTimeout(() => {
                elements[i].style.transition = "0.5s ease-in-out";
                elements[i].style.transform = `translateY(1000px)`;
            }, delay);
        }
    }

    setTimeout(() => { worksSec.innerHTML = ""; }, 1000);
}

function animateUp(elements) {
    let delay = 0;
    for (let i = 0; i < elements.length; i++) {
        if (delay === 0) {
            elements[i].style.transition = "0.5s ease-in-out";
            elements[i].style.transform = `translateY(1000px)`;
            elements[i].style.opacity = "0.2";
            setTimeout(() => {
                elements[i].style.transition = "0.15s";
                elements[i].style.transform = `translateY(0px)`;
                elements[i].style.opacity = "1";
            }, delay);
            delay += 1;
        }
        else {
            delay += 150;
            elements[i].style.transition = "0.5s ease-in-out";
            elements[i].style.transform = `translateY(1000px)`;
            elements[i].style.opacity = "0.2";
            setTimeout(() => {
                elements[i].style.transition = "0.15s";
                elements[i].style.transform = `translateY(0px)`;
                elements[i].style.opacity = "1";
            }, delay);
        }
    }
}

function switchDown() {
    animateDown(document.querySelectorAll(".work-block"));
    animateDown(document.querySelectorAll(".topic"));

}

function switchUp() {
    animateUp(document.querySelectorAll(".work-block"));
    animateUp(document.querySelectorAll(".topic"));
}

modellingBtn.addEventListener("click", () => {
    switchDown();
    setTimeout(() => {
        const topic1 = new TopicBlock("HARD SURFACE");
        topic1.Create();

        const line1 = document.createElement("line");
        line1.classList.add("line");
        worksSec.appendChild(line1);

        const work1 = new WorkBlock (
            line1,
            "./works/modelling/work-1.html",
            "../img/work-preview/3d/work_1/render_2_compose.png",
            "SCI-FI Tank", 
            "High Poly (Bevel + Subdiv)"
        );
        work1.Create();

        const work2 = new WorkBlock(
            line1, 
            "./works/modelling/work-2.html", 
            "../img/work-preview/3d/work_2/render_1_compose.png", 
            `Treshhold "The 6th test"`, 
            "High Poly (Bevel + Subdiv), Low Poly"
        );
        work2.Create();

        const work3 = new WorkBlock(
            line1, 
            "./works/modelling/work-3.html", 
            "../img/work-preview/3d/work_3/container_render_2.png", 
            "Container", 
            "High Poly (Bevel + Subdiv), Low Poly, UV"
        );
        work3.Create();

        const topic2 = new TopicBlock("STYLIZED LOW POLY");
        topic2.Create();

        const line2 = document.createElement("line");
        line2.classList.add("line");
        worksSec.appendChild(line2);

        const work4 = new WorkBlock (
            line2,
            "./works/modelling/work-4.html",
            "../img/work-preview/3d/candle_world_render_2.png",
            "Sweet world", 
            "Low Poly, UV, Baking, Textured"
        );
        work4.Create();

        const work5 = new WorkBlock(
            line2, 
            "./works/modelling/work-5.html", 
            "../img/work-preview/3d/psx.png", 
            "PSX Props", 
            "Low Poly, UV, Baking, Textured"
        );
        work5.Create();

        setTimeout(() => switchUp(), 100);
    }, 1000);
});

editingBtn.addEventListener("click", () => {
    switchDown();
    setTimeout(() => {
        const topic1 = new TopicBlock("REAL LIFE");
        topic1.Create();

        const line1 = document.createElement("line");
        line1.classList.add("line");
        worksSec.appendChild(line1);


        const work1 = new WorkBlock(
            line1,
            "./works/modelling/work-1.html", 
            "../img/work-preview/editing/work_1/preview_1.png", 
            "LUMBERJACK | Skeatboarding edit", 
            "test"
        );
        work1.Create();

        const work2 = new WorkBlock(
            line1, 
            "#", 
            "../img/work-preview/soon.png", 
            "Corvette C5 | Edit", 
            "soon"
        );
        work2.Create();

        const work3 = new WorkBlock(
            line1, 
            "#", 
            "../img/work-preview/soon.png", 
            "Infiniti g37s drift | Edit", 
            "soon"
        );
        work3.Create();

        setTimeout(() => switchUp(), 100);
    }, 1000);
});

pixelartBtn.addEventListener("click", () => {
    switchDown();
    setTimeout(() => {
        const topic1 = new TopicBlock("MILITARY");
        topic1.Create();

        const line1 = document.createElement("line");
        line1.classList.add("line");
        worksSec.appendChild(line1);


        const work1 = new WorkBlock(line1, "#", "../img/work-preview/soon.png", "soon", "soon");
        work1.Create();

        const work2 = new WorkBlock(line1, "#", "../img/work-preview/soon.png", "soon", "soon");
        work2.Create();

        const work3 = new WorkBlock(line1, "#", "../img/work-preview/soon.png", "soon", "soon");
        work3.Create();

        setTimeout(() => switchUp(), 100);
    }, 1000);
});

class WorkBlock {
    constructor(line ,url, src, title, descr) {
        this.line = line
        this.url = url;
        this.src = src
        this.title = title;
        this.descr = descr;
    }
    Create() {
        const workBlock = document.createElement("div");
        workBlock.classList.add("work-block");
        workBlock.style.transform = "translateY(1000px)";
        this.line.appendChild(workBlock);

        let link = document.createElement("a");
        link.classList.add("link-to-work");
        link.setAttribute("href", this.url);
        workBlock.appendChild(link);

        let preview = document.createElement("img");
        preview.classList.add("work-preview");
        preview.setAttribute("src", this.src);
        workBlock.appendChild(preview);

        let vignette = document.createElement("div");
        vignette.classList.add("vignette-preview");
        workBlock.appendChild(vignette);

        let title = document.createElement("h3");
        title.classList.add("work-name");
        title.textContent = this.title;
        workBlock.appendChild(title);

        let description = document.createElement("p");
        description.classList.add("work-description");
        description.textContent = this.descr;
        workBlock.appendChild(description);
    }
}

class TopicBlock {
    constructor(title) {
        this.title = title;
    }
    Create() {
        let topic = document.createElement("span");
        topic.classList.add("topic");
        topic.textContent = this.title;
        topic.style.transform = "translateY(1000px)";
        worksSec.appendChild(topic);
    }
}