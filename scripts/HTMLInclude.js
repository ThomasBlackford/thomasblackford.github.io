function includeHTML() {
    const elements = document.querySelectorAll('[data-include-html]');
    elements.forEach(el => {
        const file = el.getAttribute('data-include-html');
        if (file) {
            fetch(file)
                .then(response => {
                    if (!response.ok) throw new Error('HTTP error ' + response.status);
                    return response.text();
                })
                .then(data => {
                    el.innerHTML = data;
                })
                .catch(err => {
                    el.innerHTML = "Content not found.";
                    console.error("Include Error:", err);
                });
        }
    });
}

document.addEventListener("DOMContentLoaded", includeHTML);
