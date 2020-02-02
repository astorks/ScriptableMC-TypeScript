export default class Sign {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Sign');
    }
    constructor(...args) {
        return new Sign.$javaClass(...args);
    }
}
