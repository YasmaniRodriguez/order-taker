class Order {
    constructor(customer, orderid) {
        this.orderid = orderid;
        this.customer = customer;
    }
}

class OrderRow {
    constructor(orderid, category, product, quantity, price, amount) {
        this.orderid = orderid;
        this.category = category;
        this.product = product;
        this.quantity = quantity;
        this.price = price;
        this.amount = amount;
    }

    calcAmount(){
        this.amount = this.quantity * this.price;
    }

    setQty(qty){
        this.quantity = qty;
    }
}

export { Order, OrderRow };
