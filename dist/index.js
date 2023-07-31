"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./atividade1/Item");
const Pedido_1 = require("./atividade1/Pedido");
const item = new Item_1.Item(100, 'blusa', 'blusa leve cor verde');
const pedido = new Pedido_1.Pedido();
pedido.adicionarItem(item);
console.log(pedido);
