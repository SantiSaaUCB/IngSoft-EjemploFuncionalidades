function saludar_Hora_Genero_Edad(name, genero, edad) {
  const fecha = new Date();
  const horas = fecha.getHours();
  let saludo = "";

  if (horas >= 6 && horas < 12) {
    saludo = "¡Buenos días";
  } else if (horas >= 12 && horas < 20) {
    saludo = "¡Buenas tardes";
  } else {
    saludo = "¡Buenas noches";
  }

  let tratamiento = "";
  if (edad > 30) {
    if (genero.toLowerCase() === "masculino") {
      tratamiento = "señor ";
    } else if (genero.toLowerCase() === "femenino") {
      tratamiento = "señora ";
    }
  }

  saludo += `, ${tratamiento}${name}!`;

  return saludo;
}

export default saludar_Hora_Genero_Edad;
