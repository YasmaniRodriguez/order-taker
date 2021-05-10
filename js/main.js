import './schema.js'
import { categories, products} from './schema.js'
import { buildHtmlOrderHeader, buildHtmlOrderRow } from './function.js';
import { Order, OrderRow} from './order.js'

//mostrar productos al hacer click en categoria:

var productCategory = $("#product-category");
var productCatalog = $("#product-catalog");
var category = $(".category");
var productContainer = $(".product");
var homeBreadcrumb = $("#home-breadcrumb");
var categoryBreadcrumb = $("#category-breadcrumb");
var categoryBreadcrumbText = $("#ctgy-bdc-text");

category.click(function(e) {
    let category = e.currentTarget.id;
    let categoryName = e.currentTarget.innerText;

    productCategory[0].style.display="none";
    productCatalog[0].style.display="flex";
    categoryBreadcrumb[0].style.display = 'inline-block';
    categoryBreadcrumbText[0].innerHTML = categoryName;

    for(const pdt of productContainer) {
        let pdtctg = pdt.classList[1];
        if(pdtctg == category) {
            pdt.style.display="flex";
        }
    }
});

//cerrar la vista de productos y regresar a la vista de categorias:

homeBreadcrumb.click(function(e) {
    categoryBreadcrumb[0].style.display="none";
    productCatalog[0].style.display="none";

    for(const pdt of productContainer) {
        pdt.style.display="none";
    }

    productCategory[0].style.display="flex";
});

//abrir overlay:

var overlay = $("#overlay");
var storePopUp = $("#store-pop-up");
var promotionPopUp = $("#promotion-pop-up");
var productPopUp = $("#product-pop-up");
var orderPopUp = $("#order-pop-up");
var goBackBtn = $("#go-back-btn");
var actions = $(".action");

actions.click(function(e) {
    let actionId = e.target.classList[1];
    overlay[0].style.display="flex";
    goBackBtn[0].style.display="flex";
    
    while(actionId != "ESC") {
        switch(actionId) {
            case "product-film":
                productPopUp[0].style.display="block";
                break;
            case "store-info-btn":
                storePopUp[0].style.display="block";
                break;
            case "promotion-info-btn":
                promotionPopUp[0].style.display="block";
                break
            case "shopping-cart-btn":
                orderPopUp[0].style.display="block";
                break;
            default:
                console.log("cómo diablos hiciste para llegar aca?")
                break;
        }
        actionId = "ESC"
    }
});

//cerrar overlay:

goBackBtn.click(function(e) {
    let allCTApopUp = document.getElementsByClassName('cta-pop-up');

    for(const popup of allCTApopUp) {
        popup.style.display="none";
    }
    overlay[0].style.display="none";
    goBackBtn[0].style.display="none";
});


//agregar nro de cliente y nro de orden a encabezado de la orden:
var orderHeader = $("#odr-hdr"); 
orderHeader.append(buildHtmlOrderHeader());

//agregar productos al pedido:
var addPdt = $(".product-add-btn");
var orderBody = $("#odr-bdy");

addPdt.click(function(e) {
    orderBody.append(buildHtmlOrderRow(e));   
});