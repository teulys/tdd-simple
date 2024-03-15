const { describe, expect, test } = require('@jest/globals');
const Calc = require('./index');

describe('Métodos que me calculen el área de un cuadrado, un rectangulo, y un triángulo', () => {

    const calc = new Calc();

    // El método de calculo de area de un cuadrado debe recibir un solo valor y en base a el calcular el total.
    test('Calculo de area de un cuadrado 2 x 2 = 4', () => {
        expect(calc.cuadrado(2)).toBe(4);
    });


    // El método de cálculo del área de un rectángulo debe de recibir el alto y el ancho y en base a ellos hacer el cálculo total.
    test('Cálculo del área de un rectángulo 4 x 2 = 8', () => {
        expect(calc.rectangulo(4,2)).toBe(8);
    });

    // El método de cálculo de un triangulo debe de recibir la base y la altura y en base a ellos hacer el cálculo total.
    test('Cálculo de un triangulo 4 x 4 / 2 = 8', () => {
        expect(calc.triangulo(4,4)).toBe(8);
    });

    // Se debe de validar que se reciban los parámetros de forma obligatoria.
    test('Validar que se reciban los parámetros de forma obligatoria rectangulo', () => {
        expect(calc.rectangulo(4)).toBe('Error, los parametros son obligatorios');
    });

    test('Validar que se reciban los parámetros de forma obligatoria triangulo', () => {
        expect(calc.triangulo(4)).toBe('Error, los parametros son obligatorios');
    });

    test('Validar que se reciban los parámetros de forma obligatoria cuadrado', () => {
        expect(calc.cuadrado()).toBe('Error, los parametros son obligatorios');
    });


    // Se debe de validar que los valores recibido sean mayor que cero.
    test('Validar que los valores recibido sean mayor que cero rectangulo', () => {
        expect(calc.rectangulo(0, 2)).toBe('Error, el valor debe ser mayor a cero');
    });

    test('Validar que los valores recibido sean mayor que cero triangulo', () => {
        expect(calc.triangulo(4, 0)).toBe('Error, el valor debe ser mayor a cero');
    });

    test('Validar que los valores recibido sean mayor que cero cuadrado', () => {
        expect(calc.cuadrado(0)).toBe('Error, el valor debe ser mayor a cero');
    });

});