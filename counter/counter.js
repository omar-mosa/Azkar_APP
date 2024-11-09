let count = 0;
const counter = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");

incrementButton.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});
