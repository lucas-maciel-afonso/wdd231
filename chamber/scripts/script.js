// Grid and list view
function toggleView(view) {
    const directory = document.querySelector('.directory');
    if (view === 'list') {
        directory.classList.add('list');
    } else {
        directory.classList.remove('list');
    }
}

// Footer 
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Member data
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const directory = document.querySelector('.directory');
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}">${member.website}</a>
        `;
        directory.appendChild(memberCard);
    });
}

fetchMembers();
