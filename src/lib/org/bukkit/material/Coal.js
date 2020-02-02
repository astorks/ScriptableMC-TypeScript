export default class Coal {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Coal');
    }
    constructor(...args) {
        return new Coal.$javaClass(...args);
    }
}
