import {FormatoDeElemento} from './FormatoDeElemento';
import {Formato} from './FormatoDeElemento';

export class Circulo extends FormatoDeElemento{
    raio: number;

    constructor(raio: number){
        super();
        
        this.raio = raio;
    }

    desenhar(): void {
        console.log(`Foi desenhado um círculo com ${this.raio} centímetros de raio\n`);
    };

    redimensionar(tamanhoExtra: number, tipo: Formato): void {
        this.raio += tamanhoExtra;

        if(tipo==='raio'){
            console.log(`Foi desenhado um círculo de raio com ${this.raio} centímetros.\n`);
        }else{
            console.log('Insira "raio" no parâmetro "tipo" para adicionar um valor de raio do círculo.\n');
        }
       
    };
}