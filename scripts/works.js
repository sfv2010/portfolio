document.addEventListener("DOMContentLoaded", function () {
    const worksContainer = document.getElementById("works-container");

    // URLから言語情報を取得
    const urlParams = new URLSearchParams(window.location.search);
    const language = urlParams.get("lang") || "fr"; // デフォルトはフランス語

    // 言語に応じたコンテンツ
    const items = {
        fr: [
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
        ],
        jp: [
            {
                title: "フランス語と日本語の交換サイト",
                imageUrl: "img/bubble2.png",
                imageAlt: "フランスと日本の写真付きサイト",
            },
            {
                title: "カフェのサイト",
                imageUrl: "img/sayacafe.png",
                imageAlt: "カフェの写真付きサイト",
            },
            {
                title: "従業員管理アプリケーション",
                imageUrl: "img/image.png",
                imageAlt: "フォーム付きサイト",
            },
            {
                title: "レストランのサイト",
                imageUrl: "img/ohmy.png",
                imageAlt: "料理の写真付きサイト",
            },
        ],
    };

    const selectedItems = items[language] || items["fr"]; // 言語が無い場合、デフォルトはフランス語

    selectedItems.forEach((item) => {
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
