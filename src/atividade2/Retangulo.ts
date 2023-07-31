import { FormatoDeElemento } from "./FormatoDeElemento";
import {Formato} from './FormatoDeElemento';

export class Retangulo extends FormatoDeElemento {

    comprimento: number;
    altura: number;

    constructor(comprimento: number, altura: number) {
        super()
        this.comprimento = comprimento;
        this.altura = altura;
    }

    desenhar(): void {
        console.log(`Foi desenhado um retângulo de ${this.comprimento} centímetros de comprimento e ${this.altura} centímetros de altura.`);
    }

    redimensionar(tamanhoExtra: number, tipo: Formato): void {
        if(tipo==='altura'){
            this.altura += tamanhoExtra;
        }else if(tipo==='comprimento'){
            this.comprimento += tamanhoExtra;
        }

        console.log(`O retângulo foi redimensionado para ter ${this.altura} centímetros de altura e ${this.comprimento} centímetros de comprimento.`);
    }
}