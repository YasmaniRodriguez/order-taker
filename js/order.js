class Order {
    constructor(number, customer) {
        this.number = number;
        this.customer = customer;
    }
}

class OrderRow {
    constructor(order, product, quantity) {
        this.order = order;
        this.product = product;
        this.quantity = quantity;
    }
}

export { Order, OrderRow };
