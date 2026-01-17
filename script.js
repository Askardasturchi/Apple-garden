// Tugma bosilganda boshqa sahifaga yo'naltirish
document.querySelectorAll('.animated-btn').forEach(btn => {
    btn.addEventListener('click', function(e){
        const href = btn.getAttribute('href');
        if(href && href !== "#"){
            window.location.href = href; // Menyu.html yoki boshqa sahifa
        }
    });
});
