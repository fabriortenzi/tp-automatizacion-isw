import { describe, expect, test } from "bun:test";
import { calcularDescuento } from "../src/calcularDescuento";

export const precioBase = 1000

describe('Tests por metodo tablas de decision', () => {
  test('edad entre 0 y 17, dias de antelacion <= 10 debe dar un descuento de $50', () => {
    expect(calcularDescuento(5, 7, precioBase)).toEqual(50)
  })

  test('edad entre 0 y 17, dias de antelacion > 10 debe dar un descuento de $200', () => {
    expect(calcularDescuento(5, 13, precioBase)).toEqual(200)
  })

  test('edad entre 18 y 64, dias de antelacion <= 10 debe dar un descuento de $0', () => {
    expect(calcularDescuento(20, 7, precioBase)).toEqual(0)
  })

  test('edad entre 18 y 64, dias de antelacion > 10 debe dar un descuento de $200', () => {
    expect(calcularDescuento(20, 13, precioBase)).toEqual(200)
  })

  test('edad mayor o igual a 65, dias de antelacion <= 10 debe dar un descuento de $150', () => {
    expect(calcularDescuento(70, 7, precioBase)).toEqual(150)
  })

  test('edad mayor o igual a 65, dias de antelacion > 10 debe dar un descuento de $200', () => {
    expect(calcularDescuento(70, 13, precioBase)).toEqual(200)
  })
})
