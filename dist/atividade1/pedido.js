"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor() {
        this.itens = [];
        this.valorTotal = 0;
    }
    adicionarItem(item) {
        this.itens.push(item);
        this.valorTotal += item.valor;
    }
}
exports.Pedido = Pedido;
