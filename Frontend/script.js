document.addEventListener("DOMContentLoaded", function () {
  // Initialize form validation and submission
  const registerForm = document.getElementById("registerForm");
  const successToast = new bootstrap.Toast(
    document.getElementById("successToast")
  );

  if (registerForm) {
    // Add event listener for form submission
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      // Validate form
      if (validateRegisterForm()) {
        // Form is valid, show success message
        console.log("Registration successful!");
        successToast.show();

        // Log form data to console
        logFormData();

        // Redirect to login page after 3 seconds
        setTimeout(() => {
          window.location.href = "login.html";
        }, 3000);
      } else {
        console.log("Form validation failed");
      }

      // Add was-validated class to show validation messages
      registerForm.classList.add("was-validated");
    });

    // Password matching validation
    const password = document.getElementById("regPassword");
    const confirmPassword = document.getElementById("confirmPassword");

    if (password && confirmPassword) {
      confirmPassword.addEventListener("input", function () {
        if (confirmPassword.value !== password.value) {
          confirmPassword.setCustomValidity("Passwords must match");
        } else {
          confirmPassword.setCustomValidity("");
        }
      });
    }

    // Bangladesh phone number validation
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      phoneInput.addEventListener("input", function () {
        const phoneRegex = /^01[3-9]\d{8}$/;
        if (!phoneRegex.test(this.value)) {
          this.setCustomValidity(
            "Please enter a valid Bangladesh phone number (11 digits starting with 01[3-9])"
          );
        } else {
          this.setCustomValidity("");
        }
      });
    }

    // Email validation
    const emailInput = document.getElementById("regEmail");
    if (emailInput) {
      emailInput.addEventListener("input", function () {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        if (!emailRegex.test(this.value)) {
          this.setCustomValidity(
            "Please enter a valid email address (example@domain.com)"
          );
        } else {
          this.setCustomValidity("");
        }
      });
    }
  }

  // Form validation function
  function validateRegisterForm() {
    const form = document.getElementById("registerForm");
    const inputs = form.querySelectorAll("input, select, textarea");
    let isValid = true;

    // Check each input for validity
    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        console.log(
          `Validation failed for: ${input.id} - ${input.validationMessage}`
        );
        isValid = false;
      }
    });

    // Additional password match validation
    const password = document.getElementById("regPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    if (password.value !== confirmPassword.value) {
      console.log("Password validation failed: Passwords do not match");
      confirmPassword.setCustomValidity("Passwords must match");
      isValid = false;
    } else {
      confirmPassword.setCustomValidity("");
    }

    return isValid;
  }

  // Log form data to console
  function logFormData() {
    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("regEmail").value,
      studentId: document.getElementById("studentId").value,
      phone: document.getElementById("phone").value,
      password: "********", // Don't log actual password
    };
    console.log("Form submission data:", formData);
  }
});
