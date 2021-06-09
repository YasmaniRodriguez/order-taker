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
    <div id="store-contact">
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
        <i class="fas fa-cart-plus product-add-btn"></i>
        <div class="action product-film"></div>
        <div class="product-galery">
            <img src=${products.image}>
        </div>
        <div class="product-description">
            <p>${products.description}</p>
            <p>${products.price}</p>
        </div>
        <div
    </div>
    `
}

function buildHtmlOrderHeader() {
    let order = sessionStorage.getItem('order');
    return `
    <p>Nro. de Pedido:</p>
    <p>${order}</p>
    `
}

function buildHtmlOrderRow(e, category, name, qty, amount) {
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
        <input class="quantity" type="number" value=${qty}>
        <p class="amount">${amount}</p>
        <i class="fas fa-trash-alt remove"></i>
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

function createOrderID(){
    var dt = new Date().getTime();
    var ouid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return ouid;
}

function postOrder(){
    let url = "http://localhost:3000/orders";
    const myOrderInfo = { order: order, amount: myOrderAmount};

    if(myOrderAmount > 1){
        $.post(url, myOrderInfo, function(response, status){
            if(status === "success"){
                notificationContainer.fadeIn()
                                     .css("display", "flex");
                notificationText[0].innerHTML = "La Orden fue enviada al Proveedor";
                notificationContainer.fadeOut(4000);
            }
        });
    } else {notificationContainer.fadeIn()
                                 .css("display", "flex");
            notificationText[0].innerHTML = "No hay productos en la Orden";
            notificationContainer.fadeOut(4000);
    }
}

function buildHtmlPromotionBody() {
    let endpoint = "http://localhost:3000/promotions";
    let date = new Date();
    let day = date.getDay();
    let t0 = date.toLocaleTimeString('es-ES'); //saca la hora del date

    $.ajax({
        method: "GET",
        url: endpoint,
        success: (response) => {
            let promotions = response;
            let promotionBody = $("#prm-bdy");
            let promotionDetail = $("#prm-bdy div");

            promotions.forEach(promotion => {
                let t1 = promotion.from;
                let t2 = promotion.to;
                let pid = promotion.id;

                if(day == promotion.weekday && t0 >= t1 && t0 <= t2) {

                    let awards = promotion.award;
                    
                    awards.forEach(award => {
                        //se agregan dos nuevas propiedades a award
                        Object.defineProperty(award, 'description', {value: null, writable: true});
                        Object.defineProperty(award, 'icon', {value: null, writable: true});
                        Object.defineProperty(award, 'pid', {value: null, writable: true});

                        award.pid = pid; 

                        for(const pdt of products) {
                            //se consigue el nombre de cada producto
                            if(award.pdt === pdt.name) {
                                award.description = pdt.description;
                                //se consigue el icono de la categoria d ecada producto
                                for(const ctg of categories){
                                    if(pdt.category === ctg.name) {
                                        award.icon = ctg.icon
                                    }
                                }

                            }
                        }
                        
                    });
                                        
                    promotionDetail.remove(); //garantiza que no queden las promos desactualizadas
                    promotionBody.append(`
                    <div class="prm-card" id="${pid}">
                        <p>${promotion.description}</p>
                        <div class="prm-condition">
                            <h3>condiciones</h3>
                            <p>Si el valor del ticket, supera los ${promotion.condition}, podés llevar hasta ${promotion.maxselect} de las siguientes</p>
                            <h3>combinaciones</h3>
                            <div class="prm-award-container">
                            </div>
                        </div>
                        <div id="take-prm-btn">
                            <p>Aplicar</p>
                        </div>
                    </div>
                    `);

                    awards.forEach(award => {
                        let promotion = $("#prm-bdy")[0].lastElementChild.children[1].lastElementChild; //me aseguro que sea el ultimo prm-card agregado
                        //utilizo el modo vanilla porque con jquery, para promotion.append() me agrega un string y no una estructura html
                        let awardDiv = document.createElement("div");
                        awardDiv.className = "prm-award";
                        awardDiv.innerHTML = `
                        <input type="radio" name="${award.pid}">
                        <p>${award.qty}</p>
                        <img class="icon" src=${award.icon}>
                        <p>${award.description}</p>
                        `
                        promotion.appendChild(awardDiv);
                    });
                }
            });
        }
    });

}

function getPrice(product) {

    let price;

    for(const pdt of products) {
        if(product == pdt.name) {
            price = pdt.price;
        }
    }

    return price;
}

export { buildHtmlStoreHeader,
         buildHtmlStoreBody,
         buildHtmlCategory, 
         buildHtmlProduct, 
         buildHtmlOrderHeader, 
         buildHtmlOrderRow, 
         buildHtmlOrderFooter, 
         createOrderID, 
         postOrder,
         buildHtmlPromotionBody,
         getPrice};