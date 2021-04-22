class Order {
    constructor(number, customer, orderrow) {
        this.number = number;
        this.customer = customer;
        this.orderrow = orderrow;
    }
}

class OrderRow {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}

export { Order, OrderRow };
