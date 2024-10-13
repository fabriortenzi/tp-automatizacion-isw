import { describe, expect, test } from "bun:test";
import { calcularDescuento } from "../src/calcularDescuento";
import { precioBase } from "./tablaDecision.test";

describe('particiones de equivalencia atributo edad', () => {
  describe('edad entre 0 y 17', () => {
    test('menor a 0 debe rechazar', () => {
      expect(() => calcularDescuento(-1, 2, 200)).toThrowError("La edad no puede ser menor a 0")
    })

    test('0 limite inferior', () => {
      expect(calcularDescuento(0, 7, precioBase)).toEqual(50)
    })

    test('17 limite superior', () => {
      expect(calcularDescuento(17, 7, precioBase)).toEqual(50)
    })
  })

  describe('edad entre 18 y 64', () => {
    test('18 limite inferior', () => {
      expect(calcularDescuento(18, 7, precioBase)).toEqual(0)
    })

    test('64 limite superior', () => {
      expect(calcularDescuento(64, 7, precioBase)).toEqual(0)
    })
  })

  describe('edad mayor o igual a 65', () => {
    test('65 limite inferior', () => {
      expect(calcularDescuento(65, 7, precioBase)).toEqual(150)
    })
  })
})

describe('particiones de equivalencia atributo dias de antelacion', () => {
  describe('entre 0 y 10', () => {
    test('menor a 0 debe rechazar', () => {
      expect(() => calcularDescuento(20, -1, 200)).toThrowError("Los dias de antelacion no pueden ser menor a 0")
    })

    test('0 limite inferior', () => {
      expect(calcularDescuento(20, 0, precioBase)).toEqual(0)
    })

    test('10 limite superior', () => {
      expect(calcularDescuento(20, 10, precioBase)).toEqual(0)
    })
  })

  describe('mayor o igual a 11', () => {
    test('11 limite inferior', () => {
      expect(calcularDescuento(20, 11, precioBase)).toEqual(200)
    })
  })
})