export default class Rails {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Rails');
    }
    constructor(...args) {
        return new Rails.$javaClass(...args);
    }
}
