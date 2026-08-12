const envelope = document.querySelector(".envelope");
const openBtn = document.getElementById("openBtn");
const resetBtn = document.getElementById("resetBtn");

openBtn.addEventListener("click", () => {
  envelope.classList.add("open");
});

resetBtn.addEventListener("click", () => {
  envelope.classList.remove("open");
});