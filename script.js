// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Add click handlers for donation buttons
document.querySelectorAll('.support-button, .cta-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Vielen Dank für Ihr Interesse! Die Spendenfunktion wird bald verfügbar sein.');
    });
});