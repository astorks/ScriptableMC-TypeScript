export default class TripwireHook {
    static get $javaClass() {
        return Java.type('org.bukkit.material.TripwireHook');
    }
    constructor(...args) {
        return new TripwireHook.$javaClass(...args);
    }
}
