const originalTitle = document.title
const lightningTitle = "Come back ⚡";

window.addEventListener("blur", () => {
    document.title = lightningTitle
})

window.addEventListener("focus", () => {
    document.title = originalTitle
})