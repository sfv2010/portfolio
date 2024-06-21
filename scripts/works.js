document.addEventListener("DOMContentLoaded", function () {
    const worksContainer = document.getElementById("works-container");

    const items = [
        {
            title: "Site d'échange de cours de français et de japonais",
            imageUrl: "img/bubble2.png",
            imageAlt: "site avec photo de france et japon",
        },
        {
            title: "Site du café",
            imageUrl: "img/sayacafe.png",
            imageAlt: "site avec photo de café",
        },
        {
            title: "Application de gestion des employés",
            imageUrl: "img/image.png",
            imageAlt: "site avec formulaire",
        },

        {
            title: "Site du restaurant",
            imageUrl: "img/ohmy.png",
            imageAlt: "site avec photo de plat",
        },
    ];

    items.forEach((item) => {
        const worksItem = document.createElement("div");
        worksItem.classList.add("works__item");

        const coverSlide = document.createElement("div");
        coverSlide.classList.add("coverSlide", "hoverDarken");

        const img = document.createElement("img");
        img.src = item.imageUrl;
        img.alt = item.imageAlt;
        img.classList.add("imgZoom");

        coverSlide.appendChild(img);
        worksItem.appendChild(coverSlide);

        const worksTitle = document.createElement("p");
        worksTitle.classList.add("works__title");
        worksTitle.textContent = item.title;

        worksItem.appendChild(worksTitle);

        worksContainer.appendChild(worksItem);
    });
});
