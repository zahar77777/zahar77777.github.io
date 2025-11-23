document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeSuccessModal = document.getElementById('closeSuccessModal');
    const closeModalBtn = document.querySelector('#successModal .close-modal');

    function validateForm() {
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');

        document.querySelectorAll('.error-message').forEach(error => {
            error.textContent = '';
        });
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });

        if (!name.value.trim()) {
            showError('nameError', 'Будь ласка, введіть ваше ім\'я');
            name.parentElement.classList.add('error');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError('emailError', 'Будь ласка, введіть email');
            email.parentElement.classList.add('error');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError('emailError', 'Будь ласка, введіть коректний email');
            email.parentElement.classList.add('error');
            isValid = false;
        }
        if (phone.value.trim()) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
            if (!phoneRegex.test(phone.value)) {
                showError('phoneError', 'Будь ласка, введіть коректний номер телефону');
                phone.parentElement.classList.add('error');
                isValid = false;
            }
        }

        if (!message.value.trim()) {
            showError('messageError', 'Будь ласка, введіть повідомлення');
            message.parentElement.classList.add('error');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError('messageError', 'Повідомлення має містити щонайменше 10 символів');
            message.parentElement.classList.add('error');
            isValid = false;
        }

        return isValid;
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            btnText.classList.add('d-none');
            btnLoading.classList.remove('d-none');
            submitBtn.disabled = true;

            setTimeout(() => {
                console.log('Form data:', {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    company: document.getElementById('company').value,
                    service: document.getElementById('service').value,
                    message: document.getElementById('message').value
                });

                successModal.style.display = 'block';
                document.body.style.overflow = 'hidden';

                contactForm.reset();
                btnText.classList.remove('d-none');
                btnLoading.classList.add('d-none');
                submitBtn.disabled = false;
            }, 2000);
        }
    });

    function closeSuccessModalFunc() {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeSuccessModal.addEventListener('click', closeSuccessModalFunc);
    closeModalBtn.addEventListener('click', closeSuccessModalFunc);

    window.addEventListener('click', (e) => {
        if (e.target === successModal) {
            closeSuccessModalFunc();
        }
    });

    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.type !== 'submit') {
                validateField(this);
            }
        });

        input.addEventListener('input', function() {
            if (this.parentElement.classList.contains('error')) {
                const errorId = this.id + 'Error';
                showError(errorId, '');
                this.parentElement.classList.remove('error');
            }
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        const fieldId = field.id;

        switch (fieldId) {
            case 'name':
                if (!value) {
                    showError('nameError', 'Будь ласка, введіть ваше ім\'я');
                    field.parentElement.classList.add('error');
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    showError('emailError', 'Будь ласка, введіть email');
                    field.parentElement.classList.add('error');
                } else if (!emailRegex.test(value)) {
                    showError('emailError', 'Будь ласка, введіть коректний email');
                    field.parentElement.classList.add('error');
                }
                break;
            case 'phone':
                if (value) {
                    const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
                    if (!phoneRegex.test(value)) {
                        showError('phoneError', 'Будь ласка, введіть коректний номер телефону');
                        field.parentElement.classList.add('error');
                    }
                }
                break;
            case 'message':
                if (!value) {
                    showError('messageError', 'Будь ласка, введіть повідомлення');
                    field.parentElement.classList.add('error');
                } else if (value.length < 10) {
                    showError('messageError', 'Повідомлення має містити щонайменше 10 символів');
                    field.parentElement.classList.add('error');
                }
                break;
        }
    }

    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('click', function() {
            this.style.backgroundColor = '#e8f5e8';
            this.querySelector('i').style.color = '#45a049';
            
            setTimeout(() => {
                this.style.backgroundColor = '#f8f9fa';
                this.querySelector('i').style.color = 'var(--main-color)';
            }, 1000);
        });
    }
});