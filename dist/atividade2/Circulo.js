"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
const FormatoDeElemento_1 = require("./FormatoDeElemento");
class Circulo extends FormatoDeElemento_1.FormatoDeElemento {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    desenhar() {
        console.log(`Foi desenhado um círculo com ${this.raio} centímetros de raio\n`);
    }
    ;
    redimensionar(tamanhoExtra, tipo) {
        this.raio += tamanhoExtra;
        if (tipo === 'raio') {
            console.log(`Foi desenhado um círculo de raio com ${this.raio} centímetros.\n`);
        }
        else {
            console.log('Insira "raio" no parâmetro "tipo" para adicionar um valor de raio do círculo.\n');
        }
    }
    ;
}
exports.Circulo = Circulo;
