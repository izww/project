let sections = document.querySelectorAll(".unshow");
let links = document.querySelectorAll(".link");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 500) {
            section.classList.remove("unshow");
        };
    });
});

links.forEach(link => {
    link.onclick = () => {
        window.location.assign(link.dataset.link);
    };
});