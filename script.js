// JavaScript για την ανίχνευση της κύλισης και αλλαγή του φόντου
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Ενεργοποίηση του νέου φόντου μετά από 100px κύλισης
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

