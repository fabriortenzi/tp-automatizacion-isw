export const calcularDescuento = (edad: number, diasAntelacion: number, precioBase: number) => {
  if (edad < 0) throw "La edad no puede ser menor a 0"
  if (diasAntelacion < 0) throw "Los dias de antelacion no pueden ser menor a 0"

  let descuentoDias = 0;
  let descuentoEdad = 0;

  if (edad < 18) {
    descuentoEdad = 0.05
  } else if (edad >= 65) {
    descuentoEdad = 0.15
  }

  if (diasAntelacion >= 11) {
    descuentoDias = 0.2
  }

  return precioBase * Math.max(descuentoDias, descuentoEdad)
}