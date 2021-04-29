import { Category } from './category.js'
import { Product } from './product.js'
import { buildHtmlCategory, buildHtmlProduct, createOrderID, createCustomerID } from './function.js'

//crear los objetos:
var categories = [];
var products = [];

categories.push(new Category("ctg01", "pizzas", "images/ctg01/ctg01.jpg"));
categories.push(new Category("ctg02", "tartas", "images/ctg02/ctg02.jpg"));
categories.push(new Category("ctg03", "empanadas", "images/ctg03/ctg03.jpg"));
categories.push(new Category("ctg04", "bebidas", "images/ctg04/ctg04.jpg"));

products.push(new Product("pdt01", "mozzarella", "ctg01", "images/ctg01/pdt01.jpg", 550, 1000, 0));
products.push(new Product("pdt02", "jamón y morrones", "ctg01", "images/ctg01/pdt02.jpg", 550, 1000, 0));
products.push(new Product("pdt03", "napolitana", "ctg01", "images/ctg01/pdt03.jpg", 550, 1000, 0));
products.push(new Product("pdt04", "4 quesos", "ctg01", "images/ctg01/pdt04.jpg", 550, 1000, 0));
products.push(new Product("pdt05", "fugazzetta", "ctg01", "images/ctg01/pdt05.jpg", 550, 1000, 0));
products.push(new Product("pdt06", "jamón y queso", "ctg02", "images/ctg02/pdt06.jpg", 250, 1000, 0));
products.push(new Product("pdt07", "atún", "ctg02", "images/ctg02/pdt07.jpg", 250, 1000, 0));
products.push(new Product("pdt08", "pollo", "ctg02", "images/ctg02/pdt08.jpg", 250, 1000, 0));
products.push(new Product("pdt09", "verduras", "ctg02", "images/ctg02/pdt09.jpg", 250, 1000, 0));
products.push(new Product("pdt10", "carne y huevo", "ctg02", "images/ctg02/pdt10.jpg", 250, 1000, 0));
products.push(new Product("pdt11", "carne suave", "ctg03", "images/ctg03/pdt11.jpg", 75, 1000, 0));
products.push(new Product("pdt12", "atún", "ctg03", "images/ctg03/pdt12.jpg", 75, 1000, 0));
products.push(new Product("pdt13", "humita", "ctg03", "images/ctg03/pdt13.jpg", 75, 1000, 0));
products.push(new Product("pdt14", "pollo", "ctg03", "images/ctg03/pdt14.jpg", 75, 1000, 0));
products.push(new Product("pdt15", "jamón y queso", "ctg03", "images/ctg03/pdt15.jpg", 75, 1000, 0));
products.push(new Product("pdt16", "gaseosa", "ctg04", "images/ctg04/pdt16.jpg", 45, 1000, 0));
products.push(new Product("pdt17", "agua saborizada", "ctg04", "images/ctg04/pdt17.jpg", 45, 1000, 0));
products.push(new Product("pdt18", "cerveza", "ctg04", "images/ctg04/pdt18.jpg", 45, 1000, 0));
products.push(new Product("pdt19", "jugo", "ctg04", "images/ctg04/pdt19.jpg", 45, 1000, 0));
products.push(new Product("pdt20", "agua sin gas", "ctg04", "images/ctg04/pdt20.jpg", 45, 1000, 0));

//guardar los objetos en el localstorage:

localStorage.setItem('categories', JSON.stringify(categories));
localStorage.setItem('products', JSON.stringify(products));

//sacar los objetos del localstorage:
var categories = JSON.parse(localStorage.getItem('categories'));
var products = JSON.parse(localStorage.getItem('products'));

//seleccionar los nodos:
var productCategory = document.getElementById('product-category');
var productCatalog = document.getElementById('product-catalog');

//insertar categorias de forma dinamica:
productCategory.innerHTML = "";
var html = '';
categories.forEach(category => {
    let categoryHtml = buildHtmlCategory(category);
    return html = html + categoryHtml;
});

productCategory.innerHTML = html;

//insertar productos de forma dinamica:
productCatalog.innerHTML = "";
html = '';
products.forEach(product => {
    let productHtml = buildHtmlProduct(product);
    return html = html + productHtml;
});

productCatalog.innerHTML = html;

//asignar identificador al cliente:

var customer;

customer = localStorage.getItem('customer');

if(customer === null) {
    let customer = createCustomerID();
    localStorage.setItem('customer', customer);
}
