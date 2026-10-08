const bottone = document.getElementById("contatore");
let clic = 0;

bottone.addEventListener("click", () => {
  clic += 1;
  bottone.textContent = `Cliccato ${clic} ${clic === 1 ? "volta" : "volte"}`;
});
