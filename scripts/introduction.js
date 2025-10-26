document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const coursesDiv = document.getElementById("courses");
    const addCourseBtn = document.getElementById("addCourse");
    const clearBtn = document.getElementById("clearButton");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        buildIntroPage();
    });

    addCourseBtn.addEventListener("click", () => {
        const div = document.createElement("div");
        div.className = "course";
        div.innerHTML = `
            <input type="text" name="dept" placeholder="Dept" required>
            <input type="text" name="number" placeholder="Number" required>
            <input type="text" name="name" placeholder="Name" required>
            <input type="text" name="reason" placeholder="Reason" required>
            <button type="button" class="deleteCourse">Delete</button>
        `;
        coursesDiv.appendChild(div);

        div.querySelector(".deleteCourse").addEventListener("click", () => div.remove());
    });

    clearBtn.addEventListener("click", () => {
        form.querySelectorAll("input, textarea").forEach(el => el.value = "");
    });

    function buildIntroPage() {
        const data = Object.fromEntries(new FormData(form).entries());
        const file = form.querySelector("input[name='image']").files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const imgSrc = file ? reader.result : "../images/headshot.jpg";
            const bullets = data.bullets.split(",").map(b => `<li>${b.trim()}</li>`).join("");
            const links = [data.link1, data.link2, data.link3, data.link4, data.link5]
                .filter(Boolean)
                .map(link => `<li><a href="${link}" target="_blank">${link}</a></li>`)
                .join("");
            
            form.innerHTML = `
                <h2>${data.firstName} ${data.lastName}</h2>
                <figure>
                    <img src="${imgSrc}" alt="Profile Picture" width="250">
                    <figcaption>${data.caption}</figcaption>
                </figure>
                <section>
                    <h3>Background</h3>
                    <p>${data.personalStatement}</p>
                </section>
                <section>
                    <h3>Courses</h3>
                    <ul>${Array.from(coursesDiv.children).map(course => {
                        const inputs = course.querySelectorAll("input");
                        return `<li>${inputs[0].value} ${inputs[1].value} - ${inputs[2].value}<ul><li>${inputs[3].value}</li></ul></li>`;
                    }).join("")}</ul>
                </section>
                <section>
                    <h3>Quote</h3>
                    <blockquote>"${data.quote}" — ${data.quoteAuthor}</blockquote>
                </section>
                <section>
                    <h3>Links</h3>
                    <ul>${links}</ul>
                </section>
                <section>
                    <button type="button" onclick="location.reload()">Reset Form</button>
                </section>
            `;
        };

        if (file) reader.readAsDataURL(file);
        else reader.onload();
    }
});
