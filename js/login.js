document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('loginModal');
    const openBtn = document.getElementById('openLoginModal');
    const closeBtn = document.getElementById('closeLoginModal');
    const loginInput = document.getElementById('traderName');

    // Open Modal Sequence
    if (openBtn) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('is-active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Lock homepage viewport scrolling
            setTimeout(() => loginInput.focus(), 100); // Autofocus Name field instantly
        });
    }

    // Close Modal Function
    const closeModal = () => {
        modal.classList.remove('is-active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Unlock scrolling
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Escape Key Close Intercept
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-active')) {
            closeModal();
        }
    });

    // Tap Backdrop Surface to Close Modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});
