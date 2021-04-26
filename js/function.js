function buildHtmlCategory(categories) {
    return `
    <div class="category ${categories.name}">
        <p>${categories.description}</p>
        <img src="${categories.image}" alt="category image">
    </div>
    `
}

function buildHtmlProduct(products) {
    return `
    <div class="product ${products.category}" id="${products.name}">
        <p>${products.description}</p>
        <img src="${products.image}" alt="product image">
    </div>
    `
}

export { buildHtmlCategory, buildHtmlProduct };