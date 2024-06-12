// NAVBAR RESPONSIVE
const menuToggle = document.querySelector('.navbar-burger i');
const nav = document.querySelector('.navbar-menu');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
});

// FAQ

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle('active');
    })
});

// MODAL BOX ACTION
const modalBox = document.querySelector('.modal')
const priceList = document.querySelector('.pricelist')
const closeBtn = document.querySelector('.modal-container a')
const modalContent = document.querySelector('.modal-container')
const pesan = document.querySelector('.pesan');

document.querySelectorAll('.lists .list').forEach((listBtn) => {
    listBtn.addEventListener('click', () => {
        const elementId = listBtn.id;
        if (elementId === "kiloan"){
            priceList.innerHTML = '<li>1. Cuci Setrika Kiloan (3 Hari) - 6K/kg</li><li>2. Cuci Setrika Kiloan (2 Hari) - 7K/kg</li><li>3. Cuci Setrika Kiloan (1 Hari) - 8K/kg</li><li>4. Cuci Setrika Kiloan (10 Jam) - 15K/kg (Min. 2Kg)</li><li>5. Cuci Setrika Kiloan (4 Jam) - 20K/kg (Min. 2Kg)</li>'
            modalBox.style.display = 'flex';
            pesan.addEventListener('click', function(event) {
                event.preventDefault();


                sendData('kiloan');
            });
            
        } else if (elementId === "kaos"){
            priceList.innerHTML = '<li>1. Cuci Kaus satuan (2 Hari) - Rp. 2K/pcs</li><li>2. Cuci Kaus satuan (1 Hari) - Rp. 2.5K/pcs</li><li>3. Cuci Kaus Satuan (12 jam) - Rp. 3K/pcs</li>'
            modalBox.style.display='flex';
            pesan.addEventListener('click', function(event) {
                event.preventDefault();


                sendData('kaos');
            });
        } else if (elementId === "sepatu"){
            priceList.innerHTML = '<li>1. Deep Clean Canvas (4-5 Hari) - Rp. 70k </li><li>2. Deep Clean Synthetic (4-5 Hari) - Rp. 80K</li><li>3. Deep Clean Authentic (4-5 hari) - Rp. 95k</li><li>4. Unyellowing (7 hari) - Rp. 70k</li> <li>5. 1 Day Deep Cleaning (1 hari) - Rp. 150k</li>'
            modalBox.style.display='flex';
            pesan.addEventListener('click', function(event) {
                event.preventDefault();


                sendData('sepatu');
            });
        } else if (elementId === "sofa"){
            priceList.innerHTML = '<li>1. Sofa Sedang (7 Hari) - Rp. 80k/dudukan </li><li>2. Sofa Jumbo (7 Hari) - Rp. 85k/dudukan</li><li>3. Sofa Kayu (7 hari) - Rp. 80k/dudukan </li><li>4. Sofa Leather Sedang (7 hari) - Rp. 85k/dudukan </li> <li>5. Sofa Leather Jumbo (7 hari) - Rp. 100k/dudukan </li>'
            modalBox.style.display='flex';
            pesan.addEventListener('click', function(event) {
                event.preventDefault();


                sendData('sofa');
            });
        } else if (elementId === "karpet"){
            priceList.innerHTML = '<li>1. Karpet Biasa (3 Hari) - Rp. 8k/meter persegi </li><li>2. Karpet Hotel (3 Hari) - Rp. 15k/meter persegi</li><li>3. Karpet Masjid Tebal (1 hari) - Rp. 10k/meter persegi</li><li>4. Karpet Masjid Sedang (1 hari) - Rp. 7k/ meter persegi</li>'
            modalBox.style.display='flex';
            pesan.addEventListener('click', function(event) {
                event.preventDefault();


                sendData('karpet');
            });
        } else if (elementId === "helmet"){
            priceList.innerHTML = '<li>1. Half Face (2 Hari) - Rp. 25k </li><li>2. Full Face (2 Hari) - Rp. 30k</li><li>3. Helm Speda (1 hari) - Rp. 20k</li><li>4. Topi (1 hari) - Rp. 20k/pcs</li>'
            modalBox.style.display='flex';
            pesan.addEventListener('click', function(event) {
                event.preventDefault();

                sendData('helmet');
            });

        }
        

    })

})

closeBtn.addEventListener('click', (e) => {
    modalBox.style.display = 'none'
    e.preventDefault();
})

modalBox.addEventListener('click', (e) => {
    if (!modalContent.contains(e.target) && !closeBtn.contains(e.target)) {
        modalBox.style.display = 'none'
        e.preventDefault();
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modalBox.style.display = 'none'
    }
})

function sendData(id) {
    sessionStorage.setItem('id', id);
    window.location.href = 'payment.html';
}

// Payment

