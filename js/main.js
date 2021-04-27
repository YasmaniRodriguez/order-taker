import './schema.js'
import { buildHtmlCategory, buildHtmlProduct } from './function.js'
import { Order, OrderRow} from './order.js'

//mostrar productos al hacer click en categoria:
var productCategory = document.getElementById('product-category');
var productCatalog = document.getElementById('product-catalog');
var category = document.getElementsByClassName('category');
var product = document.getElementsByClassName('product');
var homeBreadcrumb = document.getElementById('home-breadcrumb');
var categoryBreadcrumb = document.getElementById('category-breadcrumb');


for(const ctg of category) {
    ctg.addEventListener("click", showProduct);
}

function showProduct(e) {
    productCategory.style.display="none";
    productCatalog.style.display="flex";
    categoryBreadcrumb.style.display = 'inline-block';

    let category = e.path[1].id;

    for(const pdt of product) {
        let pdtctg = pdt.classList[1];
        if(pdtctg == category) {
            pdt.style.display="flex";
        }
    }
}

homeBreadcrumb.onclick = function() {
    productCategory.style.display="flex";
    productCatalog.style.display="none";
    categoryBreadcrumb.style.display="none";
}

//BREADCRUMB//

// var home = document.getElementById('home-breadcrumb');
// var allcheckctg = document.getElementsByName('ctg');

// home.onclick = function() {
//     breadcrumbcs.style.display = 'none';
//     document.getElementById('ctg01').checked = false;
//     document.getElementById('ctg02').checked = false;
//     document.getElementById('ctg03').checked = false;
//     document.getElementById('ctg04').checked = false;

// }

// //GESTION DE LA ORDEN DE PEDIDO//
// const saveSession = (key, value) => {sessionStorage.setItem(key, value)};
// var orders = [];
// orders.push(new Order("20210423132518", "357951080498135")); 
// saveSession('orders',JSON.stringify(orders));

// const currentorder = JSON.parse(sessionStorage.getItem('orders'));

// var orderheader = document.getElementsByClassName('ohdr'); 
// var orderbody = document.getElementById('obdy');
// var orderfooter = document.getElementsByClassName('oftr');
// var pdtcards = document.getElementsByClassName('product');
// var ordercontainer = document.getElementById('order');

// pdtcards[0].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[1].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[2].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[3].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[4].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[5].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[6].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[7].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[8].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[9].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[10].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[11].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[12].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[13].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[14].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[15].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[16].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[17].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[18].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// pdtcards[19].onclick = function() {
//     let orderrow = document.createElement('div');
//     orderbody.appendChild(orderrow);
//     orderrow.classList.add("orderrow");
// }

// //OVERLAY//
// var overlay = document.getElementById('overlay');
// var ovlystr = document.getElementById('ovlystr');
// var ovlypmt = document.getElementById('ovlypmt');
// var ovlyodr = document.getElementById('ovlyodr');
// var ovlycls = document.getElementsByClassName('overlay-close-btn');

// var actions = document.getElementsByClassName('action');

// actions[0].onclick = function() {
//     overlay.style.display='flex';
//     ovlystr.checked = true;
// }

// actions[1].onclick = function() {
//     overlay.style.display='flex';
//     ovlypmt.checked = true;
// }

// actions[2].onclick = function() {
//     overlay.style.display='flex';
//     ovlyodr.checked = true;
// }

// ovlycls[0].onclick = function() {
//     overlay.style.display='none';
// }

// ovlycls[1].onclick = function() {
//     overlay.style.display='none';
// }

// ovlycls[2].onclick = function() {
//     overlay.style.display='none';
// }
