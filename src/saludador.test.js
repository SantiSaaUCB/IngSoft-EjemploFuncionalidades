import saludar_Hora_Genero_Edad from "./saludador.js";

describe("Pruebas para saludar_Hora_Genero_Edad", () => {
  
  // Prueba 1: Saludar sin "señor" o "señora" si la edad es 30 o menor
  test("Debe saludar sin señor/señora si la edad es 30 o menor", () => {
    expect(saludar_Hora_Genero_Edad("Juan", "masculino", 25)).toMatch(/¡Buenos|¡Buenas/);
    expect(saludar_Hora_Genero_Edad("Ana", "femenino", 18)).toMatch(/¡Buenos|¡Buenas/);
  });

  // Prueba 2: Agregar 'señor' si la edad es mayor a 30 y es masculino
  test("Debe agregar 'señor' si la edad es mayor a 30 y es masculino", () => {
    expect(saludar_Hora_Genero_Edad("Carlos", "masculino", 35)).toMatch(/señor Carlos/);
  });

  // Prueba 3: Agregar 'señora' si la edad es mayor a 30 y es femenino
  test("Debe agregar 'señora' si la edad es mayor a 30 y es femenino", () => {
    expect(saludar_Hora_Genero_Edad("Laura", "femenino", 40)).toMatch(/señora Laura/);
  });

  // Prueba 4: Omitir 'señor' o 'señora' si la edad es 30 o menor
  test("Debe omitir 'señor/señora' si la edad es 30 o menor", () => {
    expect(saludar_Hora_Genero_Edad("Alex", "otro", 20)).toMatch(/¡Buenos|¡Buenas/);
  });

  // Prueba 5: Saludo con nombre y edad correctamente
  test("Debe devolver un saludo con el nombre y la edad correctamente", () => {
    const saludo = saludar_Hora_Genero_Edad("Santiago", "masculino", 31);
    expect(saludo).toMatch(/señor Santiago/);
  });

});