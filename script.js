document.addEventListener("DOMContentLoaded", function () {
  // Registration Form Handling
  if (document.getElementById("registrationForm")) {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Validate email format
      const emailInput = document.getElementById("email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

      if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add("is-invalid");
        return;
      } else {
        emailInput.classList.remove("is-invalid");
      }

      // Validate phone number (Bangladeshi format)
      const phoneInput = document.getElementById("phone");
      const phoneRegex = /^[0-9]{10}$/;

      if (!phoneRegex.test(phoneInput.value)) {
        phoneInput.classList.add("is-invalid");
        return;
      } else {
        phoneInput.classList.remove("is-invalid");
      }

      // If all validations pass, redirect to phone verification
      window.location.href = "phone-verify.html";
    });
  }
});
