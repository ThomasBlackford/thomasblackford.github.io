document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const generateBtn = document.getElementById("generateJSON");
  const heading = document.querySelector("main h2");

  if (!generateBtn || !form) return;

  generateBtn.addEventListener("click", () => {
    const fd = new FormData(form);

    const data = {
      firstName: fd.get("firstName"),
      preferredName: fd.get("nickname"),
      middleInitial: fd.get("middleName"),
      lastName: fd.get("lastName"),
      divider: fd.get("divider"),
      mascotAdjective: fd.get("mascotAdj"),
      mascotAnimal: fd.get("mascotAnimal"),
      image: "images/profile.jpg",
      imageCaption: fd.get("caption"),
      personalStatement: fd.get("personalStatement"),
      personalBackground: "Describe your personal background here.",
      professionalBackground: "Describe your professional background here.",
      academicBackground: "Describe your academic background here.",
      subjectBackground: "Describe your subject background here.",
      primaryComputer: "Describe your primary computer here.",
      courses: Array.from(document.querySelectorAll(".course")).map(div => ({
        department: div.querySelector("input[name='dept']").value,
        number: div.querySelector("input[name='number']").value,
        name: div.querySelector("input[name='name']").value,
        reason: div.querySelector("input[name='reason']").value
      })),
      links: [
        { name: "LinkedIn", href: fd.get("link1") },
        { name: "GitHub", href: fd.get("link2") },
        { name: "Portfolio", href: fd.get("link3") },
        { name: "Personal Project", href: fd.get("link4") },
        { name: "Another Link", href: fd.get("link5") }
      ]
    };

    const jsonOutput = JSON.stringify(data, null, 2);

    heading.textContent = "Introduction JSON";
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.classList.add("language-json");
    code.textContent = jsonOutput;
    pre.appendChild(code);
    form.replaceWith(pre);

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
