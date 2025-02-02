otpInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value && index < otpInputs.length - 1) {
      // Focus the next input field
      setTimeout(() => {
        otpInputs[index + 1].focus();
      }, 100); // Added a small delay
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && !input.value && index > 0) {
      // Focus the previous input if backspace is pressed and current field is empty
      setTimeout(() => {
        otpInputs[index - 1].focus();
      }, 100);
    }
  });
});
