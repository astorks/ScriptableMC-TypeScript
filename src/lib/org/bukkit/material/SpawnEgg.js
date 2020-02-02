export default class SpawnEgg {
    static get $javaClass() {
        return Java.type('org.bukkit.material.SpawnEgg');
    }
    constructor(...args) {
        return new SpawnEgg.$javaClass(...args);
    }
}
