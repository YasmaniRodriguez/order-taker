class CustomerOrder {
    constructor(customer, orderid) {
        this.orderid = orderid;
        this.customer = customer;
    }
}

class CustomerOrderRow {
    constructor(orderid, product, quantity) {
        this.orderid = orderid;
        this.product = product;
        this.quantity = quantity;
    }
}

export { CustomerOrder, CustomerOrderRow };
