// Select all the OTP input fields
const otpInputs = document.querySelectorAll('.code');

// Function to handle input focus shift
otpInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value) {
      // Move focus to the next input if current is filled
      if (index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    }
  });

  // Handle the backspace functionality
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && !input.value && index > 0) {
      // Move focus to the previous input if the current is empty
      otpInputs[index - 1].focus();
    }
  });
});
