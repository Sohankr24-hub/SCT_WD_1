/* ==========================================
   NOVA LANDING PAGE
   SCT_WD_1
   ========================================== */


/* ================= NAVBAR ================= */

const navbar =
    document.getElementById("navbar");

const navLinks =
    document.querySelectorAll(".nav-links a");

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navLinks");


/* ================= SCROLL EFFECT ================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* ================= CLOSE MOBILE MENU ================= */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= KEYBOARD ESC ================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navMenu.classList.remove("show");

    }

});
