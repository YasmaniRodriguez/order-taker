import { categories, products, store } from './schema.js'
import { myOrderAmount } from './main.js'

var notificationContainer = $("#system-notification");
var notificationText = $("#system-notification > p");
var order = sessionStorage.getItem('order');
var customer = localStorage.getItem('customer');

function buildHtmlStoreHeader(store){
    return `
    <img id="store-background-profile" src=${store.background}>
    <img id="store-logo" src=${store.logo}>
    `
}

function buildHtmlStoreBody(store){
    return `
    <div>
        <p>Info. de Contacto</p>
        <a id="store-mail" href="mailto:${store.mail}"><i class="far fa-envelope fa-2x"></i></i></a>
        <a id="store-phone" href=${store.whatsapp}&text=Hola,%20soy%20el%20Cliente%20${customer}%20y%20mi%20Nro.%20de%20Orden%20es%20${order}><i class="fab fa-whatsapp fa-2x"></i></a>
    </div>
    <div>
        <p>Dónde encontrarnos</p>
        <iframe id="store-address" src=${store.address} allowfullscreen="" loading="lazy"></iframe>
    </div>
    `
}

function buildHtmlCategory(categories) {
    return `
    <div class="category" id="${categories.name}">
        <p>${categories.description}</p>
        <img src="${categories.image}" alt="category image">
    </div>
    `
}

function buildHtmlProduct(products) {
    return `
    <div class="product ${products.category}" id="${products.name}">
        <i class="fas fa-plus fa-2x product-add-btn"></i>
        <div class="action product-film"></div>
        <div class="product-galery">
            <img src=${products.image}>
        </div>
        <div class="product-description">
            <p>${products.description}</p>
            <p>${products.price}</p>
        </div>
    </div>
    `
}

function buildHtmlOrderHeader() {
    let customer = localStorage.getItem('customer');
    let order = sessionStorage.getItem('order');
    return `
    <div class="order-header-title">
        <p>Cliente:</p>
        <p>Pedido:</p>
    </div>
    <div class="order-header-data">
        <p>${customer}</p>
        <p>${order}</p>
    </div>
    `
}

function buildHtmlOrderRow(e) {
    let category = e.target.parentNode.classList[1];
    let name = e.target.parentNode.id;
    let icon;
    let description;
    let price;

    for(const ctg of categories) {
        if(category === ctg.name) {
            icon = ctg.icon;
        }
    }

    for(const pdt of products) {
        if(name == pdt.name) {
            description = pdt.description;
            price = pdt.price;
        }
    }

    return `
    <div class="orderrow ${name}">
        <img class="icon" src=${icon}>
        <p class="name">${name}</p>
        <p class="description">${description}</p>
        <p class="price">${price}</p>
        <input class="quantity" type="number">
        <p class="amount"></p>
        <i class="remove fas fa-times fa-2x"></i>
    </div>
    `
}

function buildHtmlOrderFooter(){
    return `
    <div class="order-footer">
        <p id="total-amount"></p>
    </div>
    `
};

function createOrderID() {
    let ouid = Date.now();
    return ouid;
}

function createCustomerID(){
    var dt = new Date().getTime();
    var cuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return cuid;
}

function getPromotions(){
    let date = new Date();
    let weekday = date.getDay();
    let file = 'data/promotions.json';

    $.getJSON(file, function(response, status){
        if(status === "success"){
            let promotions = response;
           
            promotions.forEach(promotion => {
                if(promotion.weekday === weekday){
                    console.log(promotion);
                }
            });
        }
    });
}

function postOrder(){
    let url = "http://localhost:3000/orders";
    const myOrderInfo = { customer: customer, order: order, amount: myOrderAmount};

    if(myOrderAmount > 1){
        $.post(url, myOrderInfo, function(response, status){
            if(status === "success"){
                notificationContainer.css("display", "flex");
                notificationText[0].innerHTML = "La Orden fue enviada al Proveedor";
            }
        });
    } else {notificationContainer.fadeIn()
                                 .css("display", "flex");
            notificationText[0].innerHTML = "No hay productos en la Orden";
            notificationContainer.fadeOut(4000);
    }
}

export { buildHtmlStoreHeader,
         buildHtmlStoreBody,
         buildHtmlCategory, 
         buildHtmlProduct, 
         buildHtmlOrderHeader, 
         buildHtmlOrderRow, 
         buildHtmlOrderFooter, 
         createOrderID, 
         createCustomerID, 
         getPromotions, 
         postOrder };