export default class Wood {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Wood');
    }
    constructor(...args) {
        return new Wood.$javaClass(...args);
    }
}
