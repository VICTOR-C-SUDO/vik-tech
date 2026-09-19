/* =====================================================
   VIKTOR LUXURY PORTFOLIO
   MAIN JAVASCRIPT
   ===================================================== */


/* =====================================================
   CURRENT YEAR
   ===================================================== */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });
}



/* =====================================================
   DARK / LIGHT MODE
   ===================================================== */



/* =====================================================
   SCROLL REVEAL
   ===================================================== */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    observer.unobserve(entry.target);
                }
            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });
}


/* =====================================================
   SKILL BAR ANIMATION
   ===================================================== */

const skillBars = document.querySelectorAll(".skill-progress");

if (skillBars.length > 0) {

    const skillObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const bar = entry.target;

                    const progress =
                        bar.getAttribute("data-progress");

                    bar.style.width = progress + "%";

                    observer.unobserve(bar);
                }
            });

        },
        {
            threshold: 0.5
        }
    );

    skillBars.forEach(function (bar) {
        skillObserver.observe(bar);
    });
}


/* =====================================================
   CONTACT FORM
   ===================================================== */

// =================================
// CONTACT FORM → WHATSAPP
// =================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Stop the page from refreshing
        event.preventDefault();

        // Get the form information
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // YOUR WHATSAPP NUMBER
        // Use 234 instead of the first 0
        const phoneNumber = "2349076494022";

        // Create the WhatsApp message
        const whatsappMessage =
            `Hello Viktor,%0A%0A` +
            `I found your portfolio website and would like to contact you.%0A%0A` +
            `Name: ${encodeURIComponent(name)}%0A` +
            `Email: ${encodeURIComponent(email)}%0A` +
            `Subject: ${encodeURIComponent(subject)}%0A` +
            `Message: ${encodeURIComponent(message)}`;

        // Create WhatsApp link
        const whatsappURL =
            `https://wa.me/${2349076494022}?text=${whatsappMessage}`;

        // Open WhatsApp
        window.open(whatsappURL, "_blank");

    });

}


/* =====================================================
   PROJECT CARD 3D EFFECT
   ===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

    card.addEventListener("mousemove", function (event) {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;
    });


    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });

});


/* =====================================================
   HERO IMAGE 3D EFFECT
   ===================================================== */

const heroImage =
    document.querySelector(".hero-image");

if (heroImage) {

    document.addEventListener("mousemove", function (event) {

        const x =
            (window.innerWidth / 2 - event.clientX) / 60;

        const y =
            (window.innerHeight / 2 - event.clientY) / 60;

        heroImage.style.transform =
            `rotateY(${x}deg) rotateX(${y}deg)`;
    });
}


/* =====================================================
   BACK TO TOP
   ===================================================== */

const backTop =
    document.querySelector(".back-top");

if (backTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");
        }
    });


    backTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* =====================================================
   BUTTON PRESS EFFECT
   ===================================================== */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform = "scale(0.96)";

        setTimeout(function () {

            button.style.transform = "";

        }, 150);
    });
});
// =========================
// BACK TO TOP
// =========================

// =========================
// BACK TO TOP
// =========================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// =========================
// LOADING SCREEN
// =========================

const loader = document.getElementById("loader");

if (loader) {

    window.addEventListener("load", () => {

        setTimeout(()=>{
        loader.classList.add("hide");
    },);

});
}
// ===============================
// DARK / LIGHT MODE
// ===============================

// ===============================
// DARK / LIGHT MODE
// ========================================
// VIK TECH THEME TOGGLE
// ========================================

const themeToggle = document.getElementById("theme-toggle");


// Get the icon inside the button
const themeIcon = themeToggle
    ? themeToggle.querySelector("i")
    : null;


// ========================================
// APPLY SAVED THEME BEFORE/WHEN PAGE LOADS
// ========================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    if (themeIcon) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }

} else {

    document.body.classList.remove("light-mode");

    if (themeIcon) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }

}


// ========================================
// TOGGLE THEME
// ========================================

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        // Switch light/dark mode
        document.body.classList.toggle("light-mode");


        // Check current mode
        const isLightMode =
            document.body.classList.contains("light-mode");


        // ====================================
        // SAVE THEME
        // ====================================

        if (isLightMode) {

            localStorage.setItem("theme", "light");

        } else {

            localStorage.setItem("theme", "dark");

        }


        // ====================================
        // CHANGE ICON
        // ====================================

        if (themeIcon) {

            if (isLightMode) {

                // Light mode = Sun
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");

            } else {

                // Dark mode = Moon
                themeIcon.classList.remove("fa-sun");
                themeIcon.classList.add("fa-moon");

            }

        }

    });

}