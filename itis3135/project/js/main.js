document.addEventListener("DOMContentLoaded", (() => {
    const globalScripts = [
        "js/header.js",
        "js/footer.js",
        "js/load.js",
        "js/facts.js"
    ];

    globalScripts.forEach((src) => {
        const script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
    });
}));