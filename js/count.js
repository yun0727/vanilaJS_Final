const clockTitle = document.querySelector(".count");

function getClock() {
  const date = new Date();
  const xmas = new Date("2024-3-15");
  const diff = xmas - date;
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s `;
}
getClock();
setInterval(getClock, 1000);
