// NAVBAR RESPONSIVE

const menuToggle = document.querySelector('.navbar-burger i');
const nav = document.querySelector('.navbar-menu');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});

// FAQ

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener("click", ()=> {
        faq.classList.toggle('active');
    })
});

// MODAL BOX ACTION
const listBtns = document.querySelectorAll('.lists .list')
const modalBox = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal-container a')
const modalContent = document.querySelector('.modal-container')

listBtns.forEach((listBtn) => {
    listBtn.addEventListener('click', () => {
        modalBox.style.display = 'flex';
    })
})

closeBtn.addEventListener('click', (e) => {
    modalBox.style.display = 'none'
    e.preventDefault();
})

modalBox.addEventListener('click', (e) => {
    if(!modalContent.contains(e.target) && !closeBtn.contains(e.target)) {
        modalBox.style.display = 'none'
        e.preventDefault();
    }
})