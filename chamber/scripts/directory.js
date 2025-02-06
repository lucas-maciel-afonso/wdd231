// Get the current year
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

// The date the document was last modified
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modification: " + text;

// Fetch JSON & Display Members
document.addEventListener("DOMContentLoaded", () => {
    fetch("members.json")
        .then(response => response.json())
        .then(data => displayMembers(data))
        .catch(error => console.error("Error fetching members:", error));
});

function displayMembers(members) {
    const directory = document.querySelector(".directory");
    directory.innerHTML = "";

    members.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");
        memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        directory.appendChild(memberCard);
    });
}

function toggleView(view) {
    document.querySelector(".directory").classList.toggle("list", view === "list");
}
