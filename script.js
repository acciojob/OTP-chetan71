//your JS code here. If required.
        const inputs = document.querySelectorAll('.code');

        inputs.forEach((input, index) => {
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

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace') {
                    e.preventDefault();
                    let lastFilledIndex = -1;

                    // Find the last filled input
                    for (let i = inputs.length - 1; i >= 0; i--) {
                        if (inputs[i].value !== '') {
                            lastFilledIndex = i;
                            break;
                        }
                    }

                    if (lastFilledIndex !== -1) {
                        inputs[lastFilledIndex].value = '';
                        if (lastFilledIndex > 0) {
                            inputs[lastFilledIndex - 1].focus();
                        }
                    }
                }
            });
        });
    