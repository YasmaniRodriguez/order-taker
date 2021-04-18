class shop {
    constructor(alias, description, share) {
        this.alias = alias;
        this.description = description;
        this.share = "https://" + this.alias + ".ordertaker.com.ar";
    }

    get getAlias() {
        return this.alias
    }

    set setAlias(newAlias) {
        this.alias = newAlias;
    }

    get getDescription() {
        return this.description
    }

    set setDescription(newDescription) {
        this.description = newDescription;
    }

    get getShare() {
        return this.share
    }

    set setShare() {
        this.share = "https://" + alias + ".ordertaker.com.ar";
    }

}
