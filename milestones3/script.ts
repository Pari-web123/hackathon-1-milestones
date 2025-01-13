// Form reference and display area
var form = document.getElementById('resume-form') as HTMLFormElement;
var resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collecting user input
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const education = (document.getElementById('education') as HTMLInputElement).value.trim();
    const experience = (document.getElementById('experience') as HTMLInputElement).value.trim();
    const skills = (document.getElementById('skills') as HTMLInputElement).value.trim();

    // Check if all fields are filled
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("Please fill all fields.");
        return;
    }

    // Generate resume
    const htmlResume = `
        <h2><b>RESUME</b></h2>

        <h3>Personal Information</h3>
        <p><b>Name:</b>${name}</p>
        <p><b>Email:</b>${email}</p>
        <p><b>Phone:</b>${phone}</p>
        
        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Generate resume display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = htmlResume;
    } else {
        console.error("Resume Display Element is missing");
    }
});