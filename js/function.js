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
        <div class="product-text">
            <p>${products.description}</p>
            <p>${products.price}</p>
        </div>
        <img src="${products.image}" alt="product image">
    </div>
    `
}

function buildHtmlOrderRow(e) {
    return `
    <p>${e.path[1].children[0].children[0].innerText}</p>
    <p>${e.path[1].children[0].children[1].innerText}</p>
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

export { buildHtmlCategory, buildHtmlProduct, createOrderID, createCustomerID, buildHtmlOrderRow };