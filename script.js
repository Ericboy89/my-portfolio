// JavaScript function to show/hide sections
function showSection(sectionId) {
    // Get all sections with the 'section' class
    const sections = document.querySelectorAll('.section');
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Display the section that is clicked
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Ensure that the 'home' section is visible by default when the page loads
window.onload = function() {
    showSection('home');  // Display the 'home' section on page load
};



let currentSlide = 0;
const slides = document.querySelectorAll('.quote-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);

//tab link Eductatio, experiece, skill 
// Function to switch content
function showTabContent(tab) {
    // Hide all content
    const sections = document.querySelectorAll('.tab-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Remove 'active' class from all tabs
    const tabs = document.querySelectorAll('.tab_title p');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the clicked tab's content and add 'active' class to clicked tab
    const activeSection = document.getElementById(tab);
    activeSection.style.display = 'block';

    const activeTab = document.getElementById('tab-' + tab);
    activeTab.classList.add('active');
}

// Set up event listeners
document.getElementById('tab-education').addEventListener('click', function() {
    showTabContent('education');
});
document.getElementById('tab-skills').addEventListener('click', function() {
    showTabContent('skills');
});
document.getElementById('tab-experience').addEventListener('click', function() {
    showTabContent('experience');
});
