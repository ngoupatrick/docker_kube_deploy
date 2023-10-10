var apiUrl ="";

// Load the JSON configuration
fetch('config.json')
    .then(response => response.json())
    .then(config => {
        // Use the API URL from the configuration
        apiUrl = config.apiUrl;
        console.log(apiUrl); // Optional: Log the API URL for verification
        
    })
    .catch(error => {
        console.error('Error loading configuration:', error);
    });

function getDataFromAPI() {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    displayData(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
		
function displayData(data) {
            const resultContainer = document.getElementById('apiResult');
            resultContainer.innerHTML = `
                <p>User ID: ${data.userId}</p>
                <p>Title: ${data.title}</p>
                <p>Completed: ${data.completed ? 'Yes' : 'No'}</p>
            `;
        }
// script.js
document.getElementById('getDataButton').addEventListener('click', getDataFromAPI);

