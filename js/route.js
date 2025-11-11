const homeBtn = document.getElementById("home-btn");
const workBtn = document.getElementById("my-work-btn");
const aboutBtn = document.getElementById("about-btn");

const go = (path) => {
    const depth = window.location.pathname.includes("/html/") ? "../" : "./html/";
    location.href = path === "index.html" ? `${depth}../index.html` : `${depth}${path}`;
}

homeBtn.addEventListener("click", () => go("index.html"));
workBtn.addEventListener("click", () => go("my-work.html"));
aboutBtn.addEventListener("click", () => go("about.html"));