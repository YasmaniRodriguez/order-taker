import { Category } from './category.js'
import { Product } from './product.js'

var categories = [];
var products = [];

const saveLocal = (key, value) => {localStorage.setItem(key, value)};

categories.push(new Category("ctg01", "pizzas", "./images/ctg01/ctg01.jpg"));
categories.push(new Category("ctg02", "tartas", "./images/ctg02/ctg02.jpg"));
categories.push(new Category("ctg03", "empanadas", "./images/ctg03/ctg03.jpg"));
categories.push(new Category("ctg04", "bebidas", "./images/ctg04/ctg04.jpg"));

products.push(new Product("pdt01", "mozzarella", "ctg01", "./images/ctg01/pdt01.jpg", null, null, null));
products.push(new Product("pdt02", "jamón y morrones", "ctg01", "./images/ctg01/pdt02.jpg", null, null, null));
products.push(new Product("pdt03", "napolitana", "ctg01", "./images/ctg01/pdt03.jpg", null, null, null));
products.push(new Product("pdt04", "4 quesos", "ctg01", "./images/ctg01/pdt04.jpg", null, null, null));
products.push(new Product("pdt05", "fugazzetta", "ctg01", "./images/ctg01/pdt05.jpg", null, null, null));

products.push(new Product("pdt06", "jamón y queso", "ctg02", "./images/ctg02/pdt06.jpg", null, null, null));
products.push(new Product("pdt07", "atún", "ctg02", "./images/ctg02/pdt07.jpg", null, null, null));
products.push(new Product("pdt08", "pollo", "ctg02", "./images/ctg02/pdt08.jpg", null, null, null));
products.push(new Product("pdt09", "verduras", "ctg02", "./images/ctg02/pdt09.jpg", null, null, null));
products.push(new Product("pdt10", "carne y huevo", "ctg02", "./images/ctg02/pdt10.jpg", null, null, null));

products.push(new Product("pdt11", "carne suave", "ctg03", "./images/ctg03/pdt11.jpg", null, null, null));
products.push(new Product("pdt12", "atún", "ctg03", "./images/ctg03/pdt12.jpg", null, null, null));
products.push(new Product("pdt13", "humita", "ctg03", "./images/ctg03/pdt13.jpg", null, null, null));
products.push(new Product("pdt14", "pollo", "ctg03", "./images/ctg03/pdt14.jpg", null, null, null));
products.push(new Product("pdt15", "jamón y queso", "ctg03", "./images/ctg03/pdt15.jpg", null, null, null));

products.push(new Product("pdt16", "gaseosa", "ctg04", "./images/ctg04/pdt16.jpg", null, null, null));
products.push(new Product("pdt17", "agua saborizada", "ctg04", "./images/ctg04/pdt17.jpg", null, null, null));
products.push(new Product("pdt18", "cerveza", "ctg04", "./images/ctg04/pdt18.jpg", null, null, null));
products.push(new Product("pdt19", "jugo", "ctg04", "./images/ctg04/pdt19.jpg", null, null, null));
products.push(new Product("pdt20", "agua sin gas", "ctg04", "./images/ctg04/pdt20.jpg", null, null, null));

saveLocal('categories', JSON.stringify(categories));
saveLocal('products', JSON.stringify(products));
