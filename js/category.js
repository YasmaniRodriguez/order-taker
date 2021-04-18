class category {
    constructor(name, description, parent, image) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.parent = parent;
    }

    get Name() {
        return this.name
    }

    set Name(newName) {
        this.name = newName;
    }

    get Description() {
        return this.description
    }

    set Description(newDescription) {
        this.description = newDescription;
    }

    get Image() {
        return this.image;
    }

    set Image(newImage) {
        this.image = newImage;
    }

    get Parent() {
        return this.parent
    }

    set Parent(newParent) {
        this.parent = newParent;
    }
}