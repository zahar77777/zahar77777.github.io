document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('demoModal');
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.querySelector('.close-modal');
    
    if (modal && openModalBtn && closeModalBtn) {
        openModalBtn.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        const demoForm = document.querySelector('.demo-form');
        if (demoForm) {
            demoForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Дякуємо за заявку! Ми зв\'яжемося з вами найближчим часом.');
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                demoForm.reset();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});