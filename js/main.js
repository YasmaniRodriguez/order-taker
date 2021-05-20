import './schema.js'
import { categories, products, order } from './schema.js'
import { buildHtmlOrderHeader, buildHtmlOrderRow, buildHtmlOrderFooter, getPromotions } from './function.js';
import { Order, OrderRow } from './order.js'

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
                let removePdt = $(".orderrow .remove");
                let quantity = $(".orderrow .quantity");
                
                orderPopUp.show()
                          .css("display","block");
                //eliminar productos de la orden:          
                removePdt.click(function(e){
                    let orderRowHtml = e.target.parentNode;
                    let product = e.target.parentNode.classList[1];
                    let idx; 
                    //borra el div de la orderrow correspondiente:
                    orderRowHtml.remove();
                    //busca el indice del producto en la lista:
                    for(var i = 0; i < rows.length; i++) {
                        if(rows[i].product === product){
                            idx = i
                        }
                    }
                    //elimina el producto de la lista a partir de su indice:
                    rows.splice(idx, 1); 
                });

                //calcular monto:
                quantity.change((e) => {
                    let product = e.target.parentNode.children[1].innerHTML;
                    let quantity = parseInt(e.target.value);
                    let amount = e.target.parentNode.children[5];
                    let total = e.target.parentNode.parentNode.nextElementSibling.children[0].children[0];
                    let rowAmount = 0;
                    let totalAmount = 0;
                    //monto x fila:
                    rows.forEach(row => {
                        if(row.product === product){
                            row.setQty(quantity);
                            row.calcAmount();
                            rowAmount = row.amount;
                        }
                    });
                    //monto total:
                    rows.forEach(row => {
                        totalAmount = totalAmount + row.amount;
                    });

                    amount.innerHTML = "$" + rowAmount;
                    total.innerHTML = totalAmount;
                });
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
var orderFooter = $("#odr-ftr");
orderHeader.append(buildHtmlOrderHeader());
orderFooter.append(buildHtmlOrderFooter());

//agregar productos al pedido (no se permiten productos repetidos):
var addPdt = $(".product-add-btn");
var orderBody = $("#odr-bdy");
var rows = [];

addPdt.click(function(e) {
    let category = e.target.parentNode.classList[1];
    let product = e.target.parentNode.id;
    let price = e.target.parentNode.children[3].children[1].innerText;
    let exist = rows.find(pdt => pdt.product === product);

    if(typeof exist === 'undefined') {
        rows.push(new OrderRow(order, category, product,"", price,""));
        
        rows.forEach(row => {
            row.calcAmount();
        });

        orderBody.append(buildHtmlOrderRow(e));
    }
});

export { rows };