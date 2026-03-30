const input = document.getElementById("sizeInput");
const value = document.getElementById("sizeValue");
const box = document.getElementById("resizeBox");

input.addEventListener("input", () => {
    const newWidth = input.value + "px";
    box.style.width = newWidth;
    value.textContent = newWidth;
});