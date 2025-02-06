// Footer
// Get the current year
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

// The date the document was last modified
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modification: " + text;

// Function to show visit message
function showVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = Date.now();
    let message = '';

    console.log('Last Visit:', lastVisit);
    console.log('Current Time:', currentTime);

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = new Date(parseInt(lastVisit, 10));
        console.log('Last Visit Time:', lastVisitTime);

        const differenceInTime = currentTime - lastVisitTime;
        const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

        console.log('Difference in Days:', differenceInDays);

        if (differenceInDays < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${differenceInDays} ${differenceInDays === 1 ? 'day' : 'days'} ago.`;
        }
    }

    console.log('Message:', message);

    document.getElementById('visitMessage').textContent = message;
    localStorage.setItem('lastVisit', currentTime);
}

showVisitMessage();