const contactForm = document.getElementById("enquiryForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameField = document.getElementById("fname");
    const phoneField = document.getElementById("phone");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    let isValid = true;
    let errorMessage = "";

    const name = nameField.value;
    const phone = phoneField.value;
    const email = emailField.value;
    const message = messageField.value;

    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|edu)$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!name) {
      isValid = false;
      errorMessage = "Please enter your full name.";
    } else if (!phonePattern.test(phone)) {
      isValid = false;
      errorMessage = "Phone number must contain exactly 10 digits.";
    } else if (!emailPattern.test(email)) {
      isValid = false;
      errorMessage = "Please enter a valid email.";
    } else if (!message) {
      isValid = false;
      errorMessage = "Please enter your message.";
    }

    if (isValid) {
      contactForm.style.display = "none";

      document.getElementById("successMsg").style.display = "block";
    } else {
      alert(errorMessage);
    }
  });
}

// PROP FILTERING
const typeFilter = document.getElementById("type-filter");
const propertyCards = document.querySelectorAll(".prop-card");

if (typeFilter) {
  typeFilter.addEventListener("change", () => {
    propertyCards.forEach((card) => {
      card.style.display =
        typeFilter.value === "all" || card.dataset.type === typeFilter.value ? "block" : "none";
    });
  });
}
