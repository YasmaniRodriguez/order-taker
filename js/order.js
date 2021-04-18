class order {
    constructor(number, customer, orderrow) {
        this.number = number;
        this.customer = customer;
        this.orderrow = orderrow;
    }
}

class orderrow {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}

export { order, orderrow };
