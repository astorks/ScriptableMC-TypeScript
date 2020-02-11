export default class MinecraftVersion {
    static get $javaClass() {
        return Java.type('com.smc.version.MinecraftVersion');
    }
    static get COMPARATOR() {
        return MinecraftVersion.$javaClass.COMPARATOR;
    }
    static of(...args) {
        return MinecraftVersion.$javaClass.of(...args);
    }
    static parse(...args) {
        return MinecraftVersion.$javaClass.parse(...args);
    }
    static getRuntimeVersion(...args) {
        return MinecraftVersion.$javaClass.getRuntimeVersion(...args);
    }
}
