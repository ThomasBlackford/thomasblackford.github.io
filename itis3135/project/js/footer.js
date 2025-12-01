document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("dynamic-footer");
    if (!footer) return;

    const year = new Date().getFullYear();

    footer.innerHTML = `
        <p>&copy; ${year} Bloons Money Maker Tool — Created by Thomas Blackford</p>
    `;
});
