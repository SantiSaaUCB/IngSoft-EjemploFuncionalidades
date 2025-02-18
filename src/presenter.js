import saludar_Hora_Genero_Edad from "./saludador.js";
import saludar_Hora_Genero_Edad_Ingles from "./saludadorIngles.js";

const h1 = document.querySelector("#resultado-saludo");
const nameInput = document.querySelector("#nombre");
const genderInput = document.querySelector("#genero");
const ageInput = document.querySelector("#edad");

const saludarEsButton = document.querySelector("#saludar-es");
const saludarEnButton = document.querySelector("#saludar-en");

saludarEsButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const gender = genderInput.value.trim();
  const age = parseInt(ageInput.value.trim(), 10);

  if (!name || !gender || isNaN(age)) {
    h1.textContent = "Por favor, llena todos los campos correctamente.";
  } else {
    h1.textContent = saludar_Hora_Genero_Edad(name, gender, age);
  }
});

saludarEnButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const gender = genderInput.value.trim();
  const age = parseInt(ageInput.value.trim(), 10);

  if (!name || !gender || isNaN(age)) {
    h1.textContent = "Please fill out all the fields correctly.";
  } else {
    h1.textContent = saludar_Hora_Genero_Edad_Ingles(name, gender, age);
  }
});
