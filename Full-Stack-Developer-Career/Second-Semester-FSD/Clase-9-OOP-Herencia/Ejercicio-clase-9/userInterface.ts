import { Telefono } from "./telefono";
import { TelefonoConCamara } from "./telefono-con-camara";
import { TelefonoConRadio } from "./telefono-con-radio";

const telCameraOne = new TelefonoConCamara(true, 15)
const telRadioOne = new TelefonoConRadio(false, 15, 95.5)

telCameraOne.sacarFoto()
telRadioOne.verFrecuenciaActual()