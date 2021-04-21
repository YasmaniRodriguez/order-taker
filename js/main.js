// import { order, orderrow } from './order.js'

// var orders = [];
// var orderrows = [];
// var complete;

// var ordernr = prompt("Número de Orden");
// var customer = prompt("Cliente");

// while(complete != "si") {
//     let rows = {};
//     let product = prompt("Producto");
//     let quantity = prompt("Cantidad");
//     rows = (new orderrow(product, quantity));
//     orderrows.push(rows);
//     complete = prompt("Completado?");
// }

// orders.push(new order(ordernr, customer, orderrows));

// console.log(orders);

////////////////////////////////////////////////////////////

var category = document.getElementsByClassName('category');
var cl = 1;

var ctgId = (category[0].classList[cl]);
category[0].onclick = function() {
    document.getElementById(ctgId).checked = true;
}

var ctgId = (category[1].classList[cl]);
category[1].onclick = function() {
    document.getElementById(ctgId).checked = true;
}

var ctgId = (category[2].classList[cl]);
category[2].onclick = function() {
    document.getElementById(ctgId).checked = true;
}

var ctgId = (category[3].classList[cl]);
category[3].onclick = function() {
    document.getElementById(ctgId).checked = true;
}