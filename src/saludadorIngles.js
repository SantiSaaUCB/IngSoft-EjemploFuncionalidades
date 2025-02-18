function saludar_Hora_Genero_Edad_Ingles(name, genero, edad) {
     const fecha = new Date();
     const horas = fecha.getHours();
     let saludo = "";
   
     if (horas >= 6 && horas < 12) {
          saludo = "¡Good Morning";
     } else if (horas >= 12 && horas < 20) {
          saludo = "¡Good Afternoon";
     } else {
          saludo = "¡Good Night";
     }
   
     let tratamiento = "";
     if (edad > 30) {
          if (genero.toLowerCase() === "masculino") {
               tratamiento = "Mr. ";
          } else if (genero.toLowerCase() === "femenino") {
               tratamiento = "Mrs. ";
          }
     }
   
     saludo += `, ${tratamiento}${name}!`;
     return saludo;
}

export default saludar_Hora_Genero_Edad_Ingles;