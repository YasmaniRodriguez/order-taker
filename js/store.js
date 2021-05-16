class Store {
    constructor(nombre, description, alias, link, whatsapp, mail, address, logo, background) {
        this.nombre = nombre;
        this.description = description;
        this.alias = alias;
        this.link = link;
        this.whatsapp = whatsapp;
        this.mail = mail;
        this.address = address;
        this.logo = logo;
        this.background = background;
    }

    setShare() {
        this.link = "https://" + this.alias + ".ordertaker.com.ar";
    }

}

export { Store };
