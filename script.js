// Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1200);
});

// Typing Effect
const text = [
    "Full Stack Developer",
    "Web Designer",
    "JavaScript Developer",
    "UI/UX Designer"
];

let count = 0;
let index = 0;
let current = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    current = text[count];
    letter = current.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === current.length) {

        count++;

        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 120);

    }

})();

// Scroll To Top
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Dark Mode
const theme = document.getElementById("theme");

let dark = true;

theme.onclick = () => {

    if(dark){

        document.body.style.background="#ffffff";
        document.body.style.color="#111";

        dark=false;

    }

    else{

        document.body.style.background="#0f172a";
        document.body.style.color="#ffffff";

        dark=true;

    }

};

// Fade Animation
const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(60px)";

sec.style.transition=".8s";

observer.observe(sec);

});

// Mobile Menu
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");

menu.onclick = () => {

    if(nav.style.display==="flex"){

        nav.style.display="none";

    }

    else{

        nav.style.display="flex";
        nav.style.flexDirection="column";
        nav.style.position="absolute";
        nav.style.top="80px";
        nav.style.right="20px";
        nav.style.background="#1e293b";
        nav.style.padding="20px";
        nav.style.borderRadius="10px";

    }

};