export default class SimplexNoiseGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.noise.SimplexNoiseGenerator');
    }
    constructor(...args) {
        return new SimplexNoiseGenerator.$javaClass(...args);
    }
    static getInstance(...args) {
        return SimplexNoiseGenerator.$javaClass.getInstance(...args);
    }
    static getNoise(...args) {
        return SimplexNoiseGenerator.$javaClass.getNoise(...args);
    }
    static floor(...args) {
        return SimplexNoiseGenerator.$javaClass.floor(...args);
    }
}
