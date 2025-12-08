document.addEventListener("DOMContentLoaded", (() => {
    // Create a new footer element
    const newFooter = document.createElement('div');

    // Load the footer component
    fetch('components/footer.html')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            newFooter.innerHTML = data;

            // Replace the existing footer or add a new one
            const footer = document.getElementById("dynamic-footer") || document.querySelector("footer");
            if (footer) {
                footer.parentNode.replaceChild(newFooter.firstElementChild, footer);
            } else {
                // If no footer exists, add it at the end of the body
                document.body.appendChild(newFooter.firstElementChild);
            }

            // Set the current year
            const yearSpan = document.getElementById('current-year');
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }
        })
        .catch((error) => {
            console.error('Error loading footer component:', error);
        });
}));
