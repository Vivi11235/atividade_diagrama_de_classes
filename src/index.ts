import {Item} from './atividade1/Item';
import {Pedido} from './atividade1/Pedido';

const item = new Item(100, 'blusa', 'blusa leve cor verde');

const pedido = new Pedido();
pedido.adicionarItem(item);

console.log(pedido);