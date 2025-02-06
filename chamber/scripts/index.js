// Footer
// Get the current year
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

// The date the document was last modified
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modification: " + text;

// OpenWeatherMap API
document.addEventListener('DOMContentLoaded', function () {
    const weatherInfo = document.getElementById('weather-info');
    const apiKey = 'd1b8c32c66c2b3e20f7416dfe8b0e37f'; // Consider hiding this
    const city = 'Rio Branco';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const currentTemp = Math.round(data.list[0].main.temp);
            const currentDesc = capitalizeWords(data.list[0].weather[0].description);

            let forecastHTML = `<p>Temperature: ${currentTemp}°C</p>
                                <p>Weather: ${currentDesc}</p>
                                <h3>Three-Day Forecast</h3>`;

            // Loop through forecast (every 8th index represents a new day)
            for (let i = 8; i <= 24; i += 8) {
                let date = new Date(data.list[i].dt * 1000).toDateString();
                let temp = Math.round(data.list[i].main.temp);
                let desc = capitalizeWords(data.list[i].weather[0].description);

                forecastHTML += `<p><strong>${date}</strong>: ${temp}°C, ${desc}</p>`;
            }

            weatherInfo.innerHTML = forecastHTML;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    // Member Spotlight Section
    fetch('members.json')
        .then(response => response.json())
        .then(members => {
            const spotlightContainer = document.querySelector('.spotlight-container');
            const goldAndSilverMembers = members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
            const shuffledMembers = shuffleArray(goldAndSilverMembers).slice(0, 3);

            shuffledMembers.forEach(member => {
                const spotlightCard = document.createElement('div');
                spotlightCard.classList.add('spotlight-card');
                spotlightCard.innerHTML = `
                    <img src="${member.logo}" alt="${member.name} Logo">
                    <h3>${member.name}</h3>
                    <p>${member.phone}</p>
                    <p>${member.address}</p>
                    <a href="${member.website}" target="_blank">${member.website}</a>
                    <p>Membership Level: ${member.membershipLevel}</p>
                `;
                spotlightContainer.appendChild(spotlightCard);
            });
        })
        .catch(error => console.error('Error fetching member data:', error));

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});