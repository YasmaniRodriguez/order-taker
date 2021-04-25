import './schema.js'
import { Order, OrderRow} from './order.js'

//CONFIGURACION DEL SCHEMA//

var categories = JSON.parse(localStorage.getItem('categories'));
var products = JSON.parse(localStorage.getItem('products'));

var pagecontent = document.getElementById('pgbdy');
var productcategory = document.getElementById('ctg');
var productcatalog = document.getElementById('pdt');

for(const ctg of categories) {
    let checkctg = document.createElement("input");
    let divctg = document.createElement("div");
    pagecontent.insertBefore(checkctg,productcategory);
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

var ctgcards = document.getElementsByClassName('category');
var clrow = 1;
var breadcrumbcs = document.getElementById('cs');

ctgcards[0].onclick = function () {
    var ctgid = ctgcards[0].classList[clrow];
    document.getElementById(ctgid).checked = true;
    breadcrumbcs.style.display = 'inline-block';
}

ctgcards[1].onclick = function () {
    var ctgid = ctgcards[1].classList[clrow];
    document.getElementById(ctgid).checked = true;
    breadcrumbcs.style.display = 'inline-block';
}

ctgcards[2].onclick = function () {
    var ctgid = ctgcards[2].classList[clrow];
    document.getElementById(ctgid).checked = true;
    breadcrumbcs.style.display = 'inline-block';
}

ctgcards[3].onclick = function () {
    var ctgid = ctgcards[3].classList[clrow];
    document.getElementById(ctgid).checked = true;
    breadcrumbcs.style.display = 'inline-block';
}

//GESTION DE LA ORDEN DE PEDIDO//
const saveSession = (key, value) => {sessionStorage.setItem(key, value)};
var orders = [];
orders.push(new Order("20210423132518", "357951080498135")); 
saveSession('orders',JSON.stringify(orders));

const currentorder = JSON.parse(sessionStorage.getItem('orders'));

var orderheader = document.getElementsByClassName('ohdr'); 
var orderbody = document.getElementById('obdy');
var orderfooter = document.getElementsByClassName('oftr');
var pdtcards = document.getElementsByClassName('product');
var ordercontainer = document.getElementById('order');

pdtcards[0].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[1].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[2].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[3].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[4].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[5].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[6].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[7].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[8].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[9].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[10].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[11].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[12].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[13].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[14].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[15].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[16].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[17].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[18].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

pdtcards[19].onclick = function() {
    let orderrow = document.createElement('div');
    orderbody.appendChild(orderrow);
    orderrow.classList.add("orderrow");
}

//OVERLAY//
var overlay = document.getElementById('overlay');
var ovlystr = document.getElementById('ovlystr');
var ovlypmt = document.getElementById('ovlypmt');
var ovlyodr = document.getElementById('ovlyodr');
var ovlycls = document.getElementsByClassName('overlay-close-btn');

var actions = document.getElementsByClassName('action');

actions[0].onclick = function() {
    overlay.style.display='flex';
    ovlystr.checked = true;
}

actions[1].onclick = function() {
    overlay.style.display='flex';
    ovlypmt.checked = true;
}

actions[2].onclick = function() {
    overlay.style.display='flex';
    ovlyodr.checked = true;
}

ovlycls[0].onclick = function() {
    overlay.style.display='none';
}

ovlycls[1].onclick = function() {
    overlay.style.display='none';
}

ovlycls[2].onclick = function() {
    overlay.style.display='none';
}

//BREADCRUMB//

var home = document.getElementById('hs');
console.log(home);
var allcheckctg = document.getElementsByName('ctg');
console.log(allcheckctg);

home.onclick = function() {
    breadcrumbcs.style.display = 'none';
    document.getElementById('ctg01').checked = false;
    document.getElementById('ctg02').checked = false;
    document.getElementById('ctg03').checked = false;
    document.getElementById('ctg04').checked = false;

}