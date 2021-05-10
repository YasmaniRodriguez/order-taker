class Order {
    constructor(customer, orderid) {
        this.orderid = orderid;
        this.customer = customer;
    }
}

class OrderRow {
    constructor(orderid, product, quantity, amount) {
        this.orderid = orderid;
        this.product = product;
        this.quantity = quantity;
        this.amount = amount;
    }
}

export { Order, OrderRow };
