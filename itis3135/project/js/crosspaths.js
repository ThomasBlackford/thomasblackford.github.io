let data;
let selectedTower;
let selectedUpgrades = { top: 0 };

function updateStats() {
    const tower = selectedTower;
    const topLvl = selectedUpgrades.top;
    const upgrades = tower.paths.top;

    let totalCost = tower.baseCost;
    let bunches = tower.bunchesBase;
    let income = 0;

    let productionType = tower.productionType;
    let crateValue = 0;

    for (let lvl = 1; lvl <= topLvl; lvl++) {
        const u = upgrades[lvl];

        totalCost += u.cost;

        if (u.bunches) {
            bunches += u.bunches;
        }

        if (u.setProduction) {
            productionType = u.setProduction.productionType;
            crateValue = u.setProduction.crateValue;
            bunches = u.setProduction.crates;
        }
    }

    if (productionType === "bunch") {
        income = bunches * tower.valuePerBanana;
    } else {
        income = bunches * crateValue;
    }

    const roundsToPayoff = Math.ceil(totalCost / income);

    document.getElementById("totalCost").textContent = `Total Cost: $${totalCost}`;
    document.getElementById("incomePerRound").textContent = `Income Per Round: $${income}`;
    document.getElementById("roundsToPayoff").textContent = `Rounds Until Payoff: ${roundsToPayoff}`;
}

function updateTowerImage() {
    const img = document.getElementById("towerImage");

    if (selectedTower.image) {
        img.src = selectedTower.image;
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}



function renderUpgrades() {
    const container = document.getElementById("top-path-upgrades");
    container.innerHTML = "";

    const topUpgrades = selectedTower.paths.top;

    Object.keys(topUpgrades).forEach((lvl) => {
        const btn = document.createElement("button");
        btn.textContent = `Top ${lvl}`;
        btn.dataset.lvl = lvl;

        if (selectedUpgrades.top >= lvl) {
            btn.classList.add("active");
        }

        btn.addEventListener("click", () => {
            selectedUpgrades.top = parseInt(lvl);
            const upgrade = topUpgrades[lvl];
            const img = document.getElementById("towerImage");
            img.src = upgrade.image || selectedTower.image;
            
            renderUpgrades();
            updateStats();
        });

        container.appendChild(btn);
    });
}


function populateTowerDropdown() {
    const select = document.getElementById("towerSelect");

    Object.keys(data).forEach((key) => {
        const opt = document.createElement("option");
        opt.value = key;
        opt.textContent = data[key].displayName;
        select.appendChild(opt);
    });

    select.addEventListener("change", () => {
        selectedTower = data[select.value];
        selectedUpgrades.top = 0;

        updateTowerImage();
        renderUpgrades();
        updateStats();
    });

    select.dispatchEvent(new Event("change"));
}


fetch("data/crosspaths.json")
  .then((res) => res.json())
  .then((json) => {
      data = json;
      populateTowerDropdown();
  });

  