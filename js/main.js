import './schema.js'
import { createOrderID, createCustomerID } from './function.js';
import { CustomerOrder, CustomerOrderRow} from './order.js'

//mostrar productos al hacer click en categoria:
var productCategory = document.getElementById('product-category');
var productCatalog = document.getElementById('product-catalog');
var category = document.getElementsByClassName('category');
var product = document.getElementsByClassName('product');
var homeBreadcrumb = document.getElementById('home-breadcrumb');
var categoryBreadcrumb = document.getElementById('category-breadcrumb');
var categoryBreadcrumbText = document.getElementById('ctgy-bdc-text');

for(const ctg of category) {
    ctg.addEventListener("click", showProduct);
}

function showProduct(e) {
    let category = e.path[1].id;
    let categoryname = e.path[1].children[0].innerText;

    productCategory.style.display="none";
    productCatalog.style.display="flex";
    categoryBreadcrumb.style.display = 'inline-block';
    categoryBreadcrumbText.innerHTML = categoryname;

    for(const pdt of product) {
        let pdtctg = pdt.classList[1];
        if(pdtctg == category) {
            pdt.style.display="flex";
        }
    }
}

//cerrar la vista de productos y regresar a la vista de categorias:
homeBreadcrumb.addEventListener("click", showCategory);

function showCategory(e) {
    categoryBreadcrumb.style.display="none";
    productCatalog.style.display="none";

    for(const pdt of product) {
        pdt.style.display="none";
    }

    productCategory.style.display="flex";
}

//abrir y cerrar el oberlay:
var overlay = document.getElementById('overlay');
var storePopUp = document.getElementById('store-pop-up');
var promotionPopUp = document.getElementById('promotion-pop-up');
var orderPopUp = document.getElementById('order-pop-up');
var goBackBtn = document.getElementById('go-back-btn');

//seleccionar los 3 call-to-action que abriran el overlay:
var actions = document.getElementsByClassName('action');

for(const act of actions) {
    let storeInfoBtn = document.getElementById('store-info-btn');
    let promotionInfoBtn = document.getElementById('promotion-info-btn');
    let shoppingCartBtn = document.getElementById('shopping-cart-btn');
    act.addEventListener("click",openOverlay);
}

function openOverlay(e) {
    let actionid = e.path[1].id;
    overlay.style.display="flex";
    goBackBtn.style.display="flex";
    console.log(closeOverlay);

    while(actionid != "ESC") {
        switch(actionid) {
            case "store-info-btn":
                storePopUp.style.display="block";
                break;
            case "promotion-info-btn":
                promotionPopUp.style.display="block";
                break
            case "shopping-cart-btn":
                orderPopUp.style.display="block";
                break;
            default:
                console.log("cómo diablos hiciste para llegar aca?")
                break;
        }
        actionid = "ESC"
    }
}

goBackBtn.addEventListener("click",closeOverlay);

function closeOverlay(e) {
    let allCTApopUp = document.getElementsByClassName('cta-pop-up');
    for(const popup of allCTApopUp) {
        popup.style.display="none";
    }
    overlay.style.display="none";
    goBackBtn.style.display="none";
}

//crear una orden para la session:

var orderId;

orderId = sessionStorage.getItem('currentorder');

if(orderId === null) {
    let orderId = createOrderID();
    sessionStorage.setItem('currentorder', orderId); 
}

//

var customer = localStorage.getItem('customer');
var orderId = sessionStorage.getItem('currentorder');

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

