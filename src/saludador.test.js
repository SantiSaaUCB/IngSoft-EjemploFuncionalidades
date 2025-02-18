import saludarHorayGenero from "./saludador.js";

test("Saludo para masculino en la mañana", () => {
  const saludo = saludarHorayGenero("Carlos", "masculino");
  expect(saludo).toMatch(/señor Carlos!/);
});

test("Saludo para femenino en la noche", () => {
  const saludo = saludarHorayGenero("Maria", "femenino");
  expect(saludo).toMatch(/señora Maria!/);
});

test("Saludo sin género especificado", () => {
  const saludo = saludarHorayGenero("Alex", "otro");
  expect(saludo).toMatch(/Alex!/);
});
