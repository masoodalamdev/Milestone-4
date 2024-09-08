const generateResume = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    if (name != "" && email != "" && phone != "" && education != "" && workExperience != "" && skills != "") {
        (document.getElementById('resume-name') as HTMLHeadingElement).textContent = name;
        (document.getElementById('resume-email') as HTMLParagraphElement).textContent = `Email: ${email}`;
        (document.getElementById('resume-phone') as HTMLParagraphElement).textContent = `Phone: ${phone}`;
        (document.getElementById('resume-education') as HTMLParagraphElement).textContent = education;
        (document.getElementById('resume-work-experience') as HTMLParagraphElement).textContent = workExperience;
        (document.getElementById('resume-skills') as HTMLParagraphElement).textContent = skills;

        document.getElementById('resume')?.classList.remove('hidden');
        document.getElementById('resume-form')?.classList.add('hidden');
    }
    else {
        alert("Please fill the form completely to generate resume")
    }
}

    const makeEditable = () => {
        const editableElements = document.querySelectorAll('.editable p');

        editableElements.forEach(element => {
            element.addEventListener('input', (event) => {
                const target = event.target as HTMLElement;
                const section = target.closest('.editable')?.getAttribute('data-section');
                if (section) {
                    localStorage.setItem(section, target.textContent || '');
                }
            });

            const section = element.closest('.editable')?.getAttribute('data-section');
            if (section) {
                const savedContent = localStorage.getItem(section);
                if (savedContent) {
                    element.textContent = savedContent;
                }
            }
        });
    };

    const button = document.getElementById('generate-resume');
    if (button) {
        button.addEventListener('click', () => {
            generateResume();
            makeEditable();
        });
    }

    document.addEventListener('DOMContentLoaded', makeEditable);
