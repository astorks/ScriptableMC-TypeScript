export default class PerlinOctaveGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.noise.PerlinOctaveGenerator');
    }
    constructor(...args) {
        return new PerlinOctaveGenerator.$javaClass(...args);
    }
}
