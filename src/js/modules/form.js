const form = () => {
    const phoneInput = document.querySelectorAll('input[name="phone"]');
    phoneInput.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
}

export default form;