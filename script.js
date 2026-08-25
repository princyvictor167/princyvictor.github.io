```javascript
/*
 * Princy Victor — Personal Website
 *
 * This script currently keeps the site intentionally lightweight.
 * GitHub Pages does not require a framework or build system.
 */


/* ========================================
   CURRENT YEAR
======================================== */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ========================================
   SMOOTH NAVIGATION
======================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ========================================
   SIMPLE SCROLL REVEAL
======================================== */

const revealElements = document.querySelectorAll(
    ".expertise-card, .work-item, .article-card, .tool-group"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
```
