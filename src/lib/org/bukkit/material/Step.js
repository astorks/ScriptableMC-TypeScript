export default class Step {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Step');
    }
    constructor(...args) {
        return new Step.$javaClass(...args);
    }
}
