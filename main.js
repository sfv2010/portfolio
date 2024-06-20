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
animateText(nameElement, nameText, 200, 2000, () => {
    animateText(textElement, text, 150);
});

class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector(".menuMobile__btn");
        this.DOM.cover = document.querySelector(".menuMobile__cover");
        this.DOM.container = document.querySelector("#globalContainer");
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        const isTouchCapable =
            "ontouchstart" in window ||
            (window.DocumentTouch && document instanceof DocumentTouch);

        return isTouchCapable ? "touchstart" : "click";
    }
    _toggle() {
        this.DOM.container.classList.toggle("header__menuOpen");
    }

    //スマホで見られたときはタッチ、PCはクリックと切り替える
    _addEvent() {
        this.DOM.btn.addEventListener("click", this._toggle.bind(this));
        this.DOM.cover.addEventListener("click", this._toggle.bind(this));
    }
}

new MobileMenu();

document.addEventListener("DOMContentLoaded", function () {
    const ta = new TweenTextAnimation(".tween-animate");
    ta.animate();
});
