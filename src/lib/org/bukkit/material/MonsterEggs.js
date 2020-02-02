export default class MonsterEggs {
    static get $javaClass() {
        return Java.type('org.bukkit.material.MonsterEggs');
    }
    constructor(...args) {
        return new MonsterEggs.$javaClass(...args);
    }
}
