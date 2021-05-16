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

    productCategory.hide();
    productCatalog.show() 
                  .css("display", "flex");

    categoryBreadcrumb.show();
    categoryBreadcrumbText[0].innerHTML = categoryName;

    for(const pdt of productContainer) {
        let pdtctg = pdt.classList[1];

        if(pdtctg == category) {
            pdt.style.display="flex";
            // pdt.show()
            //    .css("display","flex");
        }
    }
});

//cerrar la vista de productos y regresar a la vista de categorias:

homeBreadcrumb.click(function(e) {
    categoryBreadcrumb.hide();
    productCatalog.hide();
    productContainer.hide();
    productCategory.show() 
                   .css("display", "flex");
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
    overlay.show()
           .css("display", "flex");
    goBackBtn.show()
             .css("display", "flex");
    
    while(actionId != "ESC") {
        switch(actionId) {
            case "product-film":
                productPopUp.show()
                            .css("display","block");
                break;
            case "store-info-btn":
                storePopUp.show()
                          .css("display","block");
                break;
            case "promotion-info-btn":
                promotionPopUp.show()
                              .css("display","block");
                break
            case "shopping-cart-btn":
                let removePdt = $(".orderrow i");
                orderPopUp.show()
                          .css("display","block");

                //eliminar productos de la orden:          
                removePdt.click(function(e){
                    let orderRowHtml = e.target.parentNode;
                    let pdtid = e.target.parentNode.classList[1];
                    orderRowHtml.remove(); //borra el div de la orderrow
                    var idx = mylist.indexOf(pdtid); //encuentra el indice del producto en la lista
                    mylist.splice(idx, 1); //elimina el producto de la lista a partir de su indice
                })
                break;
            default:
                break;
        }
        actionId = "ESC"
    }
});

//cerrar overlay:

goBackBtn.click(function(e) {
    let allCTApopUp = $(".cta-pop-up");

    for(const popup of allCTApopUp) {
        popup.style.display="none";
    }
    overlay[0].style.display="none";
    goBackBtn[0].style.display="none";
});


//agregar nro de cliente y nro de orden a encabezado de la orden:
var orderHeader = $("#odr-hdr"); 
orderHeader.append(buildHtmlOrderHeader());

//agregar productos al pedido (no se permiten productos repetidos):
var addPdt = $(".product-add-btn");
var orderBody = $("#odr-bdy");
var mylist = [];

addPdt.click(function(e) {
    let pdtid = e.target.parentNode.id;
    let exist = mylist.find(pdt => pdt === pdtid);

    if(typeof exist === 'undefined') {
        orderBody.append(buildHtmlOrderRow(e));
        mylist.push(pdtid);
    }
});
