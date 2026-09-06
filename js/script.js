const typed = new Typed('.typed-text', {
    strings: ['UI/UX Design', 'Frontend Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 900,
    loop: true
});

// Navigation buttom active links
const navLinks = document.querySelectorAll('header nav ul li a, .nav-buttom a');
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLinks = document.querySelectorAll(
                `a[href="#${entry.target.id}"]`
            );

            activeLinks.forEach(link => {
                link.classList.add('active');
            });
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => {
    observer.observe(section);
});


