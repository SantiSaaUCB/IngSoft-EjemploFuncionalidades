import saludar_Hora_Genero_Edad from "./saludador.js";

const h1 = document.querySelector("#resultado-saludo");
const nameInput = document.querySelector("#nombre");
const genderInput = document.querySelector("#genero");
const ageInput = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const gender = genderInput.value.trim().toLowerCase();
  const age = parseInt(ageInput.value.trim(), 10); // Convertir edad a número entero

  if (name && gender && !isNaN(age)) {
    h1.textContent = saludar_Hora_Genero_Edad(name, gender, age);
  } else {
    h1.textContent = "Por favor, ingrese todos los datos.";
  }
});
