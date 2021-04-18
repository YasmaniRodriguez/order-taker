class product {
    constructor(name, description, category, image, price, stock, reserved) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.image = image;
        this.price = price;
        this.stock = stock;
        this.reserved = reserved;
    }
    
    get getName() {
        return this.name;
    }

    set setName(newName) {
        this.name = newName;
    }

    get getDescription() {
        return this.description;
    }

    set setDescription(newDescription) {
        this.description = newDescription;
    }

    get getCategory() {
        return this.category;
    }

    set setCategory(newCategory) {
        this.category = newCategory;
    }

    get getImage() {
        return this.image;
    }

    set setImage(newImage) {
        this.image = newImage;
    }

    get getPrice() {
        return this.price;
    }

    set setPrice(newPrice) {
        this.price = newPrice;
    }

    get getStock() {
        return this.stock;
    }

    set setStock(newStock) {
        this.stock = newStock;
    }

    get getReserved() {
        return this.reserved;
    }

    set setReserved(newReserved) {
        this.reserved = newReserved;
    }

    reserveStock(ReservedQty) {
        this.stock -= ReservedQty;
        this.reserved += ReservedQty;
    }

    cancelReservation(ReservedQty) {
        this.reserved -= ReservedQty;
        this.stock += ReservedQty;
    }
    
    closeReservation(ReservedQty) {
        this.reserved -= ReservedQty;
    }
}