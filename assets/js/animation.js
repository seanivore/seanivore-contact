// Animation Script
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const circles = document.querySelectorAll('.animation-circle');
    
    // Add some randomization to the animation
    circles.forEach(circle => {
        // Random starting position for animations
        const delay = -Math.random() * 40;
        circle.style.animationDelay = `${delay}s`;
        
        // Random duration variance
        const durationScale = 0.8 + Math.random() * 0.4;
        const currentMoveDuration = parseFloat(getComputedStyle(circle).animationDuration);
        const currentGrowDuration = parseFloat(getComputedStyle(circle).animationDuration);
        
        circle.style.animationDuration = `${currentMoveDuration * durationScale}s, ${currentGrowDuration * durationScale}s`;
    });
    
    // Subtle parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const height = window.innerHeight;
        const scrollPercent = scrollY / (document.body.scrollHeight - height);
        
        circles.forEach((circle, index) => {
            const speed = (index + 1) * 0.1;
            const yPos = scrollPercent * 100 * speed;
            circle.style.transform = `translateY(${yPos}px)`;
        });
    });
});
