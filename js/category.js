class category {
    constructor(name, description, parent, image) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.parent = parent;
    }

    get getName() {
        return this.name
    }

    set setName(newName) {
        this.name = newName;
    }

    get getDescription() {
        return this.description
    }

    set setDescription(newDescription) {
        this.description = newDescription;
    }

    get getImage() {
        return this.image;
    }

    set setImage(newImage) {
        this.image = newImage;
    }

    get getParent() {
        return this.parent
    }

    set setParent(newParent) {
        this.parent = newParent;
    }
}