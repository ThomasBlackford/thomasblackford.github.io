document.addEventListener("DOMContentLoaded", () => {
    const globalScripts = [
        "js/footer.js"
    ];

    globalScripts.forEach(src => {
        const script = document.createElement("script");
        script.src = src;
        document.body
    });
});
