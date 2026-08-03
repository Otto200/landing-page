document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('signup');
    const triggerBtn = document.getElementById('pricing-cta-partner');
    const closeBtn = modal.querySelector('.modal-close-btn');
    const signupForm = document.getElementById('signup-form');

    // Open Modal Sequence
    const openModal = (e) => {
        e.preventDefault();
        modal.classList.add('is-active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevents background body scrolling
        
        // Focus first input field safely
        setTimeout(() => {
            const firstInput = modal.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 50ms);
    };

    // Close Modal Sequence
    const closeModal = () => {
        modal.classList.remove('is-active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restores window viewport tracking
        if (triggerBtn) triggerBtn.focus();
    };

    // Form Submit Event Handler
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Extract field configurations
        const userName = document.getElementById('signup-name').value;
        const userEmail = document.getElementById('signup-email').value;
        
        // Retain the partner configuration fallback link
        const brokerTargetUrl = triggerBtn.getAttribute('data-broker-url');

        // Logic placement placeholder (e.g. tracking scripts, API calls)
        console.log(`Processing ecosystem creation for: ${userName} (${userEmail})`);

        // Close modal and redirect user to target broker platform pipeline
        closeModal();
        window.open(brokerTargetUrl, '_blank', 'noopener,noreferrer');
    };

    // Structural Bindings
    if (triggerBtn) triggerBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Dismissal via click patterns on modal mask layer
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Escape Key Accessibility Binding
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-active')) {
            closeModal();
        }
    });

    // Capture submit event lifecycle
    if (signupForm) signupForm.addEventListener('submit', handleFormSubmit);
});
