const sections = document.querySelectorAll('main[id], section[id]');
const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Scroll: set active based on visible section
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const id = entry.target.getAttribute('id');

    navLinks.forEach(link => link.classList.remove('active'));


    const activeLink = document.querySelector(`nav a[href="#${id}"]`);
    if (activeLink) activeLink.classList.add('active');
  });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));

// container width (match contact heading width)
const container1 = document.querySelector('.contactme-heading');
const container2 = document.querySelector('.contactme-info-container');

if (container1 && container2) {
  const containerObserver = new ResizeObserver(() => {
    container2.style.width = `${container1.offsetWidth}px`;
  });

  containerObserver.observe(container1);
  container2.style.width = `${container1.offsetWidth}px`;
}


