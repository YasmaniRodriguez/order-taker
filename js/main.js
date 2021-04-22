import './schema.js'

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

// var category = document.getElementsByClassName('category');
// console.log(category[0].classList[1]);
// var cl = 1;

// var ctgId = (category[0].classList[cl]);
// category[0].onclick = function() {
//     document.getElementById(ctgId).checked = true;
// }

// var ctgId = (category[1].classList[cl]);
// category[1].onclick = function() {
//     document.getElementById(ctgId).checked = true;
// }

// var ctgId = (category[2].classList[cl]);
// category[2].onclick = function() {
//     document.getElementById(ctgId).checked = true;
// }

// var ctgId = (category[3].classList[cl]);
// category[3].onclick = function() {
//     document.getElementById(ctgId).checked = true;
// }

// console.log(localStorage.getItem('categories'));

///////////////////////////////////////////////////////////
var categories = JSON.parse(localStorage.getItem('categories'));
var products = JSON.parse(localStorage.getItem('products'));
var pagecontent = document.getElementById('pgc');
var productcategory = document.getElementById('ctg');
var productcatalog = document.getElementById('pdt');

for(const ctg of categories) {
    let checkctg = document.createElement("input");
    let divctg = document.createElement("div");
    pagecontent.appendChild(checkctg);
    checkctg.type = "radio";
    checkctg.id = ctg.name;
    checkctg.name = "ctg";
    divctg.innerHTML = `
                        <p>${ctg.description}</p>
                       `;
    productcategory.appendChild(divctg);
    divctg.classList.add("category");
    divctg.classList.add(ctg.name);
}

for(const pdt of products) {
    let divpdt = document.createElement("div");
    productcatalog.appendChild(divpdt);
    divpdt.classList.add("product");
    divpdt.classList.add(pdt.category);
    divpdt.id = pdt.name;
    divpdt.innerHTML = `
                        <p>${pdt.description}</p>
                       `;
}