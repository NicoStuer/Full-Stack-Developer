import { Asalariado } from "./asalariado";
import { EmpleadoProduccion } from "./empleado-produccion";
import { EmpleadoDistribucion } from "./empleado-distribucion";

const asalariadoUno = new Asalariado('Juan', 12457852, 14, 180000)
const empleadoDistribucionUno = new EmpleadoDistribucion('Palermo', 'Juan', 3022541, 15, 168000)

empleadoDistribucionUno.getSalario()