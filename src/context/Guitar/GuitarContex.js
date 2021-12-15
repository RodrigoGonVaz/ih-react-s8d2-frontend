
// GUITAR CONTEXT
// INICIALIZACIÓN DEL CONTEXT, ESTO SIGNIFICA QUE EMPIEZA CON UN VALOR INICIAL DE NULL, PERO, CONFORME VAYAMOS AGREGANDO NUEVOS VALORES, ESE NULL VA A CAMBIAR A UN OBJETO
import { createContext } from "react";

//Metemos aqui variables globales (sustituye al props)
const GuitarContext = createContext(null)


export default GuitarContext