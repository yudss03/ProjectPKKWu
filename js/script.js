// NAVBAR RESPONSIVE

const menuToggle = document.querySelector('.navbar-burger i');
const nav = document.querySelector('.navbar-menu');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});

// FAQ

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener("click", ()=> {
        faq.classList.toggle('active');
    })
});

