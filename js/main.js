import './schema.js'
import { order } from './schema.js'
import { buildHtmlOrderHeader, buildHtmlOrderRow, buildHtmlOrderFooter, postOrder, buildHtmlPromotionBody } from './function.js';
import { OrderRow } from './order.js'


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
    
    productCategory.fadeOut();
    productCatalog.fadeIn() 
                  .css("display", "flex");

    categoryBreadcrumb.fadeIn();
    categoryBreadcrumbText[0].innerHTML = categoryName;

    for(const pdt of productContainer) {
        let pdtctg = pdt.classList[1];

        if(pdtctg == category) {
            pdt.style.display="grid";
        }
    }
});

//cerrar la vista de productos y regresar a la vista de categorias:

homeBreadcrumb.click(function(e) {
    categoryBreadcrumb.fadeOut();
    productCatalog.fadeOut();
    productContainer.fadeOut();
    productCategory.fadeIn() 
                   .css("display", "grid");
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
    let total = $("#order-amount");

    overlay.fadeIn()
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
                buildHtmlPromotionBody();
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
                    quantity.trigger("change"); 
                });

                //calcular monto:
                quantity.change((e) => {
                    let product = e.target.parentNode.children[1].innerHTML;
                    let quantity = parseInt(e.target.value);
                    let amount = e.target.parentNode.children[5];
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
                    total[0].children[0].innerHTML = totalAmount;
                    myOrderAmount = totalAmount;
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
    overlay.fadeOut();
    goBackBtn.hide();
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
var myOrderAmount;

addPdt.click(function(e) {
    let category = e.target.parentNode.classList[1];
    let product = e.target.parentNode.id;
    let price = e.target.parentNode.children[3].children[1].innerText;
    let exist = rows.find(pdt => pdt.product === product);
    let defaultQty = 1;
    let defaultAmount;
    let totalAmount = 0;
    let orderAmount = $("#order-amount");

    if(typeof exist === 'undefined') {
        rows.push(new OrderRow(order, category, product,defaultQty, price,""));
        
        rows.forEach(row => {
            row.calcAmount();
            defaultAmount = row.amount;
        });

        orderBody.append(buildHtmlOrderRow(e,defaultQty, defaultAmount));
    }

    rows.forEach(row => {
        totalAmount = totalAmount + row.amount;
    });

    myOrderAmount = totalAmount;

    orderAmount[0].children[0].innerHTML = totalAmount;
});

//enviar la orden al proveedor:
var submitOrder = $("#submit-order-btn");

submitOrder.click((e)=> {
    e.preventDefault();
    postOrder();
});

export { rows, myOrderAmount };