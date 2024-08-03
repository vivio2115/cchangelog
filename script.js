document.addEventListener("DOMContentLoaded", function() {
    fetch('changelog.json')
        .then(response => response.json())
        .then(data => {
            const versionElement = document.getElementById('version');
            versionElement.textContent = data.version;

            const changelogContainer = document.getElementById('changelog');
            data.changelog.forEach(item => {
                const changelogItem = document.createElement('div');
                changelogItem.className = 'changelog-item';
                changelogItem.innerHTML = `
                    <h2>${item.version}</h2>
                    <p>${item.description}</p>
                `;
                changelogContainer.appendChild(changelogItem);
            });
        })
        .catch(error => console.error('Error fetching changelog:', error));
});
