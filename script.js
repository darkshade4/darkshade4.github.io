// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Parallax Effect
window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    const layer1 = document.querySelector('.layer1');
    const layer2 = document.querySelector('.layer2');

    layer1.style.transform = `translateY(${offset * 0.5}px)`;
    layer2.style.transform = `translateY(${offset * 0.3}px)`;
});
