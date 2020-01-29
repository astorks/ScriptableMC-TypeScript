export class BlockVector {
    static get $javaClass() {
        return Java.type('org.bukkit.util.BlockVector');
    }
    constructor(...args) {
        return new BlockVector.$javaClass(...args);
    }
    static deserialize(...args) {
        return BlockVector.$javaClass.deserialize(...args);
    }
    static getMaximum(...args) {
        return BlockVector.$javaClass.getMaximum(...args);
    }
    static getMinimum(...args) {
        return BlockVector.$javaClass.getMinimum(...args);
    }
    static getRandom(...args) {
        return BlockVector.$javaClass.getRandom(...args);
    }
    static getEpsilon(...args) {
        return BlockVector.$javaClass.getEpsilon(...args);
    }
}
