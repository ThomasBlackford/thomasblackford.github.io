document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const generateBtn = document.getElementById("generateHTML");
    const heading = document.querySelector("main h2");

    if (!generateBtn || !form) return;

    generateBtn.addEventListener("click", () => {
        const formData = new FormData(form);

        const firstName = formData.get("firstName");
        const middleName = formData.get("middleName");
        const nickname = formData.get("nickname");
        const lastName = formData.get("lastName");
        const ackStatement = formData.get("ackStatement");
        const ackDate = formData.get("ackDate");
        const mascotAdj = formData.get("mascotAdj");
        const mascotAnimal = formData.get("mascotAnimal");
        const divider = formData.get("divider");
        const caption = formData.get("caption");
        const personalStatement = formData.get("personalStatement");
        const bullets = formData.get("bullets").split(",").map(b => b.trim());
        const quote = formData.get("quote");
        const quoteAuthor = formData.get("quoteAuthor");
        const funny = formData.get("funny");
        const share = formData.get("share");
        const links = [
            formData.get("link1"),
            formData.get("link2"),
            formData.get("link3"),
            formData.get("link4"),
            formData.get("link5")
        ].filter(l => l);

        const courses = Array.from(document.querySelectorAll(".course")).map(div => ({
            dept: div.querySelector("input[name='dept']").value,
            number: div.querySelector("input[name='number']").value,
            name: div.querySelector("input[name='name']").value,
            reason: div.querySelector("input[name='reason']").value
        }));

        const generatedHTML = `
<h2>Introduction HTML</h2>
<h3>${firstName} ${middleName ? middleName + " " : ""}"${nickname || firstName}" ${lastName} ${divider} ${mascotAdj} ${mascotAnimal}</h3>
<figure>
    <img src="images/profile.jpg" alt="Profile photo of ${firstName} ${lastName}" />
    <figcaption>${caption}</figcaption>
</figure>
<p>${personalStatement}</p>
<ul>
    ${bullets.map(b => `<li><strong>${b}:</strong> Description here.</li>`).join("\n    ")}
</ul>
<h4>Courses</h4>
<ul>
    ${courses.map(c => `<li>${c.dept} ${c.number} — ${c.name}: ${c.reason}</li>`).join("\n    ")}
</ul>
<blockquote>"${quote}" — ${quoteAuthor}</blockquote>
${funny ? `<p><strong>Funny thing:</strong> ${funny}</p>` : ""}
${share ? `<p><strong>Something to share:</strong> ${share}</p>` : ""}
<h4>Links</h4>
<ul>
    ${links.map(l => `<li><a href="${l}" target="_blank">${l}</a></li>`).join("\n    ")}
</ul>
<p><em>${ackStatement}</em> (${ackDate})</p>`;

        heading.textContent = "Introduction HTML";
        const preBlock = document.createElement("pre");
        const codeBlock = document.createElement("code");
        codeBlock.classList.add("language-html");
        codeBlock.textContent = generatedHTML.trim();
        preBlock.appendChild(codeBlock);

        form.replaceWith(preBlock);

        const hljsLink = document.createElement("link");
        hljsLink.rel = "stylesheet";
        hljsLink.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css";
        document.head.appendChild(hljsLink);

        const hljsScript = document.createElement("script");
        hljsScript.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js";
        hljsScript.onload = () => hljs.highlightAll();
        document.body.appendChild(hljsScript);
    });
});
