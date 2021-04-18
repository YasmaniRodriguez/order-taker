class shop {
    constructor(alias, description, share) {
        this.alias = alias;
        this.description = description;
        this.share = share;
    }

    get Alias() {
        return this.alias
    }

    set Alias(newAlias) {
        this.alias = newAlias;
    }

    get Description() {
        return this.description
    }

    set Description(newDescription) {
        this.description = newDescription;
    }

    get Share() {
        return this.share
    }

    set Share() {
        this.share = "https://" + this.alias + ".ordertaker.com.ar";
    }

}
