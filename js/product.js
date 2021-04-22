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
    
    get Name() {
        return this.name;
    }

    set Name(newName) {
        this.name = newName;
    }

    get Description() {
        return this.description;
    }

    set Description(newDescription) {
        this.description = newDescription;
    }

    get Category() {
        return this.category;
    }

    set Category(newCategory) {
        this.category = newCategory;
    }

    get Image() {
        return this.image;
    }

    set Image(newImage) {
        this.image = newImage;
    }

    get Price() {
        return this.price;
    }

    set Price(newPrice) {
        this.price = newPrice;
    }

    get Stock() {
        return this.stock;
    }

    set Stock(newStock) {
        this.stock = newStock;
    }

    get Reserved() {
        return this.reserved;
    }

    set Reserved(newReserved) {
        this.reserved = newReserved;
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