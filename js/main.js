import './schema.js'
import { categories, products} from './schema.js'
import { buildHtmlOrderHeader, buildHtmlOrderRow } from './function.js';
import { Order, OrderRow} from './order.js'

//mostrar productos al hacer click en categoria:
var productCategory = document.getElementById('product-category');
var productCatalog = document.getElementById('product-catalog');
var category = document.getElementsByClassName('category');
var productContainer = document.getElementsByClassName('product');
var homeBreadcrumb = document.getElementById('home-breadcrumb');
var categoryBreadcrumb = document.getElementById('category-breadcrumb');
var categoryBreadcrumbText = document.getElementById('ctgy-bdc-text');

for(const ctg of category) {
    ctg.addEventListener("click", showProduct);
}

function showProduct(e) {
    let category = e.path[1].id;
    let categoryName = e.path[1].children[0].innerText;

    productCategory.style.display="none";
    productCatalog.style.display="flex";
    categoryBreadcrumb.style.display = 'inline-block';
    categoryBreadcrumbText.innerHTML = categoryName;

    for(const pdt of productContainer) {
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

    for(const pdt of productContainer) {
        pdt.style.display="none";
    }

    productCategory.style.display="flex";
}

//abrir y cerrar el overlay:
var overlay = document.getElementById('overlay');
var storePopUp = document.getElementById('store-pop-up');
var promotionPopUp = document.getElementById('promotion-pop-up');
var productPopUp = document.getElementById('product-pop-up');
var orderPopUp = document.getElementById('order-pop-up');
var goBackBtn = document.getElementById('go-back-btn');

//seleccionar los call-to-action que abriran el overlay:
var actions = document.getElementsByClassName('action');

for(const act of actions) {
    act.addEventListener("click",openOverlay);
}

function openOverlay(e) {
    let actionId = e.target.classList[1];
    // let actionId = e.path[1].classList[1];
    overlay.style.display="flex";
    goBackBtn.style.display="flex";
    console.log(e);
    console.log(e.target.classList[1]);

    while(actionId != "ESC") {
        console.log(actionId);
        switch(actionId) {
            case "product-film":
                productPopUp.style.display="block";
                break;
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
        actionId = "ESC"
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

//agregar nro de cliente y nro de orden a encabezado de la orden:
var orderHeader = document.getElementById('odr-hdr');
orderHeader.innerHTML = buildHtmlOrderHeader();

//agregar productos al pedido:
var pdtQty = document.getElementsByClassName('pdtQty');

for(const pdt of pdtQty) {
    pdt.addEventListener("click",addRow);
}

function addRow(e) {
    let pdtQty = e.path[0].id;
    let qty = document.getElementById(pdtQty).value;
    buildHtmlOrderRow(e, qty);
}
