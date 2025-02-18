import saludar from "./saludador.js";

const h1 = document.querySelector("#resultado-saludo");
const nameInput = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  if (name) {
    h1.textContent = saludar(name);
  } else {
    h1.textContent = "Hola";
  }
});