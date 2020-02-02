export default class SimplexOctaveGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.noise.SimplexOctaveGenerator');
    }
    constructor(...args) {
        return new SimplexOctaveGenerator.$javaClass(...args);
    }
}
