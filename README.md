# tp-automatizacion-isw

El programa toma dos valores numéricos enteros correspondientes a la edad del usuario y a los días de antelación con los que realizó el pago de un servicio y, en base a eso, calcula el descuento que se le debe aplicar. El descuento final es el mayor de los posibles, teniendo en cuenta las siguienes tablas:

| Edad     | Descuento |
|------------|------|
| Entre 0 y 17 años| 5%   |
| Entre 18 y 64 años| 0%   | 
| Mayor o igual a 65 años  | 15%   | 

| Días antelación     | Descuento |
|------------|------|
| Entre 0 y 10 días| 0%   |
| Más de 10 días| 20%   | 

## Particiones
### Edad:
  | Partición     | Descripción |
|------------|------|
| PV1 | >=0  y  <=17 |
| PV2 | >=18  y  <=64 |
| PV3 | >=65 |

### Días antelación:
  | Partición     | Descripción |
|------------|------|
| PV1 | >=0  y  <=10|
| PV2 | >=11 |

## Tabla de decisión
|Condiciones/Acciones|||||
|------------|------------|------|------------|------|
| Edad: | Entre 0 y 17 | Entre 18 y 64 | Mayor o igual a 65 | - |
| Días antelación:  | Entre 0 y 10 | Entre 0 y 10 | Entre 0 y 10 | Más de 10 |
|  | | | | | | |
| Descuento:  | 5% | 0% | 15% | 20% |

