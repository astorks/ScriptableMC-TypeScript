export class BoundingBox {
    static get $javaClass() {
        return Java.type('org.bukkit.util.BoundingBox');
    }
    constructor(...args) {
        return new BoundingBox.$javaClass(...args);
    }
    static of(...args) {
        return BoundingBox.$javaClass.of(...args);
    }
    static deserialize(...args) {
        return BoundingBox.$javaClass.deserialize(...args);
    }
}
