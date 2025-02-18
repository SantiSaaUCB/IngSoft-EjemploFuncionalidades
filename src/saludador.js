function saludar(name) {
  return "Hola " + name;
}

function saludarHora(name) {
  const fecha = new Date();
  const horas = fecha.getHours();
  if (horas >= 6 && horas < 12) {
    return "¡Buenos días " + name + "!";
  } else if (horas >= 12 && horas < 20) {
    return "¡Buenas tardes " + name + "!";
  } else {
    return "¡Buenas noches " + name + "!";
  }
}

export default saludarHora;