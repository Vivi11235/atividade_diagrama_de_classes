import {Item} from './Item';

export class Pedido {
    itens: Array<Item>;
    valorTotal: number;

    constructor() {
        this.itens = [];
        this.valorTotal = 0;
    }

    adicionarItem(item: Item) {
        this.itens.push(item);
        this.valorTotal += item.valor;
    }

}