import saludarHorayGenero from "./saludador.js";

const h1 = document.querySelector("#resultado-saludo");
const nameInput = document.querySelector("#nombre");
const genderInput = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const gender = genderInput.value.trim().toLowerCase();

  if (name && gender) {
    h1.textContent = `${saludarHorayGenero(name, gender)}`;
  } else if (name) {
    h1.textContent = `Hola ${name}`;
  } else {
    h1.textContent = "Hola";
  }
});
