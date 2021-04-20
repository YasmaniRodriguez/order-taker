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

var categorySection = document.getElementById('pctg');

var productSection = document.getElementById('pctl');

var ctg01 = document.getElementById('ctg01');
var ctg02 = document.getElementById('ctg02');
var ctg03 = document.getElementById('ctg03');
var ctg04 = document.getElementById('ctg04');

function getProductCatalog() {
    categorySection.style.display="none";
    productSection.style.display="flex";
}

ctg01.onclick = function() {
    getProductCatalog();
}

ctg02.onclick = function() {
    getProductCatalog();
}

ctg03.onclick = function() {
    getProductCatalog();
}

ctg04.onclick = function() {
    getProductCatalog();
}
