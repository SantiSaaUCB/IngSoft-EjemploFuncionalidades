import saludar_Hora_Genero_Edad from "./saludador.js";

describe("Pruebas para saludar_Hora_Genero_Edad", () => {
  test("Debe saludar sin señor/señora si la edad es 30 o menor", () => {
    expect(saludar_Hora_Genero_Edad("Juan", "masculino", 25)).toMatch(/¡Buenos|¡Buenas/);
    expect(saludar_Hora_Genero_Edad("Ana", "femenino", 18)).toMatch(/¡Buenos|¡Buenas/);
  });

  test("Debe agregar 'señor' si la edad es mayor a 30 y es masculino", () => {
    expect(saludar_Hora_Genero_Edad("Carlos", "masculino", 35)).toMatch(/señor Carlos/);
  });

  test("Debe agregar 'señora' si la edad es mayor a 30 y es femenino", () => {
    expect(saludar_Hora_Genero_Edad("Laura", "femenino", 40)).toMatch(/señora Laura/);
  });

  test("Debe omitir 'señor/señora' si la edad es 30 o menor", () => {
    expect(saludar_Hora_Genero_Edad("Alex", "otro", 20)).toMatch(/¡Buenos|¡Buenas/);
  });

  test("Debe devolver un saludo con el nombre y la edad correctamente", () => {
    const saludo = saludar_Hora_Genero_Edad("Santiago", "masculino", 31);
    expect(saludo).toMatch(/señor Santiago/);
  });
});
