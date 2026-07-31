document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('playbook-carousel-track');
    const nextBtn = document.getElementById('playbook-next-btn');
    const prevBtn = document.getElementById('playbook-prev-btn');

    if (track && nextBtn && prevBtn) {
        // Calculate dynamic spacing width of one individual carousel card unit
        const getSlideScrollAmount = () => {
            const firstSlide = track.querySelector('.carousel-slide-item');
            if (firstSlide) {
                // Return total card width including its margin padding footprint
                return firstSlide.getBoundingClientRect().width + 32; 
            }
            return 300; // Fallback pixel tracker
        };

        // Advance layout to the right
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: getSlideScrollAmount(), behavior: 'smooth' });
        });

        // Pull layout back to the left
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -getSlideScrollAmount(), behavior: 'smooth' });
        });
    }
});
