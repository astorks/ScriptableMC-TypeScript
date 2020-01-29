export class Vector {
    static get $javaClass() {
        return Java.type('org.bukkit.util.Vector');
    }
    constructor(...args) {
        return new Vector.$javaClass(...args);
    }
    static deserialize(...args) {
        return Vector.$javaClass.deserialize(...args);
    }
    static getMaximum(...args) {
        return Vector.$javaClass.getMaximum(...args);
    }
    static getMinimum(...args) {
        return Vector.$javaClass.getMinimum(...args);
    }
    static getRandom(...args) {
        return Vector.$javaClass.getRandom(...args);
    }
    static getEpsilon(...args) {
        return Vector.$javaClass.getEpsilon(...args);
    }
}
