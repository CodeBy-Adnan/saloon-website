// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});

// ===============================
// Close Menu on Link Click
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

// ===============================
// Sticky Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#111";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";

    } else {

        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// Scroll To Top Button
// ===============================

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopBtn.style.opacity = "1";
        scrollTopBtn.style.visibility = "visible";

    } else {

        scrollTopBtn.style.opacity = "0";
        scrollTopBtn.style.visibility = "hidden";

    }

});

// Hide initially

scrollTopBtn.style.opacity = "0";
scrollTopBtn.style.visibility = "hidden";
scrollTopBtn.style.transition = ".4s";


// ===============================
// Animated Counter
// ===============================

const counters = document.querySelectorAll(".about-stats h3");

const speed = 80;

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const targetText = counter.innerText;

            let target;

            if (targetText.includes("K")) {

                target = parseInt(targetText) * 1000;

            } else {

                target = parseInt(targetText);

            }

            let count = 0;

            const increment = Math.ceil(target / speed);

            const updateCounter = () => {

                count += increment;

                if (count >= target) {

                    counter.innerText = targetText;

                } else {

                    if (target >= 1000) {

                        counter.innerText = Math.floor(count / 1000) + "K+";

                    } else {

                        counter.innerText = count + "+";

                    }

                    requestAnimationFrame(updateCounter);

                }

            };

            updateCounter();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => observer.observe(counter));


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(

    ".service-card, .about-image, .about-content, .why-card, .team-card, .price-card, .gallery-grid img, .testimonial-card, .contact-card"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold:0.15

});

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(50px)";

    el.style.transition = ".7s ease";

    revealObserver.observe(el);

});


// ===============================
// Gallery Hover Effect
// ===============================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08) rotate(2deg)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1) rotate(0deg)";

    });

});


// ===============================
// Form Submission
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("🎉 Thank you! Your appointment request has been received.");

    form.reset();

});