export default class SmoothBrick {
    static get $javaClass() {
        return Java.type('org.bukkit.material.SmoothBrick');
    }
    constructor(...args) {
        return new SmoothBrick.$javaClass(...args);
    }
}
