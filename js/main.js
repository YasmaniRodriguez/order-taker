import { order, orderrow } from './order.js'

var orders = [];
var orderrows = [];
var complete;

var ordernr = prompt("Número de Orden");
var customer = prompt("Cliente");

while(complete != "si") {
    let rows = {};
    let product = prompt("Producto");
    let quantity = prompt("Cantidad");
    rows = (new orderrow(product, quantity));
    orderrows.push(rows);
    complete = prompt("Completado?");
}


orders.push(new order(ordernr, customer, orderrows));

console.log(orders);
