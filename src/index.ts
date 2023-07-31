import {Item} from './atividade1/Item';
import {Pedido} from './atividade1/Pedido';
import {FormatoDeElemento} from './atividade2/FormatoDeElemento';
import {Circulo} from './atividade2/Circulo';
import {Retangulo} from './atividade2/Retangulo';


const item = new Item(100, 'blusa', 'blusa leve cor verde');

const pedido = new Pedido();
pedido.adicionarItem(item);

console.log(pedido);

const circulo = new Circulo(30);
circulo.desenhar()
circulo.redimensionar(10, 'raio');

const retangulo = new Retangulo(100, 20);
retangulo.desenhar();
retangulo.redimensionar(30, 'comprimento');
retangulo.redimensionar(5, 'altura');