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

                let icon;
                let colorClass;
                if (item.type === 'update') {
                    icon = '<i class="fas fa-star"></i>';
                    colorClass = 'update';
                } else if (item.type === 'patch') {
                    icon = '<i class="fas fa-feather-alt"></i>';
                    colorClass = 'patch';
                } else if (item.type === 'hotfix') {
                    icon = '<i class="fas fa-tint"></i>';
                    colorClass = 'hotfix';
                }

                changelogItem.innerHTML = `
                    <h2 class="${colorClass}">${icon}${item.version}</h2>
                    <p>${item.description}</p>
                `;
                changelogContainer.appendChild(changelogItem);
            });
        })
        .catch(error => console.error('Error fetching changelog:', error));
});
