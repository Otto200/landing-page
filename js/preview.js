document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("playbook-carousel-track");
    const nextBtn = document.getElementById("playbook-next-btn");
    const prevBtn = document.getElementById("playbook-prev-btn");

    if (track && nextBtn && prevBtn) {
        // Calculates layout item step sizing mathematically on event triggers
        const getScrollStep = () => {
            const firstCard = track.querySelector(".ecosystem-swipe-card");
            return firstCard ? firstCard.clientWidth + 24 : 340; // Card width + grid gaps offset
        };

        nextBtn.addEventListener("click", () => {
            track.scrollBy({ left: getScrollStep(), behavior: "smooth" });
        });

        prevBtn.addEventListener("click", () => {
            track.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
        });
    }
});
