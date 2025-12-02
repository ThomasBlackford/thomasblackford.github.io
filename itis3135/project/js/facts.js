const funFacts = [
    "Banana Farms can generate hundreds of cash per round if fully upgraded!",
    "The Super Monkey can pop even MOAB-class bloons at max upgrades.",
    "Some Bloons TD maps have hidden strategies that reward creative placement.",
    "Crosspaths can dramatically change a tower's efficiency.",
    "The Bloons series started as a simple flash game in 2007.",
    "Support towers can boost nearby money-making towers' income.",
    "Rainbow Bloons contain multiple layers of stronger bloons inside.",
    "BAD stands for Big Airship of Doom, the toughest bloon in the game.",
    "MOAB stands for Massive Ornary Air Blimp.",
    "The Engineer Monkey can deploy sentry guns that automatically pop bloons.",
    "DDT stands for Dark Dirigible Titan, a fast and dangerous bloon type.",
    "The Vengeful True Sun God is one of the most powerful tower upgrades available.",
    "Some towers have unique abilities that can turn the tide of a game when used strategically.",
    "Ninja Monkeys can detect and pop Camo Bloons without any upgrades."
];

let factIndex = 0;
const factDisplay = document.getElementById("factDisplay");

function showNextFact() {
    factDisplay.style.opacity = 0;

    setTimeout(() => {
        factDisplay.textContent = funFacts[factIndex];
        factIndex = (factIndex + 1) % funFacts.length;

        factDisplay.style.opacity = 1;
    }, 800);
}


showNextFact();


setInterval(showNextFact, 5000);
