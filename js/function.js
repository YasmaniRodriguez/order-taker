import { categories, products} from './schema.js'

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
            <p>$${products.price}</p>
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

//a revisar para implementar jquery:

function buildHtmlOrderRow(e) {
    let ctgid = e.target.parentNode.classList[1];
    let pdtid = e.target.parentNode.id;
    let icon;
    let product;

    for(const ctg of categories) {
        if(ctgid === ctg.name) {
            icon = ctg.icon;
        }
    }

    for(const pdt of products) {
        if(pdtid == pdt.name) {
            product = pdt.description;
        }
    }

    return `
    <div class="orderrow" id=${pdtid}>
        <img src=${icon}>
        <p>${product}</p>
        <input type="number"> 
    </div>
    `
}

export { buildHtmlCategory, buildHtmlProduct, createOrderID, createCustomerID, buildHtmlOrderHeader, buildHtmlOrderRow };