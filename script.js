document.querySelectorAll('.animated-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        const target = btn.getAttribute('data-target');
        if(target){
            window.location.href = target;
        }
    });
});
