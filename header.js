document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {

        const linkPage = link.getAttribute("href")
            .split("/")
            .pop()
            .toLowerCase();

        link.classList.remove("active");

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        }

    });

});