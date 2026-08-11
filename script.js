/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


/* =========================================
   CREATIVE PORTFOLIO FILTER
========================================= */

const portfolioFilters =
    document.querySelectorAll(".portfolio-filter");

const creativeProjects =
    document.querySelectorAll(".creative-project");


portfolioFilters.forEach(button => {

    button.addEventListener("click", () => {

        portfolioFilters.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        creativeProjects.forEach(project => {

            if (
                filter === "all" ||
                project.classList.contains(filter)
            ) {

                project.style.display = "block";

                setTimeout(() => {
                    project.style.opacity = "1";
                }, 50);

            } else {

                project.style.opacity = "0";

                setTimeout(() => {
                    project.style.display = "none";
                }, 200);

            }

        });

    });

});


/* =========================================
   PROJECT MODAL
========================================= */

const projectModal = document.getElementById("projectModal");
const modalMedia = document.getElementById("modalMedia");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".open-project").forEach(button => {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        const project = this.closest(".creative-project");

        const title =
            project.querySelector(".project-info h3").textContent;

        const image = project.querySelector(".project-media img");
        const video = project.querySelector(".project-media video");

        modalMedia.innerHTML = "";

        /* IMAGE PROJECT */

        if (image) {

            const newImage = document.createElement("img");

            newImage.src = image.src;

            newImage.alt = title;

            modalMedia.appendChild(newImage);

        }

        /* VIDEO PROJECT */

        else if (video) {

            const source = video.querySelector("source");

            const newVideo = document.createElement("video");

            newVideo.src = source.src;

            newVideo.controls = true;

            newVideo.autoplay = true;

            newVideo.muted = true;

            newVideo.loop = true;

            newVideo.playsInline = true;

            modalMedia.appendChild(newVideo);

        }

        modalTitle.textContent = title;

        projectModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* CLOSE MODAL */

function closeProjectViewer() {

    projectModal.classList.remove("active");

    modalMedia.innerHTML = "";

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeProjectViewer
);


/* CLICK OUTSIDE */

projectModal.addEventListener("click", function(event) {

    if (event.target === projectModal) {

        closeProjectViewer();

    }

});


/* ESC KEY */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeProjectViewer();

    }

});

/* CLOSE */

function closeProjectViewer() {

    projectModal.classList.remove("active");

    modalMedia.innerHTML = "";

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeProjectViewer
);


projectModal.addEventListener(
    "click",
    event => {

        if (
            event.target === projectModal
        ) {

            closeProjectViewer();

        }

    }
);


/* ESC KEY */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProjectViewer();

        }

    }
);


/* ==========================================
   IMAGE MODAL
========================================== */

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".viewBtn").forEach(btn => {

    btn.addEventListener("click", function () {

        const image =
            this.parentElement.previousElementSibling.src;

        modal.style.display = "flex";

        modalImage.src = image;

    });

});

closeModal.onclick = () => {

    modal.style.display = "none";

};

window.onclick = function (e) {

    if (e.target === modal) {

        modal.style.display = "none";

    }

};


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
    "section"
);

function revealSections() {

    revealElements.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        const trigger =
            window.innerHeight - 120;

        if (top < trigger) {

            section.classList.add("reveal");
            section.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (
            pageYOffset >= top &&
            pageYOffset < top + height
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

}); /* ==========================================
   ANIMATE SKILL BARS
========================================== */

const progressBars = document.querySelectorAll(".progress-bar");

function animateSkills() {

    progressBars.forEach(bar => {

        const finalWidth = getComputedStyle(bar).width;

        bar.style.width = "0px";

        setTimeout(() => {
            bar.style.width = finalWidth;
        }, 300);

    });

}

const skillsSection = document.querySelector("#skills");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateSkills();

            skillObserver.unobserve(skillsSection);

        }

    });

}, {
    threshold: 0.5
});

skillObserver.observe(skillsSection);


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you! Your message has been sent.");

    contactForm.reset();

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "22px";
topButton.style.background = "#00d4ff";
topButton.style.color = "#000";
topButton.style.display = "none";
topButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";
topButton.style.zIndex = "9999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   HERO PARALLAX EFFECT
========================================== */

const heroImage = document.querySelector(".floating-card");

if (heroImage) {
    window.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;

       heroImage.style.transform = 'rotateY(${x}deg) rotateX(${-y}deg)';

    });
}



/* ==========================================
   CURSOR GLOW EFFECT
========================================== */

const glow = document.createElement("div");

document.body.appendChild(glow);

glow.style.position="fixed";
glow.style.width="180px";
glow.style.height="180px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle, rgba(0,212,255,.25), transparent 70%)";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="0";

window.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";

});


/* ==========================================
   PAGE LOADER
========================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("%cGraphic Design Portfolio",
"font-size:22px;color:#00d4ff;font-weight:bold;");

console.log("Designed with HTML, CSS & JavaScript.");
