export class RayTraceResult {
    static get $javaClass() {
        return Java.type('org.bukkit.util.RayTraceResult');
    }
    constructor(...args) {
        return new RayTraceResult.$javaClass(...args);
    }
}
//# sourceMappingURL=RayTraceResult.js.map