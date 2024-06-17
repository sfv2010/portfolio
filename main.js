//テキストが1文字づつ現れるアニメーション
// const textElement = document.querySelector(".textAnimation");

// const text = "Développeuse Web";
// let index = 0;

// function animateText() {
//     if (index < text.length) {
//         const char = text.charAt(index);
//         const span = document.createElement("span"); //envelopper chaque caractère dans un élément span
//         span.textContent = char;
//         span.style.transition = "opacity 0.4s ease-in-out"; // définir l'animation d'opacité
//         span.style.opacity = 0;
//         textElement.appendChild(span);
//         index++;

//         //  utilise async pour changer l'opacité après 0 ms
//         setTimeout(() => {
//             span.style.opacity = 1;
//         }, 50);

//         setTimeout(animateText, 200); //0.3s  caractère suivant
//     }
// }

// setTimeout(() => {
//     // テキストを2秒後に表示
//     textElement.style.display = "block";
//     animateText();
// }, 2000);

// 共通のアニメーション関数
// function animateText(element, text, delay = 200, initialDelay = 0) {
//     let index = 0;

//     function animate() {
//         if (index < text.length) {
//             const char = text.charAt(index);
//             const span = document.createElement("span"); //envelopper chaque caractère dans un élément span
//             span.textContent = char;
//             span.style.transition = "opacity 0.4s ease-in-out"; // définir l'animation d'opacité
//             span.style.opacity = 0;
//             element.appendChild(span);
//             index++;

//             //  utilise async pour changer l'opacité après 0 ms
//             setTimeout(() => {
//                 span.style.opacity = 1;
//             }, 50);

//             setTimeout(animate, delay); //caractère suivant
//         }
//     }

//     setTimeout(() => {
//         element.style.display = "block";
//         animate();
//     }, initialDelay);
// }

// // HTML要素の取得
// const nameElement = document.querySelector(".textAnimationName");
// const textElement = document.querySelector(".textAnimation");

// // アニメーションテキスト
// const nameText = "Sayaka VINCENT";
// const text = "Développeuse Web";

// // アニメーションの開始
// animateText(nameElement, nameText, 200, 2000); // 1秒後に開始
// animateText(textElement, text, 200, 5000); // 2秒後に開始

//テキストが1文字づつ現れるアニメーション
// 共通のアニメーション関数
function animateText(element, text, delay = 200, initialDelay = 0, callback) {
    let index = 0;

    function animate() {
        if (index < text.length) {
            const char = text.charAt(index); //JSの文字列メソッドで、指定されたインデックスの位置にある文字を返す。
            const span = document.createElement("span"); //envelopper chaque caractère dans un élément span
            span.textContent = char;
            span.style.transition = "opacity 0.4s ease-in-out";
            span.style.opacity = 0;
            element.appendChild(span);
            index++;

            setTimeout(() => {
                span.style.opacity = 1;
            }, 50);

            setTimeout(animate, delay); //caractère suivant
        } else if (callback) {
            callback();
        }
    }

    setTimeout(() => {
        element.style.display = "block";
        animate();
    }, initialDelay);
}

// HTML要素の取得
const nameElement = document.querySelector(".textAnimationName");
const textElement = document.querySelector(".textAnimation");

// アニメーションテキスト
const nameText = "Sayaka VINCENT";
const text = "Développeuse Web";

// Sayaka VINCENTのアニメーションを開始し、完了後にDéveloppeuse Webのアニメーションを開始
animateText(nameElement, nameText, 200, 1000, () => {
    animateText(textElement, text, 200);
});
