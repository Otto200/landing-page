 document.addEventListener("DOMContentLoaded", () => {
        const scroller = document.getElementById("broker-scroller");
        const slides = document.querySelectorAll(".broker-slide");
        const dots = document.querySelectorAll(".dot-indicator");
        let currentIndex = 0;
        let autoSlideInterval;

        const updateActiveDot = (index) => {
            dots.forEach((dot, idx) => {
                if(idx === index) {
                    dot.classList.add("active-dot");
                } else {
                    dot.classList.remove("active-dot");
                }
            });
        };

        const startAutoSlide = () => {
            autoSlideInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % slides.length;
                const slideWidth = scroller.clientWidth;
                
                // Triggers structural smooth scrolling physics
                scroller.scrollTo({
                    left: currentIndex * slideWidth,
                    behavior: 'smooth'
                });
                updateActiveDot(currentIndex);
            }, 3500); // Transitions automatically every 3.5 seconds
        };

        // Pauses auto-sliding instantly if a trader manually swipes or clicks
        scroller.addEventListener("pointerdown", () => clearInterval(autoSlideInterval));
        dots.forEach((dot, idx) => {
            dot.addEventListener("click", () => {
                clearInterval(autoSlideInterval);
                currentIndex = idx;
                updateActiveDot(currentIndex);
            });
        });

        startAutoSlide();
    });
