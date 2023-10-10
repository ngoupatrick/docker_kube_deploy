//var apiUrl ="";


function getDataFromAPI() {
   // Load the JSON configuration
   //fetch('./conf/config.json')
   fetch('/usr/share/nginx/html/conf/config.json')
      .then(response => response.json())
      .then(config => {
         // Use the API URL from the configuration
         const apiUrl = config.apiUrl;
         console.log(apiUrl); // Optional: Log the API URL for verification
         fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
               displayData(data);
            })
            .catch(error => {
               console.error('Error fetching data:', error);
            });

      })
      .catch(error => {
         console.error('Error loading configuration:', error);
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