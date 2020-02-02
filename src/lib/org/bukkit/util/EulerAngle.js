export default class EulerAngle {
    static get $javaClass() {
        return Java.type('org.bukkit.util.EulerAngle');
    }
    constructor(...args) {
        return new EulerAngle.$javaClass(...args);
    }
    static get ZERO() {
        return EulerAngle.$javaClass.ZERO;
    }
}
