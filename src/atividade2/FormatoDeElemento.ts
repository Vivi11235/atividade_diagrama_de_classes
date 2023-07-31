export type Formato = 'raio'|'altura'|'comprimento';

export abstract class FormatoDeElemento {
    abstract desenhar(): void;
    abstract redimensionar(tamanhoExtra: number, tipo: Formato): void;
}