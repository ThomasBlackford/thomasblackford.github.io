document.addEventListener('DOMContentLoaded', () => {
    const towerContainer = document.getElementById('towerContainer');
    const searchInput = document.getElementById('searchInput');
    const typeFilter = document.getElementById('typeFilter');
    let towers = [];

    fetch('../data/towers.json')
        .then(res => res.json())
        .then(data => {
            towers = data;
            displayTowers(towers);
        })
        .catch(err => {
            console.error('Error loading towers:', err);
            towerContainer.innerHTML = '<p>Failed to load tower data.</p>';
        });

    function displayTowers(list) {
        towerContainer.innerHTML = '';
        list.forEach(tower => {
            const card = document.createElement('article');
            card.classList.add('tower-card');
            card.innerHTML = `
                <img src="${tower.image}" alt="${tower.name}">
                <h3>${tower.name}</h3>
                <p><strong>Type:</strong> ${tower.type}</p>
                <p><strong>Cost:</strong> $${tower.cost}</p>
                <p><strong>Income:</strong> $${tower.income}/round</p>
                <p>${tower.description}</p>
            `;
            towerContainer.appendChild(card);
        });
    }

    function filterTowers() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedType = typeFilter.value;
        const filtered = towers.filter(t =>
            (selectedType === 'All' || t.type === selectedType) &&
            t.name.toLowerCase().includes(searchTerm)
        );
        displayTowers(filtered);
    }

    searchInput.addEventListener('input', filterTowers);
    typeFilter.addEventListener('change', filterTowers);
});
