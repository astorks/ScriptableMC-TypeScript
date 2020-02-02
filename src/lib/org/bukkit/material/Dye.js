export default class Dye {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Dye');
    }
    constructor(...args) {
        return new Dye.$javaClass(...args);
    }
}
