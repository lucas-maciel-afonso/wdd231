// Set the current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set the current timestamp in the hidden field
document.getElementById('timestamp').value = new Date().toISOString();

// Function to show visit message
function showVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = Date.now();
    let message = '';

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = new Date(parseInt(lastVisit, 10));
        const differenceInTime = currentTime - lastVisitTime;
        const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

        if (differenceInDays < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${differenceInDays} ${differenceInDays === 1 ? 'day' : 'days'} ago.`;
        }
    }

    document.getElementById('visitMessage').textContent = message;
    localStorage.setItem('lastVisit', currentTime);
}

showVisitMessage();