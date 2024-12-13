// Simple form validation for the "Contact Us" section
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let message = document.querySelector('textarea').value;
    
    if (name && email && message) {
        alert("Thank you for reaching out! We will get back to you soon.");
    } else {
        alert("Please fill out all fields.");
    }
});
