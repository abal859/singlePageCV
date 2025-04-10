document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggleBtn');

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.closest('section');
            const infoList = section.querySelector('.infoList');

            
            infoList.classList.toggle('show');
            btn.classList.toggle('rotate');
            section.classList.toggle('collapsed')

            if (!section.classList.contains('collapsed')) {
                setTimeout(() => {
                    section.classList.remove('collapsed');
                }, 300);
            }
        });
    });
});