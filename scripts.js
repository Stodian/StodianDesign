document.addEventListener('DOMContentLoaded', function () {
    gsap.from("header", { duration: 1, y: -100, opacity: 0 });
    gsap.from("#intro", { duration: 1, x: -100, opacity: 0, delay: 0.5 });

    const projects = document.querySelectorAll('.portfolio-project');
    projects.forEach((project, index) => {
        gsap.from(project, {
            duration: 1,
            y: 100,
            opacity: 0,
            delay: 1 + index * 0.5,
            scrollTrigger: {
                trigger: project,
                start: 'top 80%', // Trigger the animation when the top of the project hits 80% of the viewport height
                toggleActions: 'play none none none'
            }
        });
    });

    gsap.from("#contact", { duration: 1, x: 100, opacity: 0, delay: 2 + projects.length * 0.5 });
    gsap.from("footer", { duration: 1, y: 100, opacity: 0, delay: 2.5 + projects.length * 0.5 });
});
