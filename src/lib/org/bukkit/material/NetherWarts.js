export default class NetherWarts {
    static get $javaClass() {
        return Java.type('org.bukkit.material.NetherWarts');
    }
    constructor(...args) {
        return new NetherWarts.$javaClass(...args);
    }
}
