// npm install js-yaml

import yaml from 'js-yaml';

// Function to fetch YAML file
async function fetchYaml(url) {
    const response = await fetch(url);
    const text = await response.text();
    return yaml.safeLoad(text);
}

document.getElementById('getDataButton').addEventListener('click', async () => {
    try {
		// first test
		const msgContainer = document.getElementById('msg');
		msgContainer.innerHTML = `<p>You clicked</p>`;
        // Fetch API URL from YAML configuration
        /*const config = await fetchYaml('config.yaml');
        const apiUrl = config.api_url;

        // Fetch data from API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display data
        displayData(data);*/
    } catch (error) {
        console.error('Error:', error);
    }
});

function displayData(data) {
    const resultContainer = document.getElementById('apiResult');
    resultContainer.innerHTML = `
        <p>User ID: ${data.userId}</p>
        <p>Title: ${data.title}</p>
        <p>Completed: ${data.completed ? 'Yes' : 'No'}</p>
    `;
}
