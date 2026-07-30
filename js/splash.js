document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const statusTerminal = document.getElementById('status-terminal');
    const homeUrl = 'home.html';
    
    const totalDuration = 5000; // 5 seconds metric execution
    const intervalTick = 50; 
    let elapsedTime = 0;

    // Terminal Status Logs Array for Fintech authenticity
    const statusLogs = [
        { time: 0, text: "CONNECTING TO SECURE CORE..." },
        { time: 1000, text: "VERIFYING PROFILING KEYS..." },
        { time: 2200, text: "DOWNLINK ESTABLISHED // PASS VALIDATION" },
        { time: 3500, text: "CACHING STRATEGIC BLUEPRINTS..." },
        { time: 4500, text: "DECRYPTING PROP PLAYBOOK..." }
    ];

    const splashInterval = setInterval(() => {
        elapsedTime += intervalTick;
        const progressPercentage = (elapsedTime / totalDuration) * 100;
        
        // Drive CSS Progress bar tracking
        if (progressBar) {
            progressBar.style.width = `${progressPercentage}%`;
        }

        // Cycle text arrays smoothly based on elapsed time triggers
        statusLogs.forEach(log => {
            if (elapsedTime >= log.time && statusTerminal) {
                statusTerminal.textContent = log.text;
            }
        });

        // Redirect precisely when 5000ms clears out
        if (elapsedTime >= totalDuration) {
            clearInterval(splashInterval);
            window.location.href = homeUrl;
        }
    }, intervalTick);
});
