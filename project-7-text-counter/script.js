const textarea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

textarea.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

function updateCounter() {
  totalCounter.innerText = textarea.value.trim().length;
  remainingCounter.innerText =
    textarea.getAttribute("maxLength") - textarea.value.trim().length;
}