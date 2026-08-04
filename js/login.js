document.addEventListener('DOMContentLoaded', () => {
    // Correctly referencing your existing button and modal IDs
    const openBtn = document.getElementById('trader-login-btn');
    const modal = document.getElementById('loginModal');
    const closeBtn = document.getElementById('closeLoginModal');
    const loginInput = document.getElementById('traderName');

    // Open Modal Sequence
    if (openBtn && modal) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents the page from jumping due to the # href
            modal.classList.add('is-active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Lock homepage scrolling
            setTimeout(() => loginInput.focus(), 100); // Autofocus Name field instantly
        });
    }

    // Close Modal Function
    const closeModal = () => {
        if (modal) {
            modal.classList.remove('is-active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = ''; // Unlock background scrolling
        }
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Escape Key Close Intercept
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
            closeModal();
        }
    });

    // Tap Backdrop Surface to Close Modal
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
});
