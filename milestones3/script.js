// Form reference and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collecting user input
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var education = document.getElementById('education').value.trim();
    var experience = document.getElementById('experience').value.trim();
    var skills = document.getElementById('skills').value.trim();
    // Check if all fields are filled
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("Please fill all fields.");
        return;
    }
    // Generate resume
    var htmlResume = "\n        <h2><b>RESUME</b></h2>\n\n        <h3>Personal Information</h3>\n        <p><b>Name:</b>".concat(name, "</p>\n        <p><b>Email:</b>").concat(email, "</p>\n        <p><b>Phone:</b>").concat(phone, "</p>\n        \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Generate resume display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = htmlResume;
    }
    else {
        console.error("Resume Display Element is missing");
    }
});
