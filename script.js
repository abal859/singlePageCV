document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggleBtn');

    toggleButtons.forEach(btn => {
        const section = btn.closest('section');
        const infoList = section.querySelector('.infoList');

        btn.addEventListener('click', () => {
            infoList.classList.toggle('show');
            btn.classList.toggle('rotate');
        });
    });
});
