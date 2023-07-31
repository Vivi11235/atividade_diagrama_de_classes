"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = void 0;
const FormatoDeElemento_1 = require("./FormatoDeElemento");
class Retangulo extends FormatoDeElemento_1.FormatoDeElemento {
    constructor(comprimento, altura) {
        super();
        this.comprimento = comprimento;
        this.altura = altura;
    }
    desenhar() {
        console.log(`Foi desenhado um retângulo de ${this.comprimento} centímetros de comprimento e ${this.altura} centímetros de altura.`);
    }
    redimensionar(tamanhoExtra, tipo) {
        if (tipo === 'altura') {
            this.altura += tamanhoExtra;
        }
        else if (tipo === 'comprimento') {
            this.comprimento += tamanhoExtra;
        }
        console.log(`O retângulo foi redimensionado para ter ${this.altura} centímetros de altura e ${this.comprimento} centímetros de comprimento.`);
    }
}
exports.Retangulo = Retangulo;
