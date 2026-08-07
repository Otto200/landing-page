document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const statusTerminal = document.getElementById('status-terminal');
    const homeUrl = 'welcome.html';
    
    const totalDuration = 5000; // 5 seconds metric execution
    const intervalTick = 50; 
    let elapsedTime = 0;

    // Terminal Status Logs Array for Fintech authenticity
    const statusLogs = [
        { time: 0, text: "LOADING..." },
        { time: 1000, text: "VERIFYING USER IP..." },
        { time: 2200, text: "SECURE CONNECTION ESTABLISHED" },
        { time: 3500, text: "CACHING TRADING BLUEPRINTS..." },
        { time: 4500, text: "LOADING PROP PLAYBOOK..." }
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
