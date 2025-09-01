import { Imprimivel } from "./imprimivel.js";

export function imprimir(...imprimiveis: Imprimivel[]) {
    for (let i of imprimiveis) {
        console.log(i.paraTexto());
    }
}
