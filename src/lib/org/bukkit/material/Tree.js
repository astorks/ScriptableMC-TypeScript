export default class Tree {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Tree');
    }
    constructor(...args) {
        return new Tree.$javaClass(...args);
    }
}
