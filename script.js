document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggleBtn');

    toggleButtons.forEach(btn => {
        const section = btn.closest('section');
        const infoList = section.querySelector('.infoList');

        if (!infoList.classList.contains('show')) {
            section.classList.add('collapsed');
        }

        btn.addEventListener('click', () => {
            infoList.classList.toggle('show');
            btn.classList.toggle('rotate');
            section.classList.toggle('collapsed', !infoList.classList.contains('show'));
        });
    });
});
