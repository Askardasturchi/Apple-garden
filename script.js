// Tugma bosilganda boshqa sahifaga yo'naltirish
document.querySelectorAll('.animated-btn').forEach(button => {
    button.addEventListener('click', function(e){
        e.preventDefault(); // Hozircha # ishlatamiz
        const target = this.getAttribute('data-target');
        // Keyinchalik boshqa sahifaga yo'naltirish
        window.location.href = target;
    });
});
