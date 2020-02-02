export default class LongGrass {
    static get $javaClass() {
        return Java.type('org.bukkit.material.LongGrass');
    }
    constructor(...args) {
        return new LongGrass.$javaClass(...args);
    }
}
