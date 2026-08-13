document.addEventListener("DOMContentLoaded", () => {

    // Loading screen
    const loader = document.getElementById("siteLoader");
    window.addEventListener("load", () => {
        if (loader) {
            setTimeout(() => loader.classList.add("hidden"), 250);
        }
    });

    // Mobile menu
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("active");

            const expanded =
                menuToggle.getAttribute("aria-expanded") === "true";

            menuToggle.setAttribute("aria-expanded", !expanded);

            document.body.classList.toggle("menu-open");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                document.body.classList.remove("menu-open");
            });
        });

    }

    // Sticky navbar & back-to-top button
    const header = document.getElementById("siteHeader");
    const backToTop = document.getElementById("backToTop");

    function onScroll() {

        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 20);
        }

        if (backToTop) {
            backToTop.classList.toggle("visible", window.scrollY > 500);
        }
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    // Scroll reveal animation
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    revealItems.forEach(item => observer.observe(item));

    // Gallery buttons
    const gallery = document.getElementById("galleryTrack");
    const prev = document.getElementById("galleryPrev");
    const next = document.getElementById("galleryNext");

    if (gallery && prev && next) {

        prev.addEventListener("click", () => {
            gallery.scrollBy({
                left: -400,
                behavior: "smooth"
            });
        });

        next.addEventListener("click", () => {
            gallery.scrollBy({
                left: 400,
                behavior: "smooth"
            });
        });

    }

});
