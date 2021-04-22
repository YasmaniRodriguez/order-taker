import './schema.js'

var categories = JSON.parse(localStorage.getItem('categories'));
var products = JSON.parse(localStorage.getItem('products'));
var pagecontent = document.getElementById('pgc');
var productcategory = document.getElementById('ctg');
var productcatalog = document.getElementById('pdt');

for(const ctg of categories) {
    let checkctg = document.createElement("input");
    let divctg = document.createElement("div");
    pagecontent.insertBefore(checkctg,productcategory);
    checkctg.type = "radio";
    checkctg.id = ctg.name;
    checkctg.name = "ctg";
    divctg.innerHTML = `
                        <p>${ctg.description}</p>
                       `;
    productcategory.appendChild(divctg);
    divctg.classList.add("category");
    divctg.classList.add(ctg.name);
}

for(const pdt of products) {
    let divpdt = document.createElement("div");
    productcatalog.appendChild(divpdt);
    divpdt.classList.add("product");
    divpdt.classList.add(pdt.category);
    divpdt.id = pdt.name;
    divpdt.innerHTML = `
                        <p>${pdt.description}</p>
                       `;
}

var ctgcards = document.getElementsByClassName('category');
var clrow = 1;

ctgcards[0].onclick = function () {
    var ctgid = ctgcards[0].classList[clrow];
    document.getElementById(ctgid).checked = true;
}

ctgcards[1].onclick = function () {
    var ctgid = ctgcards[1].classList[clrow];
    document.getElementById(ctgid).checked = true;
}

ctgcards[2].onclick = function () {
    var ctgid = ctgcards[2].classList[clrow];
    document.getElementById(ctgid).checked = true;
}

ctgcards[3].onclick = function () {
    var ctgid = ctgcards[3].classList[clrow];
    document.getElementById(ctgid).checked = true;
}


