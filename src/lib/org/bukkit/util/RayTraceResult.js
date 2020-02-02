export default class RayTraceResult {
    static get $javaClass() {
        return Java.type('org.bukkit.util.RayTraceResult');
    }
    constructor(...args) {
        return new RayTraceResult.$javaClass(...args);
    }
}
