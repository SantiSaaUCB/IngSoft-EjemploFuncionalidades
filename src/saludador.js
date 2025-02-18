function saludarHorayGenero(name, genero) {
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

  if (genero.toLowerCase() === "masculino") {
    saludo += ", señor " + name + "!";
  } else if (genero.toLowerCase() === "femenino") {
    saludo += ", señora " + name + "!";
  } else {
    saludo +=  " " + name + "!";
  }

    return saludo;
}

export default saludarHorayGenero;