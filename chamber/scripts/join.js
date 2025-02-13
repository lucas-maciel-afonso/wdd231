// Get the current year
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

// The date the document was last modified
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modification: " + text;

// Set the current timestamp in the hidden field
document.getElementById('timestamp').value = new Date().toISOString();

// Function to show modal
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.getElementById('main-nav').querySelector('ul');
    nav.classList.toggle('active');
});