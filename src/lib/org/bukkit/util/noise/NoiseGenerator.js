export default class NoiseGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.noise.NoiseGenerator');
    }
    constructor(...args) {
        return new NoiseGenerator.$javaClass(...args);
    }
    static floor(...args) {
        return NoiseGenerator.$javaClass.floor(...args);
    }
}
