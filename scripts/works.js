document.addEventListener("DOMContentLoaded", function () {
    const worksContainer = document.getElementById("works-container");

    const items = [
        { title: "Portfolio1", imageUrl: "img/mado1.jpg" },
        { title: "Portfolio2", imageUrl: "img/mado1.jpg" },
        { title: "Portfolio3", imageUrl: "img/mado1.jpg" },
        { title: "Portfolio4", imageUrl: "img/mado1.jpg" },
    ];

    items.forEach((item) => {
        const worksItem = document.createElement("div");
        worksItem.classList.add("works__item", "mb-md");

        const coverSlide = document.createElement("div");
        coverSlide.classList.add("coverSlide", "hoverDarken");

        const img = document.createElement("img");
        img.src = item.imageUrl;
        img.alt = "";
        img.classList.add("imgZoom");

        coverSlide.appendChild(img);
        worksItem.appendChild(coverSlide);

        const worksTitle = document.createElement("p");
        worksTitle.classList.add("works__title", "font-md");
        worksTitle.textContent = item.title;

        worksItem.appendChild(worksTitle);

        worksContainer.appendChild(worksItem);
    });
});
