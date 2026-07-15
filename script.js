// Show message when Explore Courses button is clicked

function showMessage() {

    const message = document.getElementById("message");

    message.textContent =
        "Great choice! Explore our courses and start learning today.";

}


// Show course information

function enroll(courseName) {

    alert(
        "You selected the " +
        courseName +
        " course. Contact us for more information!"
    );

}


// Handle contact form submission

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const result = document.getElementById("formResult");

    result.textContent =
        "Thank you, " +
        name +
        "! Your message has been received.";

    contactForm.reset();

});
