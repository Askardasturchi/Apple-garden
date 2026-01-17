// Ideal hover va ripple animation tayyor
document.querySelectorAll('.animated-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        // Agar href="#" bo'lsa keyinchalik JS orqali target yo'naltirish mumkin
        const href = btn.getAttribute('href');
        if(href && href !== "#"){
            window.location.href = href; // Menyu.html yoki boshqa sahifa
        }
    });
});
