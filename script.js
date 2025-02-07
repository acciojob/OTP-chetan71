const inputs = document.querySelectorAll('.code');

// Set focus on the first input on page load
if (inputs.length > 0) {
    inputs[0].focus();
}

inputs.forEach((input, index) => {
    // Handle numeric input
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (/^\d$/.test(value)) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        } else {
            e.target.value = '';
        }
    });

    // Handle backspace navigation
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            e.preventDefault();
            if (index > 0) {
                inputs[index - 1].focus();
                e.target.value = '';
            } else {
                e.target.value = '';
            }
        }
    });
});
