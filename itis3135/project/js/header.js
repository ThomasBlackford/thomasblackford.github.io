document.addEventListener("DOMContentLoaded", () => {
    // Create a new header element
    const newHeader = document.createElement('div');

    // Load the header component
    fetch('components/header.html')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            newHeader.innerHTML = data;

            // Replace the existing header with the new one
            const header = document.querySelector('header');
            if (header) {
                header.parentNode.replaceChild(newHeader.firstElementChild, header);
            } else {
                // If no header exists, add it at the beginning of the body
                document.body.insertBefore(newHeader.firstElementChild, document.body.firstChild);
            }
        })
        .catch((error) => {
            console.error('Error loading header component:', error);
        });
});
