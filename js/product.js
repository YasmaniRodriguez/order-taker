class Product {
    constructor(name, description, category, image, price, stock, reserved) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.image = image;
        this.price = price;
        this.stock = stock;
        this.reserved = reserved;
    }
    
    reserveStock(reservedQty) {
        this.stock -= reservedQty;
        this.reserved += reservedQty;
    }

    cancelReservation(reservedQty) {
        this.reserved -= reservedQty;
        this.stock += reservedQty;
    }
    
    closeReservation(reservedQty) {
        this.reserved -= reservedQty;
    }
}

export { Product };