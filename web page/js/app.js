/* =========================
   SCROLL PROGRESS BAR
========================= */

window.addEventListener("scroll", () => {

    const winScroll =
        document.body.scrollTop ||
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled =
        (winScroll / height) * 100;

    const progress =
        document.getElementById("progress-bar");

    if(progress){
        progress.style.width =
            scrolled + "%";
    }

});

/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollBtn =
    document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(!scrollBtn) return;

    if(window.scrollY > 400){

        scrollBtn.style.display = "block";

    }else{

        scrollBtn.style.display = "none";

    }

});

if(scrollBtn){

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}

/* =========================
   KPI COUNTERS
========================= */

const counters =
    document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target =
        +counter.getAttribute("data-target");

    const speed = 40;

    let current = 0;

    const updateCounter = () => {

        if(current < target){

            current += Math.ceil(
                target / speed
            );

            if(current > target){
                current = target;
            }

            counter.innerText = current;

            setTimeout(
                updateCounter,
                25
            );

        }else{

            counter.innerText =
                target;

        }

    };

    updateCounter();

};

/* =========================
   OBSERVER FOR COUNTERS
========================= */

const counterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    animateCounter(
                        entry.target
                    );

                    counterObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold:0.5
        }

    );

counters.forEach(counter => {

    counterObserver.observe(
        counter
    );

});

/* =========================
   TEAM CARDS
========================= */

const teamButtons =
    document.querySelectorAll(".team-btn");

teamButtons.forEach(button => {

    button.addEventListener("click", () => {

        const details =
            button.nextElementSibling;

        if(
            details.style.display ===
            "block"
        ){

            details.style.display =
                "none";

            button.innerText =
                "Подробнее";

        }else{

            details.style.display =
                "block";

            button.innerText =
                "Скрыть";

        }

    });

});

/* =========================
   JOURNAL TIMELINE
========================= */

const timelineButtons =
    document.querySelectorAll(
        ".timeline-btn"
    );

timelineButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
            button.nextElementSibling;

        if(
            content.style.display ===
            "block"
        ){

            content.style.display =
                "none";

        }else{

            content.style.display =
                "block";

        }

    });

});

/* =========================
   SCROLL ANIMATION
========================= */


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold:0.15
        }

    );

revealElements.forEach(el => {

    el.classList.add("hidden");

    revealObserver.observe(el);

});

/* =========================
   ACTIVE NAV LINK
========================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop();

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

navLinks.forEach(link => {

    const href =
        link.getAttribute("href");

    if(href === currentPage){

        link.classList.add(
            "active-link"
        );

    }

});

/* =========================
   FLOATING EFFECT
========================= */

const architecture =
    document.querySelector(
        ".architecture-card"
    );

if(architecture){

    let direction = 1;

    setInterval(() => {

        const current =
            architecture.style.transform;

        if(direction === 1){

            architecture.style.transform =
                "translateY(-8px)";

        }else{

            architecture.style.transform =
                "translateY(0px)";

        }

        direction *= -1;

    },1500);

}

/* =========================
   PARALLAX HERO
========================= */

const hero =
    document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if(!hero) return;

    const offset =
        window.scrollY * 0.2;

    hero.style.backgroundPositionY =
        offset + "px";

});

/* =========================
   THEME TOGGLE (ОПЦИОНАЛЬНО)
========================= */

const themeToggle =
    document.getElementById(
        "theme-toggle"
    );

if(themeToggle){

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-theme"
            );

        });

}