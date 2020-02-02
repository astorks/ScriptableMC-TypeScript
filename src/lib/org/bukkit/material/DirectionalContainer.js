export default class DirectionalContainer {
    static get $javaClass() {
        return Java.type('org.bukkit.material.DirectionalContainer');
    }
    constructor(...args) {
        return new DirectionalContainer.$javaClass(...args);
    }
}
