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
                imageUrl: "img/bubble.webp",
                imageAlt: "site avec photo de france et japon",
                linkUrl:
                    "https://www.loom.com/share/a0f5d58025684843b652742860f57516?sid=9314f83c-6fc6-4196-b504-fad3125006a2",
            },
            {
                title: "Site du café",
                imageUrl: "img/sayacafe.webp",
                imageAlt: "site avec photo de café",
                linkUrl: "https://sfv2010.github.io/site_sayacafe/",
            },
            {
                title: "Application de gestion des employés",
                imageUrl: "img/HRnet.webp",
                imageAlt: "site avec formulaire",
                linkUrl: "https://p14-wh.vercel.app/",
            },
            {
                title: "Site du restaurant",
                imageUrl: "img/ohmy.webp",
                imageAlt: "site avec photo de plat",
                linkUrl: "https://sfv2010.github.io/Projet3-ohmyfood/",
            },
        ],
        jp: [
            {
                title: "フランス語と日本語の交換サイト",
                imageUrl: "img/bubble.webp",
                imageAlt: "フランスと日本の写真付きサイト",
                linkUrl:
                    "https://www.loom.com/share/a0f5d58025684843b652742860f57516?sid=9314f83c-6fc6-4196-b504-fad3125006a2",
            },
            {
                title: "カフェのサイト",
                imageUrl: "img/sayacafe.webp",
                imageAlt: "カフェの写真付きサイト",
                linkUrl: "https://sfv2010.github.io/site_sayacafe/",
            },
            {
                title: "従業員管理アプリケーション",
                imageUrl: "img/HRnet.webp",
                imageAlt: "フォーム付きサイト",
                linkUrl: "https://p14-wh.vercel.app/",
            },
            {
                title: "レストランのサイト",
                imageUrl: "img/ohmy.webp",
                imageAlt: "料理の写真付きサイト",
                linkUrl: "https://sfv2010.github.io/Projet3-ohmyfood/",
            },
        ],
    };

    const selectedItems = items[language] || items["fr"]; // 言語が無い場合、デフォルトはフランス語

    selectedItems.forEach((item) => {
        const worksItem = document.createElement("div");
        worksItem.classList.add("works__item");

        const coverSlide = document.createElement("div");
        coverSlide.classList.add("coverSlide", "hoverDarken");

        const imgLink = document.createElement("a");
        imgLink.href = item.linkUrl;
        imgLink.target = "_blank";

        const img = document.createElement("img");
        img.src = item.imageUrl;
        img.alt = item.imageAlt;
        img.classList.add("imgZoom");

        imgLink.appendChild(img);
        coverSlide.appendChild(imgLink);
        worksItem.appendChild(coverSlide);

        const titleLink = document.createElement("a");
        titleLink.href = item.linkUrl;
        titleLink.target = "_blank";

        const worksTitle = document.createElement("p");
        worksTitle.classList.add("works__title");
        worksTitle.textContent = item.title;

        titleLink.appendChild(worksTitle);
        worksItem.appendChild(titleLink);

        worksContainer.appendChild(worksItem);
    });
});
