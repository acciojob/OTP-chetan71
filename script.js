
        const inputs = document.querySelectorAll('.code');

        inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                const value = e.target.value;
                if (/^\d$/.test(value)) { // Check if the input is a single digit
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus(); // Move focus to the next input
                    }
                } else {
                    e.target.value = ''; // Clear the input if it's not a digit
                }
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace') {
                    if (e.target.value === '') {
                        // If the current input is empty, move focus to the previous input
                        if (index > 0) {
                            inputs[index - 1].focus();
                        }
                    } else {
                        // If the current input has a value, clear it
                        e.target.value = '';
                    }
                }
            });
        });
    